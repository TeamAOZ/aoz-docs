<?php
    header( "Access-Control-Allow-Origin: *" );
    header( "Content-Type: text/plain" );
    $_GET['search'] = 'DB Read'; $_GET['lang'] = 'en';

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
    $code = '';

    $dir = 'repository/md/documentation/default/';
    if( $lang != 'en' )
    {
        $dir = 'repository/md/documentation/cache/'.$lang;
    }
    parseDir( $dir );

    $code = "<h1>Search result</h1>\r\n";
    $code .= "<div class=\"search_results\"><b>".$nb."</b> results(s) for \"<i>".$search."</i>\"</div>\r\n";

    if( $lang == 'fr' )
    {
        $code = '<h1>Résultat de la recherche</h1>';
        $code .= "<div class=\"search_results\"><b>".$nb."</b> résultat(s) pour \"<i>".$search."</i>\"</div>";
    }
    
    foreach( $results as $key => $value )
    {
        $parts = explode( "|", $value );
        $name = computeTopic( $parts[ 1 ] );
        $code .= "<p class=\"bloc-search\" onclick=\"javascript:application.aoz.runProcedure( 'PAGE_LOAD', { ID$: '', URL$: '".str_replace( $dir.'/', 'default/', $parts[ 0 ] )."', IS_NEW: true } );\" style=\"cursor: pointer;\"><b>".$name."</b><br />".$parts[ 2 ]."</p>\r\n";
    }
    die( $code );

    function parseDir( $dir )
    {
        global $code, $nb, $results, $search, $words;
        if( is_dir( $dir ) )
        {
            if( $dh = opendir( $dir ) )
            {
                while( ( $file = readdir( $dh ) ) !== false )
                {
                    $ext = pathinfo( $file, PATHINFO_EXTENSION );
                    if( $file != '.' && $file != '..' && $file != 'topics.txt' && $ext != 'bak' )
                    {
                        if( is_dir(  $dir.'/'.$file ) )
                        {
                            parseDir(  $dir.'/'.$file );                            
                        }
                        else
                        {
                            $content = file_get_contents( $dir.'/'.$file );
                            $short_descr = '';
                            $tmp_descr = '';
                            $tags = "";
                            $categories = "";
                            $lines = explode( "\r\n", $content );
                            for( $l = 0; $l < count( $lines ); $l++ )
                            {
                                if(
                                    !str_starts_with( trim( $lines[ $l ] ), '\\' )
                                    && !str_starts_with( trim( $lines[ $l ] ), '@' )
                                    && !str_starts_with( trim( $lines[ $l ] ), '<' )
                                    && !str_starts_with( trim( $lines[ $l ] ), '#' )
                                    && !str_starts_with( trim( $lines[ $l ] ), '*' )
                                    && !str_starts_with( trim( $lines[ $l ] ), '-' ) )
                                {
                                    if( $tmp_descr == '' )
                                    {
                                        $tmp_descr = $lines[ $l ];
                                        //echo( '>>> ' .$tmp_descr.'<br>' );
                                    }
                                }

                                if( str_starts_with( trim( $lines[ $l ] ), '@description' ) && $short_descr == '' )
                                {
                                    $parts = explode( ':', trim( $lines[ $l ] ) );
                                    $short_descr = $parts[ 1 ];
                                }

                                if( str_starts_with( trim( $lines[ $l ] ), '@tags' ) && $tags == '' )
                                {
                                    $parts = explode( ':', trim( $lines[ $l ] ) );
                                    $tags = $parts[ 1 ];
                                }

                                if( str_starts_with( trim( $lines[ $l ] ), '@categories' ) && $categories == '' )
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

                                    foreach( [ $short_descr, $tags, $categories ] as $into )
                                    {
                                        if(
                                            str_contains( $into, $words[ $w ].' ' )
                                            || str_contains( $into, ' '.$words[ $w ] ) )
                                        {
                                            $match = true;
                                        }
                                    }

                                    if( $match )
                                    {
                                        if( !isset( $results[ $dir.$file ] ) )
                                        {
                                            $results[ $dir.$file ] = str_replace( 'repository/md/documentation//', '', $dir.'/'.$file.'|'.$file.'|'.$short_descr );
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
