var current_zoom = 1.0;
var accessibility = false;
var mot = '';
var searchAll = false;
document.title="AOZ Studio Documentation";

String.prototype.strReplace = function( strSearch, strReplace )
{
	var newStr = '';
	for( n = 0; n < this.length; n++ )
	{
		var part = this.substr( n, strSearch.length );
		if( part == strSearch )
		{
			newStr = newStr + strReplace;
			n = n + ( strSearch.length - 1 );
		}
		else
		{
			newStr = newStr + part.substr( 0, 1 );
		}
	}

	return newStr;
};

function initPanels()
{
	var page = document.location.href;
	var parts = page.split( '/' );
	if( parts )
	{
		page = parts[ parts.length - 1 ];
		page = page.strReplace( '.html', '' );
	}

	if( page.indexOf( '/public/' ) > -1 )
	{
		page = '';
	}

	const queryString = window.location.search;
	const urlParams = new URLSearchParams( queryString );

	if( urlParams.has( 'lang' ) )
	{
		application.root.vars.LANG$ = urlParams.get( 'lang' );
		if( application.root.vars.LANG$ != 'en' && application.root.vars.LANG$ != 'fr' )
		{
			application.root.vars.LANG$ = 'en';
		}
	}
	else
	{
		application.root.vars.LANG$	= 'en';
	}

	if( urlParams.has( 'page' ) || urlParams.has( 'search' ) )
	{
		if( urlParams.has( 'page' ) )
		{
			application.root.vars.URL_SEARCH$ = urlParams.get( 'page' );
			searchAll = false;
		}
		else
		{
			application.root.vars.URL_SEARCH$ = urlParams.get( 'search' );
			searchAll = true;
		}
	}
/**
	else
	{
		if( page != 'aozdoc')
		{
			application.root.vars.URL_SEARCH$ = page;
		}
	}
*/
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

	window.addEventListener( 'keypress', function( event )
	{

		if( !application.root.vars.CHEAT_ACCESS )
		{
			mot = mot + event.key;
			if( mot.length == 16 )
			{
				if( mot.toLowerCase() == 'lend me your pen' )
				{
					application.root.vars.CHEAT_ACCESS = true;
					document.getElementById( 'md_login' ).style.display = 'block';
					document.getElementById( 'md_gator' ).style.display = 'none';
				}
				else
				{
					mot = '';
					application.root.vars.CHEAT_ACCESS = false;
					document.getElementById( 'md_login' ).style.display = 'none';
					document.getElementById( 'md_gator' ).style.display = 'none';
				}
			}
		}
		//event.stopPropagation();

	}, true );
	panelsResize();
}

function panelsResize()
{
	var elm = document.getElementById( 'aoz_html_content' );
	if( elm )
	{
		elm.setAttribute( 'style', 'width:' + window.innerWidth + 'px; height: ' + window.innerHeight + 'px;' );
	}

	var elm = document.querySelectorAll( 'iframe' );
	if( elm )
	{
		for( var e = 0; e < elm.length; e++ )
		{
			elm[ e ].style.height = ( window.innerHeight - 48 ) + 'px';
		}
	}
}

function updateTopics()
{
	var frm = document.getElementById( 'page_topics' );
	if( frm )
	{
		frm.src = application.root.vars.ROOT_URL$ + '/topics.php';
	}
}

function loadWelcome()
{
	var frm = document.getElementById( 'page_frame' );
	if( frm )
	{
		frm.src = application.root.vars.ROOT_URL$ + '/public/default/user_guide/table_of_contents/000_chapter.html';
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

function toggleChapter( elmChapter, itemsElm )
{
	var url = '';
	var id = '';
	if( elmChapter && elmChapter.hasAttribute( 'data-url' ) )
	{
		application.root.vars.CHAP_NAME$ = elmChapter.innerHTML;
		url = elmChapter.getAttribute( 'data-url' );
		id = elmChapter.getAttribute( 'id' );
	}

	if( url == undefined || url.trim() == '' )
	{
		return;
	}

	if( itemsElm && itemsElm.hasAttribute( 'class' ) )
	{
		if( itemsElm.getAttribute( 'class' ) == 'item_hide' )
		{
			itemsElm.setAttribute( 'class', 'item_show' );
		}
		else
		{
			itemsElm.setAttribute( 'class', 'item_hide' );
		}
	}
	application.root.vars.CURRENT_PAGE$ = url;
	application.root.vars.CUR_TYPE$ = "chapter";
	var frm = document.getElementById( 'page_frame' );
	if( frm )
	{
		frm.src = url;
	}
	//window.open( url, 'page_frame' );
}

function search( search, searchAll )
{
	if( searchAll == undefined )
	{
		searchAll = false;
	}
	var frm = document.getElementById( 'page_frame' );
	if( frm )
	{
		frm.src = application.root.vars.ROOT_URL$ + "/search.php?search=" + search + ( ( searchAll ) ? "&all=true" : "" ) + "&lang=" + application.root.vars.LANG$;
	}
//	window.open( application.root.vars.ROOT_URL$ + "/search.php?search=" + search + ( ( searchAll ) ? "&all=true" : "" ) + "&lang=" + application.root.vars.LANG$, 'page_frame' );
}
