var MDParser = 
{
    parse: function( page, panel )
    {
        var stackEdit = new Stackedit();
        if( panel == 'edit' )
        {
            this.aozData =
            {
                page: page,
                modified: false
            };
        }

        var xhr = new XMLHttpRequest();
        xhr.responseType = "text";
        xhr.open( 'GET', './php/?page=' + page );
        var self = this;
        xhr.panel = panel;
        xhr.onload = function()
        {
            if( xhr.status == 200 )
            {
                if( xhr.panel != 'edit' )
                {
                    stackEdit.openFile(
                    {
                        name: '',
                        content: { text: xhr.responseText }
                    }, true );

                    stackEdit.on( 'fileChange', ( file ) => {
                        if( xhr.panel == 'left_panel' )
                        {
                            document.getElementById( xhr.panel ).innerHTML = file.content.text;
                        }
                        else
                        {
                            document.getElementById( xhr.panel ).innerHTML = file.content.html;
                        }
                        setTimeout( function()
                        {
                            document.querySelectorAll('code').forEach( el => {
                                if( el.parentNode )
                                {
                                    el.parentNode.setAttribute( 'class', 'language-aoz line-numbers' );
                                    el.parentNode.setAttribute( 'data-start', '1' );
                                    el.parentNode.setAttribute( 'data-toolbar-order', 'hello-world,select-code' );
                                    el.parentNode.setAttribute( 'data-label', 'Hello World!' );
                                }
                                el.innerHTML = Prism.highlight(el.textContent, Prism.languages.aoz, 'aoz' );

                            } );

                            document.querySelectorAll('a[data-user="*"]').forEach( el => {
                                el.addEventListener( 'click', function( event )
                                {
                                    MDParser.parse( el.getAttribute( 'data-user', 'page' ) );
                                }, true );
                            } );
                        }, 1000 );

                    } );
                }
                else
                {
                    stackEdit.on('fileChange', function onFileChange( file )
                    {
                        self.aozData.modified = true;
                        self.aozData.text = file.content.text;
                        markdown = file.content.text;
                        document.getElementById( 'page' ).innerHTML = file.content.html;
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
                        name: self.aozData.url,
                        content:
                        {
                            text: xhr.responseText
                        } 
                    }, false );

                    stackEdit.on( 'close', () => {
                        if( self.aozData.modified )
                        {
                            var r = confirm( 'The content of the page has been modified. Do you want to save your changes?' );
                            if( r )
                            {
                                // TODO : Save the page
                            }
                        }
                        self.aozData = undefined;
                    } );
                }
            }
        }
        xhr.send();
    },

    edit: function( url )
    {}
    
}