var MDParser =
{
    open: function( url, onSuccess, onError )
    {
		if( document.getElementById( 'md_sync' ).style.display == 'block' )
		{
			var r = confirm( 'Changes have been made to this page and have not been saved. Forget these changes?' );
			if( !r )
			{
				return;
			}
		}

		document.getElementById( 'md_sync').style.display = 'none';
        var xhr = new XMLHttpRequest();
        xhr.responseType = "text";
        xhr.open( 'GET', url + "&lang=" + application.root.vars.LANG$ );
        var self = this;
        xhr.onload = function()
        {
            if( xhr.status == 200 )
            {
				if( onSuccess )
				{
					var code = xhr.responseText;
					code = code.strReplace( '<keep>', '' );
					code = code.strReplace( '</keep>', '' );
					code = code.strReplace( "|;", "'" );
					application.aoz.runProcedure( onSuccess, { CODE$: code } );
				}
			}
        }

		xhr.onerror = function()
        {
			if( onError )
			{
				application.aoz.runProcedure( onError, {} );
			}
        }
        xhr.send();
    },

	show: function( code, domID )
	{
		var stackEdit = new Stackedit();
		stackEdit.openFile(
		{
			name: '',
			content: { text: code }
		}, true );

		stackEdit.on( 'fileChange', ( file ) => {
			document.getElementById( domID ).innerHTML = file.content.html;
			document.querySelector( '#center_panel .scrollpane' ).scrollTop = 0;

			setTimeout( function()
			{
				document.querySelectorAll( 'code' ).forEach( el => {
					el.innerHTML = Prism.highlight(el.textContent, Prism.languages.aoz, 'aoz' );
				} );
				var toggler = document.getElementsByClassName("caret");
				var i;

				for (i = 0; i < toggler.length; i++) {
				  toggler[i].addEventListener("click", function() {
				    this.parentElement.querySelector(".nested").classList.toggle("active");
				    this.classList.toggle("caret-down");
				  });
				}
				fontResize( current_zoom, false );
			}, 1000 );
		} );
	},

	edit: function( code, onChangeProc, onCloseProc )
    {
		var stackEdit = new Stackedit();
		document.getElementById( 'md_sync').style.display = 'block';
		stackEdit.onCloseProc = onCloseProc;
		stackEdit.onChangeProc = onChangeProc;
		stackEdit.on('fileChange', function onFileChange( file )
		{
			stackEdit.storeText = file.content.text;
			application.root.vars.CURRENT_CODE$ = file.content.text;
			if( stackEdit.onChangeProc && stackEdit.onChangeProc != ''  )
			{
				application.aoz.runProcedure( stackEdit.onChangeProc, { CODE$: file.content.text } );
			}
			setTimeout( function()
			{
				document.querySelectorAll('code').forEach( el => {
					if( el.parentNode )
					{
						el.parentNode.setAttribute( 'class', 'language-aoz' );
					}
					el.innerHTML = Prism.highlight(el.textContent, Prism.languages.aoz, 'aoz' );
				} );
			}, 1000 );
		} );

		stackEdit.openFile(
		{
			name: '',
			content:
			{
				text: code
			}
		}, false );

		stackEdit.on( 'close', () => {
			if( stackEdit.onCloseProc && stackEdit.onCloseProc != '' )
			{
				application.aoz.runProcedure( stackEdit.onCloseProc, { CODE$: stackEdit.storeText } )
			}
		} );
	},

	save: function( page, code, onSuccess, onError )
	{
		if( application.root.vars.CHEAT_ACCESS && document.getElementById( 'md_edit' ).style.display == 'block' )
		{
			var xhr = new XMLHttpRequest();
	        xhr.responseType = "text";
			code = code.strReplace( "'", "|;" );
	        xhr.open( 'GET', application.root.vars.ROOT_URL$ + '/php/save.php?page=' + page + '&lang=' + application.root.vars.LANG$ + '&code=' + code );
	        var self = this;
	        xhr.onload = function()
	        {
	            if( xhr.status == 200 )
	            {
					document.getElementById( 'md_sync' ).style.display == 'none';
					if( onSuccess )
					{
						application.aoz.runProcedure( onSuccess, { MESSAGE$: xhr.responseText } );
					}
				}
	        }

			xhr.onerror = function()
	        {
				if( onError )
				{
					application.aoz.runProcedure( onError, { MESSAGE$: xhr.responseText } );
				}
	        }
	        xhr.send( 'code=' + code );
		}
		else
		{
			if( onError )
			{
				application.aoz.runProcedure( onError, { MESSAGE$: 'Operation refused.' } );
			}
		}
	}
}
