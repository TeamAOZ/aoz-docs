<?php
    $action= '';
    if( isset( $_POST['action'] ) )
    {
        $action = $_POST[ 'action' ];
    }

    if( $action == 'chapter' )
    {
        $parentChapter = $_POST[ 'parent' ];
        $chapterName = computeName( $_POST[ 'name' ] );
        $templateTXT = file_get_contents( '../templates/000_chapter.txt' );
        $templateTXT = str_replace( '%name%', $_POST[ 'name' ], $templateTXT );

        $chapterPath = $parentChapter;
        if( $parentChapter == 'user-guide' )
        {
            $chapterPath = './public/default/user_guide/table_of_contents/000_chapter.html';
        }

        if( $parentChapter == 'glossary' )
        {
            $chapterPath = './public/default/syntax/000_chapter.html';
        }

        if( $parentChapter == 'more-tricks' )
        {
            $chapterPath = './public/default/more_tricks/000_chapter.html';
        }
        
        if( $parentChapter == 'tutorials' )
        {
            $chapterPath = './public/default/tutorials/000_chapter.html';
        }

        $infos = pathinfo( $chapterPath );
        $chapterPath = $infos[ 'dirname' ];
        $test = str_replace( './public', '../repository/md/documentation', $chapterPath );
        if( $test != $chapterPath )
        {
            $chapterPath = $test;
        }
        else
        {
            $chapterPath = '../repository/md/documentation/'.str_replace( './', '', $chapterPath );
        }
        $chapterPath = str_replace( './default/', '', $chapterPath );

        $test = str_replace( 'default/', '', $chapterPath );
        if( $test == $chapterPath )
        {
            $chapterPath .= 'default';
        }
        $chapterPath .= '/' . $chapterName;

        $chapterPath = str_replace( 'table_of_contentsdefault', 'table_of_contents/default', $chapterPath );
        $chapterPath = str_replace( 'default/../', '../', $chapterPath );
        if( !file_exists( str_replace( '../repository/md/documentation/', '../public/', $chapterPath ) ) )
        {
            mkdir( str_replace( '../repository/md/documentation/', '../public/', $chapterPath ), 0777, true );
        }

        if( !file_exists( $chapterPath ) )
        {
            mkdir( $chapterPath, 0777, true );
        }

        file_put_contents( $chapterPath . '/000_chapter.txt', $templateTXT );
        die( $chapterPath.'/000_chapter.txt' );
    }
    
    if( $action == 'page' )
    {
        $parentChapter = $_POST[ 'parent' ];
        $pageType = $_POST[ 'type' ];
        $pageName = computeName( $_POST[ 'name' ] );

        $templateTXT = file_get_contents( '../templates/'.$pageType.'.txt' );
        $templateTXT = str_replace( '%name%', $_POST[ 'name' ], $templateTXT );

        $pagePath = $parentChapter;
        if( $parentChapter == 'user-guide' )
        {
            $pagePath = '/default/user_guide/table_of_contents/000_chapter.html';
        }

        if( $parentChapter == 'glossary' )
        {
            $pagePath = '/default/syntax/000_chapter.html';
        }

        if( $parentChapter == 'more-tricks' )
        {
            $pagePath = '/default/more_tricks/000_chapter.html';
        }

        if( $parentChapter == 'tutorials' )
        {
            $pagePath = '/default/tutorials/000_chapter.html';
        }

        $infos = pathinfo( $pagePath );
        $pagePath = $infos[ 'dirname' ];
        $test = str_replace( './public', '../repository/md/documentation', $pagePath );
        if( $test != $pagePath )
        {
            $pagePath = $test;
        }
        else
        {
            $pagePath = '../repository/md/documentation/'.str_replace( './', '', $pagePath );
        }
        $pagePath = str_replace( './default/', '', $pagePath );
        
        $test = str_replace( 'default/', '', $pagePath );
        if( $test == $pagePath )
        {
            $pagePath .= '/default';
        }
        $pagePath = str_replace( './default/', '', $pagePath );
        
        $finalPath = $pagePath.'/'.$pageName.'.txt';
        $finalPath = str_replace( 'table_of_contentsdefault', 'table_of_contents/default', $finalPath );
        $finalPath = str_replace( 'default/../', '../', $finalPath );
        file_put_contents( $finalPath, $templateTXT );
        die( $finalPath );
    }

    function computeName( $name )
    {
        $newName = strtolower( $name );
        $newName = trim( $newName );
        $newName = str_replace( ' ', '_', $newName );

        return $newName;
    }
?>