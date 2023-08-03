<?php
    require_once('../vendor/autoload.php');
    header( "Content-Type: text/plain" );
    $authKey = '507c354c-b1da-2741-d19c-bd9b9053f55b:fx';

    $page = '../repository/md/errors/404.txt';
    if( isset( $_GET[ 'page' ] ) )
    {
        $page = $_GET[ 'page' ];
    }

    if( substr( $page, 0, 2 ) ==  './' )
    {
        $page = str_replace( './repository', '../repository', $page );
    }
    //$page = str_replace( './default/', '../repository/md/documentation/default/', $page );
    $page = str_replace( '.html', '.txt', $page );
    $lang = 'en';
    if( isset( $_GET[ 'lang' ] ) )
    {
        $lang = $_GET[ 'lang' ];
    }

    $content = file_get_contents( $page );
    die( $content );
?>

