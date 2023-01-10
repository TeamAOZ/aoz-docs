<?php
    require_once('../vendor/autoload.php');
    header( "Access-Control-Allow-Origin: *" );
    header( "Content-Type: text/plain" );
    $authKey = '507c354c-b1da-2741-d19c-bd9b9053f55b:fx';

    if( isset( $_POST[ 'page' ] ) )
    {
        $page = $_POST[ 'page' ];
    }

    $lang = 'en';
    if( isset( $_POST[ 'lang' ] ) )
    {
        $lang = $_POST[ 'lang' ];
    }

    $code = '';
    if( isset( $_POST[ 'code' ] ) )
    {
        $code = $_POST[ 'code' ];
    }
    
    $content = '';
    if( $lang != 'en' )
    {
        if( str_replace( 'default/', '', $page ) == $page )
        {
            if( file_exists( '../repository/md/documentation/cache/'.$lang.'/default/'.$page ) )
            {
                $content = file_get_contents( '../repository/md/documentation/cache/'.$lang.'/default/'.$page );
                $file_backup = '../repository/md/documentation/cache/'.$lang.'/default/'.$page.'_'.date( 'y.m.d-h-i-s' ).'.bak';
                file_put_contents( $file_backup, $content );
                file_put_contents( '../repository/md/documentation/cache/'.$lang.'/default/', $code );                
            }
        }
        else
        {
            if( file_exists( '../repository/md/documentation/cache/'.$lang.'/'.$page ) )
            {
                $content = file_get_contents( '../repository/md/documentation/cache/'.$lang.'/'.$page );
                $file_backup = '../repository/md/documentation/cache/'.$lang.'/'.$page.'_'.date( 'y.m.d-h-i-s' ).'.bak';
                file_put_contents( $file_backup, $content );  
                file_put_contents( '../repository/md/documentation/cache/'.$lang.'/'.$page, $code );                              
            }
        }
    }

    else
    {
        if( str_replace( 'default/', '', $page ) == $page )
        {
            $content = file_get_contents( '../repository/md/documentation/default/'.$page );
            $file_backup = '../repository/md/documentation/default/'.$page.'_'.date( 'y.m.d-h-i-s' ).'.bak';
            file_put_contents( $file_backup, $content );
            file_put_contents( '../repository/md/documentation/default/'.$page, $code );
        }
        else
        {
            $content = file_get_contents( '../repository/md/documentation/'.$page );
            $file_backup = '../repository/md/documentation/'.$page.'_'.date( 'y.m.d-h-i-s' ).'.bak';
            file_put_contents( $file_backup, $content );                
            file_put_contents( '../repository/md/documentation/'.$page, $code );
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

    die();
?>
