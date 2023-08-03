<?php
    require_once('../vendor/autoload.php');
    header( "Content-Type: text/plain" );

    $mdFile = '';
    if( isset( $_POST[ 'mdFile' ] ) )
    {
        $mdFile = $_POST[ 'mdFile' ];
    }

    $lang = 'en';
    if( isset( $_POST[ 'lang' ] ) )
    {
        $lang = $_POST[ 'lang' ];
    }

    $mdCode = '';
    if( isset( $_POST[ 'mdCode' ] ) )
    {
        $mdCode = $_POST[ 'mdCode' ];
    }
    
    $htmlFile = '';
    if( isset( $_POST[ 'htmlFile' ] ) )
    {
        $htmlFile = $_POST[ 'htmlFile' ];
    }
    
    $htmlCode = '';
    if( isset( $_POST[ 'htmlCode' ] ) )
    {
        $htmlCode = $_POST[ 'htmlCode' ];
    }

    saveFile();

    function saveFile()
    {
        global $mdFile, $lang, $mdCode, $htmlFile, $htmlCode;

        $urls = file_get_contents( '../syntaxURL.txt' );
        $lines = explode( "\r\n", $urls );
        $ln = 0;
        if( $lines && count( $lines ) > 0 )
        {
            foreach( $lines as $line )
            {
                $url = explode( ' -> ', $line );
                if( $ln > 0 && count( $url ) == 2 )
                {
                    $search = '|'.trim( ucwords( $url[ 0 ] ) ).'|';
                    $htmlCode = str_replace( $search, '<a href="'.trim( $url[ 1 ] ).'" target="_self">'.ucwords( trim( $url[ 0 ] ) ).'</a>', $htmlCode );
                    $htmlCode = str_replace( strtolower( $search ), '<a href="'.trim( $url[ 1 ] ).'" target="_self">'.ucwords( trim( $url[ 0 ] ) ).'</a>', $htmlCode ); 
                    $htmlCode = str_replace( strtoupper( $search ), '<a href="'.trim( $url[ 1 ] ).'" target="_self">'.ucwords( trim( $url[ 0 ] ) ).'</a>', $htmlCode ); 
                }
                $ln++;
            }
        }

        $infos = pathinfo( '.'.$htmlFile );
        if( !file_exists( $infos[ 'dirname' ] ) )
        {
            mkdir( $infos[ 'dirname' ], 0777, true );
        }

        $template = file_get_contents( '../templates/page.template.html' );
        $docResult = finalHTML( $mdFile, $mdCode );
        $template = str_replace( '%lang%', $lang, $template );
        $template = str_replace( '%id_site%', $docResult[ 'id_site' ], $template );
        $template = str_replace( '%page_title%', $docResult[ 'name' ], $template );
        $template = str_replace( '%description%', $docResult[ 'description' ], $template );
        $template = str_replace( '%keywords%', $docResult[ 'keywords' ], $template );
        $template = str_replace( '%url%', $docResult[ 'url' ], $template );
        $template = str_replace( '%destination%', str_replace( '../public', './public', $htmlFile ), $template );
        $template = str_replace( '%md%', str_replace( '../public', './repository/md/documentation', $mdFile ), $template );
        $template = str_replace( '%date%', $docResult[ 'date' ], $template );

        $htmlCode = str_replace( '+', '@:@', $htmlCode );
        $template = str_replace( '%body%', $htmlCode, $template );
        file_put_contents( '.'.$htmlFile, $template );

        $infos = pathinfo( $mdFile );
        if( !file_exists( '.'.$infos[ 'dirname' ] ) )
        {
            mkdir( '.'.$infos[ 'dirname' ], 0777, true );
        }

        if( file_exists( '.'.$mdFile ) && !is_dir( '.'.$mdFile ) )
        {
            rename( '.'.$mdFile, '.'.$mdFile.'.'.microtime().'.bak' );
        }
        file_put_contents( '.'.$mdFile, $mdCode );
        file_put_contents( '.'.$mdFile.'.upd', 'ok' );

        die( str_replace( '../public', './public', $htmlFile ) );
    }    

    function finalHTML( $source, $code )
    {
        $finalCode = '';
        $lang = 'en-US';
        $id_site = '';
        $title = '';
        $description = '';
        $keywords = '';
        $author = 'AOZ Studio';

        if( $code && strlen( $code ) != 0 )
        {
            $lines = explode("\n", $code );
            if( $lines )
            {
                for( $l = 0; $l < count( $lines ); $l++ )
                {
                    $line = trim( $lines[ $l ] );
                    $line = str_replace( "\t", '', $line );
                    $line = str_replace( "\r", '', $line );
                    if( $line != '' )
                    {
                        if( $l == 0 )
                        {
                            if( substr( $line, 0, 1 ) == '#' )
                            {
                                $title = substr( $line, 1, strlen( $line ) - 1 );
                            }
                        }

                        if( substr( $line, 0 ,6 ) == '@name:' )
                        {
                            $title = trim( substr( $line, 6, strlen( $line ) - 1 ) );
                            $line = '';
                        }						

                        if( substr( $line, 0, 13 ) == '@description:' )
                        {
                            $description = trim( substr( $line, 13, strlen( $line ) - 1 ) );
                            $line = '';
                        }						

                        if( substr( $line, 0, 6 ) == '@tags:' )
                        {
                            $keywords = trim( substr( $line, 6, strlen( $line ) - 1 ) );
                            $line = '';
                        }

                        if( substr( $line, 0, 1 ) == '@' )                                                                            
                        {
                            $line = '';
                        } 
                    }

                    if( $line != '' )
                    {
                        $finalCode .= $line."\r";
                    }
                }
            }
        }

        if( $title == '' )
        {
            $title = substr( $source, strrpos( '/', $source ), strlen( $source ) - 1 );
            $title = str_replace( '.html', '', $title );
            $title = str_replace( '.txt', '', $title );            
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

        $url = str_replace( ' ', '%20', strtolower( $title ) );
        $date = date('Y-m-d H:i:s');
        $ret = array( 'name' => ( $title != '' ) ? $title : '', 'code' => $code, 'id_site' => $id_site, 'lang' => $lang, "description" => $description, 'keywords' => $keywords, 'author'=> $author, 'url' => $url, 'date' => $date );
        return $ret;
    }

?>

