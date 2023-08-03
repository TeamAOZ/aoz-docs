<!DOCTYPE html>
<html>
    <head>
        <title>AOZ Documentation</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="styles/prism.css" rel="stylesheet" />
                
        <link href="https://stackedit.io/style.css" rel="stylesheet" />
        <link href="styles/global.css" rel="stylesheet" />
        <script src="https://unpkg.com/stackedit-js@1.0.7/docs/lib/stackedit.min.js"></script>                
        <script src="js/string-utils.js" type="text/javascript"></script>
        <script src="js/md-parser.js" type="text/javascript"></script>
    </head>
    <body>
        <div id="content">
            <div id="left_panel">&nbsp;</div>
            <div id="center_panel">
                <div id="page"></div>
            </div>
        </div>
    </body>

    <script src="js/prism.js" type="text/javascript"></script>
    <script src="js/languages/aoz.min.js" type="text/javascript"></script>
 
    <script type="text/javascript">

        MDParser.parse( 'md/documentation/user_guide/table_of_contents/topics.txt', 'left_panel' );
        var searchParams = new URLSearchParams( new URL( document.location.href ).search );

        var search = ( searchParams.has( 'search' ) ) ? searchParams.get( 'search' ) : '';
        var page = ( searchParams.has( 'page' ) ) ? searchParams.get( 'page' ) : 'md/documentation/user_guide/home.txt';
        if( page && page != '' )
        {
            MDParser.parse( page, 'page' );  
        }

    </script>
</html>
