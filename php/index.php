<?php
    require_once('../vendor/autoload.php');
    header( "Access-Control-Allow-Origin: *" );
    header( "Content-Type: text/plain" );
    $authKey = '507c354c-b1da-2741-d19c-bd9b9053f55b:fx';

    $page = '../repositorymd/errors/404.txt';
    if( isset( $_GET[ 'page' ] ) )
    {
        $page = $_GET[ 'page' ];
    }
    $lang = 'en';
    if( isset( $_GET[ 'lang' ] ) )
    {
        $lang = $_GET[ 'lang' ];
    }

    //$file_cache = str_replace( ' ', '_', $page );
    //$file_cache = str_replace( '/', '_', $page );
    $content = '';
    if( $lang != 'en' )
    {
        if( str_replace( 'default/', '', $page ) == $page )
        {
            if( file_exists( '../repository/md/documentation/cache/'.$lang.'/default/'.$page ) )
            {
                $content = file_get_contents( '../repository/md/documentation/cache/'.$lang.'/default/'.$page );
            }
        }
        else
        {
            if( file_exists( '../repository/md/documentation/cache/'.$lang.'/'.$page ) )
            {
                $content = file_get_contents( '../repository/md/documentation/cache/'.$lang.'/'.$page );
            }
        }
    }

    else
    {
        if( str_replace( 'default/', '', $page ) == $page )
        {
            $content = file_get_contents( '../repository/md/documentation/default/'.$page );
        }
        else
        {
            $content = file_get_contents( '../repository/md/documentation/'.$page );
        }
        /**
        if( $lang != 'en' )
        {
            $translator = new \DeepL\Translator( $authKey) ;
            $result = $translator->translateText($content, 'en', $lang, [ 'tag_handling' => 'xml', 'ignore_tags' => [ 'keep' ] ]);
            $content = $result->text; 
            file_put_contents( '../md/documentation/cache/'.$file_cache.'_'.$lang, $content );
        }
        */
    }

    die( $content );
?>
