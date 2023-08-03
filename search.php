<?php
    //header( "Content-Type: text/plain" );

    $cleaner = array(
        'en' => array(
            // articles
            'the', 'a', 'an', 'this', 'that', 'any', 'some', 'my', 'your', 'these',
            // prépositions
            'in', 'on', 'at', 'of', 'from', 'to', 'into', 'by', 'across', 'around', 'near', 'with', 'about', 'along',
            // Conjonctions
            'for', 'and', 'nor', 'but', 'or', 'yet', 'so'
        ),

        'fr' => array(
            // articles
            'un', 'une', 'le', 'la', 'les', 'leur', 'de', 'du', 'des', 'ma', 'mon', 'mes', 'sa','son','ses','ta', 'ton', 'tes',
            'notre', 'nos', 'votre', 'vos',
            // prépositions
            'dans', 'à', 'de', 'depuis', 'vers', 'dedans', 'par', 'à travers', 'autour', 'près de', 'avec', 'à propos', 'au long',
            // Conjonctions
            'mais', 'ou', 'et', 'donc', 'or', 'ni', 'car'
        )
    );

    $search = '';
    $searchAll = false;

    $absoluteMatch = '';
    $words = array();
    $lang = 'en';
    if( isset( $_GET[ 'lang' ] ) )
    {
        $lang = $_GET[ 'lang' ];
    }

    if( isset( $_GET[ 'search' ] ) )
    {
        $search = $_GET[ 'search' ];
        $search = str_replace( "'", "", $search );
        $search = str_replace( '"', '', $search );
        $search = str_replace( '$', '', $search );        
        $search = str_replace( '#', '', $search );        
    }
    
    if( isset( $_GET[ 'all' ] ) )
    {
        $searchAll = true;
    }

    $words = explode( ' ',  $search );
    $words = array_merge( array( $search ), $words );

    if( isset( $cleaner[ $lang ] ) )
    {
        $cleanArr = $cleaner[ $lang ];
        for( $i = 0; $i < count( $words ); $i++ )
        {
            if( in_array( strtolower( $words[$i] ), $cleanArr ) )
            {
                // si le mot est un article ou une préposition, on le retire
                array_splice( $words, $i, 1 );
                $i--;
            }
        }
    }

    $results = array();
    $nb = 0;
    $code = file_get_contents( './templates/search.template.html' );
    $codeResults = '';
    $dir = 'repository/md/documentation/default';
    if( $lang != 'en' )
    {
        $dir = 'repository/md/documentation/cache/'.$lang;
    }
    parseDir( $dir );

    if( $absoluteMatch != '' && !$searchAll )
    {
        //$code = '<input id="absolute_match" type="hidden" value="'.$absoluteMatch.'"></input>';
        header("Location: ".$absoluteMatch);
        die();
    }

    foreach( $results as $key => $value )
    {
        $parts = explode( "|", $value );
        $name = computeTopic( $parts[ 1 ] );
        if( trim( $parts[3] ) != '' )
        {
            $codeResults = "<p class=\"bloc-search\" onclick=\"javascript:window.open('".str_replace( $dir.'/', 'default/', $parts[ 0 ] )."', '_self');\" style=\"cursor: pointer;\"><b>".$name."</b><br />".$parts[ 2 ]."<p>".$codeResults;
        }
        else
        {
            $codeResults .= "<p class=\"bloc-search\" onclick=\"javascript:window.open('".str_replace( $dir.'/', 'default/', $parts[ 0 ] )."', '_self');\" style=\"cursor: pointer;\"><b>".$name."</b><br />".$parts[ 2 ]."<p>";
        }
    }
    $codeResults = '<h1>Search result</h1><div class="search_results"><b>'.$nb.'</b> results(s) for "<i>'.$search.'</i>"</div>'.$codeResults;
    $code = str_replace( '%body%', $codeResults, $code );
    die( $code ); 

    function parseDir( $dir )
    {
        global $code, $nb, $results, $search, $words, $absoluteMatch, $searchAll;

        if( is_dir( $dir ) )
        {
            if( $dh = opendir( $dir ) )
            {
                while( ( $file = readdir( $dh ) ) !== false )
                {
                    $ext = pathinfo( $file, PATHINFO_EXTENSION );
                    if( $file != '.' && $file != '..' && $file != 'topics.txt' && $ext != 'bak' && $ext != 'upd' )
                    {
                        if( is_dir(  $dir.'/'.$file ) )
                        {
                            parseDir(  $dir.'/'.$file );
                            if( $absoluteMatch != '' && !$searchAll )
                            {
                                return;
                            }                            
                        }
                        else
                        {
                            $absoluteMatch = '';
                            $path_parts = pathinfo( $dir.'/'.$file );
                            $name = $path_parts[ 'basename' ];
                            $parts = explode( '_', $name );
                            if( count( $parts ) > 0 )
                            {
                                $name = '';
                                for( $p = 1; $p < count( $parts ); $p++ )
                                {
                                    $name = $name.' '.$parts[ $p ];
                                }
                                $name = str_replace( '.txt', '', $name );
                                $name = str_replace( '�', '', $name );
                                $name = str_replace( '$', '', $name );
                                $name = str_replace( '#', '', $name );
                            }
                            
                            if( strtolower( trim( $name ) ) == strtolower( trim( $search ) ) )
                            {
                                //echo( strtolower( trim( $name ) ) );
                                $url = $path_parts[ 'dirname' ];
                                $url = str_replace( 'repository/md/documentation/', 'public/', $url );
                                $url = $url.'/'.trim( str_replace( '.txt', '.html', $path_parts[ 'basename' ] ) ); 
                                $absoluteMatch = $url;
                                if( !$searchAll )
                                {
                                    return;
                                }
                            }

                            $content = file_get_contents( $dir.'/'.$file );
                            $short_descr = '';
                            $tmp_descr = '';
                            $tags = "";
                            $categories = "";
                            $lines = explode( "\r\n", $content );
                            for( $l = 0; $l < count( $lines ); $l++ )
                            {
                                if( substr( trim( $lines[ $l ] ), 0, 1 ) != '\\' && substr( trim( $lines[ $l ] ), 0, 1 ) != '@' && substr( trim( $lines[ $l ] ), 0, 1 ) != '<' && substr( trim( $lines[ $l ] ), 0, 1 ) != '#' && substr( trim( $lines[ $l ] ), 0, 1 ) != '*' && substr( trim( $lines[ $l ] ), 0, 1 ) != '-' )
                                {
                                    if( $tmp_descr == '' )
                                    {
                                        $tmp_descr = $lines[ $l ];
                                        //echo( '>>> ' .$tmp_descr.'<br>' );
                                    }
                                }

                                if( substr( trim( $lines[ $l ] ), 0, 12 ) == '@description' && $short_descr == '' )
                                {
                                    $parts = explode( ':', trim( $lines[ $l ] ) );
                                    $short_descr = $parts[ 1 ];
                                }

                                if( substr( trim( $lines[ $l ] ), 0, 5) == '@tags' && $tags == '' )
                                {
                                    $parts = explode( ':', trim( $lines[ $l ] ) );
                                    $tags = $parts[ 1 ];
                                }

                                if( substr( trim( $lines[ $l ] ), 0, 11) == '@categories' && $categories == '' )
                                {
                                    $parts = explode( ':', trim( $lines[ $l ] ) );
                                    $categories = $parts[ 1 ];
                                } 

                                if( $short_descr != '' && $tags != '' && $categories != '' )
                                {
                                    break;
                                }                               

                            }

                            if( trim( $short_descr ) == '' )
                            {
                                $short_descr = $tmp_descr;
                            }

                            //echo( $file.'>>> '.$short_descr.'<br>' );

                            $match = false;
                            for( $w = 0; $w < count( $words ); $w++ )
                            {
                                $match = false;
                                if( strlen( $words[ $w ] ) > 2 )
                                {

                                    if( stristr( $file, $words[ $w ] ) !== false )
                                    {
                                        $match = true;
                                    }

                                    if( stristr( $short_descr, $words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }

                                    if( stristr( $short_descr, ' '.$words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }
                                    
                                    if( stristr( $short_descr, ' '.$words[ $w ] ) !== false )
                                    {
                                        $match = true;
                                    }
                                    
                                    if( stristr( $tags, $words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }

                                    if( stristr( $tags, ' '.$words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }
                                    
                                    if( stristr( $tags, ' '.$words[ $w ] ) !== false )
                                    {
                                        $match = true;
                                    }
                                    
                                    if( stristr( $categories, $words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }

                                    if( stristr( $categories, ' '.$words[ $w ].' ' ) !== false )
                                    {
                                        $match = true;
                                    }
                                    
                                    if( stristr( $categories, ' '.$words[ $w ] ) !== false )
                                    {
                                        $match = true;
                                    }

                                    if( $match )
                                    {
                                        $short_descr = str_replace( $words[ $w ], '<b>'.$words[ $w ].'</b>', $short_descr );
                                        if( !isset( $results[ $dir.$file ] ) )
                                        {
                                            $results[ $dir.$file ] = str_replace( 'repository/md/documentation//', '', 'public/'.$dir.'/'.str_replace( '.txt', '.html', $file).'|'.$file.'|'.$short_descr.'|'.$absoluteMatch );
                                            $nb++;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                closedir( $dh );
            }
        }        
    }

    function computeTopic( $name )
    {
        $topic = str_replace( '_', ' ', $name );
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
        $topic = strtoupper( substr( $topic, 0, 1 ) ).substr($topic, 1, strlen( $topic ) );

        return $topic;
    }
?>