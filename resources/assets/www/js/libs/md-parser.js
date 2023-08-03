var MDParser =
{
    open: function( url, onSuccess, onError )
    {
		document.getElementById( 'md_edit' ).style.display = 'none';

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
					code = code.strReplace( "height: 2000px;", "height: 20000px;" );
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
				if( document.getElementById( 'md_gator').style.display == 'block' )
				{
					document.getElementById( 'md_edit').style.display = 'block';
				}

				for (i = 0; i < toggler.length; i++) {
				  toggler[i].addEventListener("click", function() {
				    this.parentElement.querySelector(".nested").classList.toggle("active");
				    this.classList.toggle("caret-down");
				  });
				}
				fontResize( current_zoom, false );

				setTimeout( function()
				{
					var elms = document.querySelectorAll( '.prism' );
					if( elms )
					{
						for( var e = 0; e < elms.length; e++ )
						{
							var copyBtn = document.createElement( 'button' );
							copyBtn.setAttribute( 'class', 'copy-btn' );
							copyBtn.setAttribute( 'alt', 'Copy code' );
							copyBtn.setAttribute( 'title', 'Copy code' );
							copyBtn.innerHTML = 'Copy';
							copyBtn.codeNode = elms[ e ];

							copyBtn.addEventListener( 'click', function( event )
							{
								event.preventDefault();
								if( navigator.clipboard )
								{
									var txt = this.codeNode.textContent;
									navigator.clipboard.writeText( txt );
								}
							}, false );
							elms[ e ].parentNode.appendChild( copyBtn );
						}
					}
				}, 2000 )
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
			application.root.vars.CURRENT_CODE$ = file.content.text;
			application.root.vars.CURRENT_HTML_CODE$ = file.content.html;

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

				var elm = document.querySelector( '.stackedit-iframe-container' );
				if( elm )
				{
					elm.style.width = '98%';
					elm.style.height = '98%';
					elm.style.maxWidth = '98%';
				}

			}, 500 );
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
				application.aoz.runProcedure( stackEdit.onCloseProc, { CODE$: stackEdit.storeText, HTML$: application.root.vars.CURRENT_HTML_CODE$ } )
			}
		} );
	},

	save: function( onSuccess, onError )
	{
		var mdFile = application.root.vars.CURRENT_MD$;
		var mdCode = application.root.vars.CURRENT_CODE$;
		var htmlFile = application.root.vars.CURRENT_HTML$;
		var htmlCode = application.root.vars.CURRENT_HTML_CODE$;

		console.log( htmlCode );

		if( application.root.vars.CHEAT_ACCESS )
		{
			var xhr = new XMLHttpRequest();
	        xhr.responseType = "text";
			mdCode = mdCode.strReplace( "'", "|;" );
	        xhr.open( 'POST', application.root.vars.ROOT_URL$ + '/php/save.php' );
			xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	        var self = this;
	        xhr.onload = function()
	        {
	            if( xhr.status == 200 )
	            {
					document.getElementById( 'md_edit' ).style.display == 'block';
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
	        xhr.send( 'mdFile=' + mdFile + '&lang=' + application.root.vars.LANG$ + '&mdCode=' + encodeURIComponent( mdCode ) + '&htmlFile=' + htmlFile + '&htmlCode=' + encodeURIComponent( htmlCode ) );
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
