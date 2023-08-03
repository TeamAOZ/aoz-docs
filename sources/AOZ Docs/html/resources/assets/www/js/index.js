var current_zoom = 1.0;
var accessibility = false;
document.title="AOZ Studio Documentation";

function initPanels()
{
	Metro.init();

	window.addEventListener( 'resize', function( event )
	{
		event.preventDefault();
		panelsResize();
	}, false );

	window.addEventListener( 'keydown', function( event )
	{
		event.stopPropagation();
	}, true );

	window.addEventListener( 'keyup', function( event )
	{
		event.stopPropagation();
	}, true );
/**
	window.addEventListener( 'keypress', function( event )
	{
		event.stopPropagation();
	}, true );
*/
	panelsResize();
}

function panelsResize()
{
	var elm = document.getElementById( 'aoz_html_content' );
	if( elm )
	{
		elm.setAttribute( 'style', 'width:' + window.innerWidth + 'px; height: ' + window.innerHeight + 'px;' );
	}

	var elm = document.querySelectorAll( '.scrollpane' );
	if( elm )
	{
		for( var e = 0; e < elm.length; e++ )
		{
			elm[ e ].style.height = ( window.innerHeight - 48 ) + 'px';
		}
	}
}

function fontMoins()
{
	if( current_zoom != 1.0)
	{
		current_zoom = 1.0;
		fontResize( current_zoom, true );
	}
}

function fontPlus()
{
	if( current_zoom != 1.5 )
	{
		current_zoom = 1.5;
		fontResize( current_zoom, true );
	}
}

function fontResize( zoom )
{
	document.getElementById( 'topics' ).style.zoom = zoom;
	document.getElementById( 'page' ).style.zoom = zoom;
}

function toggleAccessible()
{
	if( accessibility )
	{
		accessibility = false;
		document.body.style.fontFamily = 'Avenir Next LT Pro';
	}
	else
	{
		accessibility = true;
		document.body.style.fontFamily = 'opendyslexicmonoregular';
	}
}

function toggleChapter( url )
{
	var path = url;
	var parentElm = document.querySelector( 'ul[data-url="' + path + '"]' );
	if( parentElm.hasAttribute( 'class' ) )
	{
		if( parentElm.getAttribute( 'class' ) == 'item_hide' )
		{
			parentElm.setAttribute( 'class', 'item_show' );
		}
		else
		{
			parentElm.setAttribute( 'class', 'item_hide' );
		}
	}
}

function search( search )
{
	var xhr = new XMLHttpRequest();
	xhr.responseType = "text";
	xhr.open( 'GET', application.root.vars.ROOT_URL$ + "/search.php?search=" + search + "&lang=" + application.root.vars.LANG$ );
	var self = this;
	xhr.onload = function()
	{
		if( xhr.status == 200 )
		{
			var code = xhr.responseText;
			code = code.strReplace( 'procedure:PAGE_LOAD(', 'javascript:application.aoz.runProcedure( \'PAGE_LOAD\',' );
			document.getElementById( 'page' ).innerHTML = code;
			document.querySelector( '#center_panel .scrollpane' ).scrollTop = 0;
		}
	}
	xhr.send();
}
