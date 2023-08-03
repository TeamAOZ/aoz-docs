<?php
    $type = '';
    if( isset( $_POST[ 'type' ] ) )
    {
        $type = $_POST[ 'type' ];
    }

    $url = '';
    if( isset( $_POST[ 'url' ] ) )
    {
        $url = $_POST[ 'url' ];
        $url = str_replace( 'https://doc.aoz.studio/', '../', $url );
    }

    if( substr( $url, 0, 2 ) == './' )
    {
        $url = '.'.$url;
    }

    $path = pathinfo( $url );
    $path = $path[ 'basename' ];

    if( $path != '000_chapter.html' )
    {
        $type = 'page';
    }
    else
    {
        $type = 'chapter';
    }

    if( $type == 'chapter' )
    {
        $path = pathinfo( $url );
        $path = $path[ 'dirname' ];
        rrmdir( $path );
        
        $path = pathinfo( $url );
        $path = str_replace( './public', './repository/md/documentation', $path[ 'dirname' ] );
        rrmdir( $path );
        die( 'Chapter '.$path.' removed.' );
    }

    if( $type == 'page' )
    {
        @unlink( $url );
        $url = str_replace( './public/', './repository/md/documentation/', $url );
        $path = pathinfo( $url );
        @unlink( str_replace( '.html', '.txt', $url ) );
        die( 'Page '.$url.' removed.' );
    }
    
    function rrmdir( $dir )
    {
        if( is_dir( $dir ) )
        { 
            $f = opendir( $dir );
            while( $fichier = readdir( $f ) )
            {
                if( $fichier != '.' && $fichier != '..' )
                {
                    $path = $dir.'/'.$fichier;
                    if( is_dir( $path ) )
                    {
                        rrmdir( $path );
                    }
                    else
                    {
                        @unlink( $path );
                    }
                }
            }
            closedir( $f );
            rmdir( $dir );
        }
    }    
?>
