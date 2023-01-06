<?php
    $template = file_get_contents( 'md/template_topics.txt' );
    $dt = date( 'mdY' );
    $id = 0;
    $ver = '1.0-'.$dt;
    $template = str_replace('%VERSION$%', $ver, $template );
    
    $docPath = 'md/documentation/default/user_guide/table_of_contents';
    $userGuideEN = readDirectory( $docPath, 0 );

    $docPath = 'md/documentation/default/syntax';
    $categoriesEN = readDirectory( $docPath, 0 );
    
    $docPath = 'md/documentation/default/more_tricks';
    $tricksEN = readDirectory( $docPath, 0 );

    $templateEN = str_replace( '%code%', $userGuideEN, $template );
    $templateEN = str_replace( '%categories%', $categoriesEN, $templateEN );
    $templateEN = str_replace( '%more_tricks%', $tricksEN, $templateEN );

    $docPath = 'md/documentation/default';
    if( file_exists( $docPath.'/topics.txt' ) )
    {
        rename( $docPath.'/topics.txt', $docPath.'/topics.txt.'.date( "Y-m-d" ).'.bak' );
    }    
    file_put_contents( $docPath.'/topics.txt', $templateEN );
    die( 'Topics generated!' );

    function readDirectory( $path, $depth )
    {
        global $id;
        $dataUrl = $path;
        $code = '<ul id="path" data-url="'.$dataUrl.'" class="'.( ( $depth == 0 ) ? 'item_show' : 'item_hide' ).'">\r\n';
        $fd = opendir( $path );
        while( false !== ( $file = readdir( $fd ) ) )
        {
            if( $file != '.' && $file != '..' )
            {
                $name = computeTopic( $path, $file );
                if( is_dir( $path.'/'.$file ) )
                {
                    if( !file_exists( $path.'/'.$file.'/000_chapter.txt' ) )
                    {
                        file_put_contents( $path.'/'.$file.'/000_chapter.txt', '# '.$name );
                    }
        
                    if( $name != '' )
                    {
                        $code .= '<li id="T'.$id.'" class="chapter" onclick="javascript:toggleChapter( \''.$dataUrl.'/'.$file.'\' );application.aoz.runProcedure( \'PAGE_LOAD\', { ID$: \'T'.$id.'\', URL$: \''.$path.'/'.$file.'/000_chapter.txt\', IS_NEW: true } );">'.$name.'</li>\r\n';
                        $id++;
                    }                    
                }
                else
                {
                    if( $name != '' )
                    {
                        $ext = pathinfo( $file, PATHINFO_EXTENSION );
                        if( $ext == 'txt' && $file != 'topics.txt' && $file != '000_chapter.txt' )
                        {
                            $page = $file;
                            $data = file_get_contents( $path.'/'.$file );
                            $targetPath = str_replace( 'md/documentation', '', $path );
                            $listPaths = explode( '/', $targetPath );
                            $tPath = '';
                            for( $pl = 0; $pl < count( $listPaths ); $pl++)
                            {
                                if( $listPaths[ $pl ] != '' )
                                {
                                    $tPath .= '/'.$listPaths[ $pl ];
                                    if( !file_exists( 'md/documentation/cache/fr'.$tPath ) )
                                    {
                                        mkdir( 'md/documentation/cache/fr'.$tPath );
                                    }
                                }
                            }
                            file_put_contents( 'md/documentation/cache/fr'.$tPath.'/'.$file, $data );
                            $code .= '<li id="T'.$id.'" class="page" onclick="javascript:application.aoz.runProcedure( \'PAGE_LOAD\', {  ID$: \'T'.$id.'\', URL$: \''.$path.'/'.$file.'\', IS_NEW: true } );">'.$name.'</li>\r\n';
                            $id++;
                        }
                    }
                } 
                if( is_dir( $path.'/'.$file ) )
                {
                    $code .= readDirectory( $path.'/'.$file, $depth + 1 );
                }                               
            }
        }
        closedir( $fd );
        $code .= '</ul>\r\n';
        return $code;        
    }

    function computeTopic( $path, $name )
    {
        $topic = str_replace( '_', ' ',$name );
        $parts = explode(' ', $topic );

        $topic = '';
        $ps = 1;
        if( !is_numeric( $parts[ 0 ] ) )
        { 
            $ps = 0;
        }
    
        for( $p = $ps; $p < count( $parts ); $p++ )
        {
            if( $p > $ps )
            {
                $topic .= ' ';
            }
            $topic .= $parts[ $p ];
        }
    
        $topic = str_replace( " s ", "'s ", $topic );
        $topic = str_replace( ".txt", "", $topic );
        $topic = strtoupper( substr( $topic, 0, 1 ) ).substr( $topic, 1, strlen( $topic ) );
    
        return $topic;
    }    
?>