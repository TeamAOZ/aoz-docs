function newChapter()
{
	var sel = document.querySelector( '#chapSelect' );
	var elm = document.querySelector( '#curChap' );

	if( elm )
	{
		if( application.root.vars.CHAP_NAME$ == '' )
		{
			elm.style.display = 'none';
			if( sel )
			{
				sel.value = 'user-guide';
			}
		}
		else
		{
			elm.style.display = 'block';
			elm.setAttribute( 'value', application.root.vars.CURRENT_PAGE$ );
			if( sel )
			{
				sel.value = application.root.vars.CURRENT_PAGE$;
			}

			elm.innerHTML = application.root.vars.CHAP_NAME$;
		}
	}

	elm = document.querySelector( '#chapName' );
	if( elm )
	{
		elm.value = '';
	}
	Metro.dialog.open( '#winNewChapter' );
}

function createNewChapter()
{
	var sel = document.querySelector( '#chapSelect' );
	var chapParent = sel.value;
	var elm = document.querySelector( '#chapName' );
	console.log( chapParent, elm.value.trim() );

	if( elm )
	{
		if( elm.value.trim() == '' )
		{
			alert( 'You must enter a name for the new chapter.' );
			return;
		};

		var xhr = new XMLHttpRequest();
		xhr.open("POST", application.root.vars.ROOT_URL$ + '/php/create.php', true );
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = () => { // Call a function when the state changes.
		  if( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 )
		  {
			  Metro.dialog.close( '#winNewChapter' );
			  showLoader();
			  setTimeout( function()
			  {
				window.open( application.root.vars.ROOT_URL$ + '/topics.php', 'page_topics' );
				console.log( xhr.responseText );
				application.root.vars.CURRENT_HTML$ = xhr.responseText.strReplace( '../repository/md/documentation/', '../public/' ).strReplace( '.txt', '.html' );
				application.root.vars.CURRENT_MD$ = xhr.responseText;
				application.aoz.runProcedure( 'LOAD_CODE' , {} );
				hideLoader();
			  }, 5000 );
		  }
		}
		xhr.send("action=chapter&parent=" + chapParent + "&name=" + elm.value.trim() );
	}
	return;
}

function newPage()
{
	var sel = document.querySelector( '#chapSelect2' );
	var elm = document.querySelector( '#curChap2' );

	if( elm )
	{
		if( application.root.vars.CHAP_NAME$ == '' )
		{
			elm.style.display = 'none';
			if( sel )
			{
				sel.value = 'user-guide';
			}
		}
		else
		{
			elm.style.display = 'block';
			elm.setAttribute( 'value', application.root.vars.CURRENT_PAGE$ );
			if( sel )
			{
				sel.value = application.root.vars.CURRENT_PAGE$;
			}

			elm.innerHTML = application.root.vars.CHAP_NAME$;
		}
	}

	elm = document.querySelector( '#chapName2' );
	if( elm )
	{
		elm.value = '';
	}
	Metro.dialog.open( '#winNewPage' );
}

function createNewPage()
{
	var sel = document.querySelector( '#chapSelect2' );
	var chapParent = sel.value;
	var temp = document.querySelector( '#tempSelect' );
	var pageType = temp.value;
	var elm = document.querySelector( '#chapName2' );
	if( elm )
	{
		if( elm.value.trim() == '' )
		{
			alert( 'You must enter a name for the new page.' );
			return;
		};

		var xhr = new XMLHttpRequest();
		xhr.open("POST", application.root.vars.ROOT_URL$ + '/php/create.php', true );

		// Send the proper header information along with the request
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = () => { // Call a function when the state changes.
		  if( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 )
		  {
			  Metro.dialog.close( '#winNewPage' );
			  showLoader();
			  setTimeout( function()
		  	  {
				window.open( application.root.vars.ROOT_URL$ + '/topics.php', 'page_topics' );
		
				application.root.vars.CURRENT_HTML$ = xhr.responseText.strReplace( '../repository/md/documentation/', '../public/' ).strReplace( '.txt', '.html' );
				application.root.vars.CURRENT_MD$ = xhr.responseText;
				application.aoz.runProcedure( 'LOAD_CODE' , {} );
				hideLoader();
		  	}, 5000 );
		  }
		}
		xhr.send("action=page&parent=" + chapParent + "&type=" + temp.value + "&name=" + elm.value.trim() );
	}
	return;
}

function deleteElement( url )
{
	var url = document.getElementById( 'page_frame' ).contentWindow.location.href;
	var type = application.root.vars.CUR_TYPE$;

	var r = confirm( "This " + type + " will be removed. Continue?" );
	if( r )
	{
		var xhr = new XMLHttpRequest();
		xhr.open("POST", application.root.vars.ROOT_URL$ + '/php/remove.php', true );

		// Send the proper header information along with the request
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = () => { // Call a function when the state changes.
		  if( xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200 )
		  {
			  setTimeout( function()
			  {
				  window.open( application.root.vars.ROOT_URL$ + '/topics.php', 'page_topics' );
				  application.root.vars.CURRENT_HTML$ = './public/default/user_guide/table_of_contents/000_chapter.html';
				  application.root.vars.CURRENT_MD$ = './repository/md/documentation/default/user_guide/table_of_contents/000_chapter.txt';
				  window.open( application.root.vars.CURRENT_HTML$, 'page_frame' );
			}, 5000 );
		  }
		}
		xhr.send("type=" + type + "&url=" + url );
	}
	return;

}

function showLoader(){
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;

	var left = (w - 300) / 2;
	var top = (h - 300) / 2;
	document.querySelector( '#loader' ).style.left = left + 'px';
	document.querySelector( '#loader' ).style.top = top + 'px';
	document.querySelector( '#loader' ).style.display = 'block';
}

function hideLoader(){
	document.querySelector( '#loader' ).style.display = 'none';
}
