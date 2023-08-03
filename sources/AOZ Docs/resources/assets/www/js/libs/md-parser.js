var MDParser =
{
    open: function( url, onSuccess, onError )
    {
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
		stackEdit.onCloseProc = onCloseProc;
		stackEdit.onChangeProc = onChangeProc;
		stackEdit.on('fileChange', function onFileChange( file )
		{
			stackEdit.storeText = file.content.text;
			if( stackEdit.onChangeProc && stackEdit.onChangeProc != ''  )
			{
				applicaton.aoz.runProcedure( stackEdit.onChangeProc, { CODE$: file.content.text } );
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
	}
}
