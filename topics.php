<?php

    $action= '';
    $result = array();
    $sitemap = "";
    $syntaxURL = "";
    $tree = array( "root" => array() );

    if( $action == '' || $action == 'root' )
    {
        $docTree = '';
        $userGuide='<ul id="path" data-url="./public/default/user_guide/table_of_contents" class="item_show">';
        $ugOpened = false;
        $glossary = '<ul id="path" data-url="./public/default/syntax" class="item_show">';
        $glOpened = false;
        $moretricks = '<ul id="path" data-url="./public/default/more_tricks" class="item_show">';
        $mtOpened = false;
        $tutorials = '<ul id="path" data-url="./public/default/tutorials" class="item_show">';
        $tutorialsOpened = false;
        $tIndex = 1;
        $forced = false;
        $template = file_get_contents( './templates/page.template.html' );
        
        getDocFiles('./repository/md/documentation/default');
        file_put_contents( './sitemap.txt', $sitemap );
        file_put_contents( './syntaxURL.txt', mb_convert_encoding( $syntaxURL, 'UTF-8' ) );

        $userGuide = generateDocTree( './repository/md/documentation/default/user_guide/table_of_contents', 0 );
        $glossary = generateDocTree( './repository/md/documentation/default/syntax', 0 );
        $moretricks = generateDocTree( './repository/md/documentation/default/more_tricks', 0 );
        $tutorials = generateDocTree( './repository/md/documentation/default/tutorials', 0 );

        $docTree = file_get_contents( './templates/topics.txt' );
        $docTree = str_replace( '%USERGUIDE%', $userGuide, $docTree );
        $docTree = str_replace( '%GLOSSARY%', $glossary, $docTree );
        $docTree = str_replace( '%MORETRICKS%', $moretricks, $docTree );
        $docTree = str_replace( '%TUTORIALS%', $tutorials, $docTree );        
        $docTree = str_replace( '%date%', date( "m.d.Y" ), $docTree );

        die( $docTree );
    }

    function getDocFiles( $path )
    {
        global $result, $sitemap, $syntaxURL,$forced;

        $dh = opendir( $path );
        while( ( $file = readdir( $dh ) ) !== false )
        {
            $name = getName( $file );
            if( $name != '' && $file != '.' && $file != '..' )
            {
                if( is_dir( $path.'/'.$file ) )
                {
                    getDocFiles( $path.'/'.$file );
                }
                else
                {
                    if( strtolower( $name ) != 'chapter' )
                    {
                        $syntaxURL .= str_replace( '�', '',  trim( $name ) )." -> "."https://doc.aoz.studio/".str_replace( '�', '', trim( $name ) )."\r\n";
                        $sitemap .= "https://doc.aoz.studio/".trim( str_replace( ' ', '+', $name ) )."\r\n";
                    }
                }
                
                if( !file_exists( $path.'/'.$file.'.upd' ) || $forced )
                {
                    array_push( $result, $path.'/'.$file );
                }
            }
        }
        closedir( $dh );
    }

    function generateDocTree( $path, $depth )
    {
        global $template, $tIndex, $userGuide, $ugOpened, $glossary, $glOpened, $moretricks, $mtOpened, $tutorials, $tutorialsOpened;
        $finalPath = str_replace( './repository/md/documentation/', './public/', $path );

        $code = '<ul id="path_T'.$tIndex.'" data-url="'.$finalPath.'" class="'.( ( $depth == 0 ) ? 'item_show' : 'item_hide' ).'">';
       
        $files = scandir( $path, SCANDIR_SORT_ASCENDING );
        //$dh = opendir( $path );
        //while( ( $file = readdir( $dh ) ) !== false )
        foreach( $files as $file )
        {
            if( $file != '.' && $file != '..' )
            {
                $path_parts = pathinfo( $file );
                $ext = '';
                if( isset( $path_parts[ 'extension' ] ) )
                {
                    $ext = $path_parts[ 'extension' ];
                }
                
                if( $ext != 'bak' && $ext != 'upd' )
                {
                    $name = getName( $file );
                    $htmlPage = $finalPath.'/'.str_replace( '.txt', '.html', $file );
                    
                    if( is_dir( $path.'/'.$file ) )
                    {
                        if( !file_exists( $finalPath.'/'.$file ) )
                        {
                            mkdir( $finalPath.'/'.$file, 0777, true );
                        }

                        if( !file_exists( $finalPath.'/'.$file.'/000_chapter.html' ) )
                        {
                            $code = $template;
                            $code = str_replace( '%page_title%', $name, $code );
                            $code = str_replace( '%body%', '<h1>'.$name.'</h1>', $code );
                            $code = str_replace( '%date%', date( "m.d.Y" ), $code );
                            $code = str_replace( '%url%', str_replace( ' ', '%20', strtolower( $name ) ), $code );
                            $code = str_replace( '%description%', '', $code );
                            $code = str_replace( '%destination%', $finalPath.'/'.$file.'/000_chapter.html', $code );
                            $code = str_replace( '%md%', $path.'/000_chapter.txt', $code );

                            file_put_contents( $finalPath.'/'.$file.'/000_chapter.html', $code );
                        }  
                        
                        if( $name != '' )
                        {
                            $tIndex++;
                            $code .= '<li id="T'.$tIndex.'" class="chapter" data-url="'.$finalPath.'/'.$file.'/000_chapter.html" onclick="javascript:toggleChapter( this, document.getElementById( \'path_T'.$tIndex.'\') );">'.$name.'</li>';
                            $code .= generateDocTree( $path.'/'.$file, $depth + 1 );
                        }
                    }
                    else
                    {
                        if( $name != '' )
                        {
                            //$infos = pathinfo( $htmlPage );
                            if( !file_exists( $finalPath ) )
                            {
                                mkdir( $finalPath, 0777, true );
                            }

                            if( !file_exists( $htmlPage ) )
                            {
                                $code = $template;
                                $code = str_replace( '%page_title%', $name, $code );
                                $code = str_replace( '%body%', '<h1>'.$name.'</h1>', $code );
                                $code = str_replace( '%date%', date( "m.d.Y" ), $code );
                                $code = str_replace( '%url%', str_replace( ' ', '%20', strtolower( $name ) ), $code );
                                $code = str_replace( '%description%', '', $code );
                                $code = str_replace( '%destination%', $htmlPage, $code );
                                $mdPage = $path.'/'.$file;
                                $code = str_replace( '%md%', $mdPage, $code );
                                file_put_contents( $htmlPage, $code );
                            } 

                            if( $ext == 'txt' && $file != 'topics.txt' && $file != '000_chapter.txt' )
                            {
                                $code .= '<li id="T'.$tIndex.'" class="page"><a href="'.str_replace( ' ', '%20', $htmlPage ).'" target="page_frame">'.$name.'</a></li>';
                                $tIndex++;
                            }
                        }
                    }
                }
            }
        }
        //closedir( $dh );
        $code .= '</ul>';
        return $code;
    }
    function getName( $file )
    {
        $path_parts = pathinfo( $file );
        if( isset( $path_parts[ 'extension' ] ) )
        {
            if( strtolower( $path_parts[ 'extension' ] ) != 'txt' )
            {
                return '';
            }
        }

        $topic = str_replace( '_', ' ', $file );
        $parts = explode( ' ', $topic );
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
