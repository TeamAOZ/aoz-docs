<?php
exec( 'node build.js' );
$date = date( 'Y-m-d' );
if ( !is_dir( "../repository/backups/$date" ) )
{
    mkdir( "../repository/backups/$date" );
    exec( "rsync -aPq ../repository/assets/ ../repository/backups/$date/assets/" );
    exec( "rsync -aPq ../repository/md/     ../repository/backups/$date/md/" );
}
exec( 'rsync -aPq --del md/documentation/cache/   ../repository/md/documentation/cache/' );
exec( 'rsync -aPq --del md/documentation/default/ ../repository/md/documentation/default/' );

echo "Ready.\n";
