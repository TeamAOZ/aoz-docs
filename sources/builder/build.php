<?php
$date = date( 'Y-m-d' );
if ( !is_dir( "../../repository/backups/$date" ) )
{
    mkdir( "../../repository/backups/$date" );
    exec( "rsync -aPq ../../repository/assets/ ../../repository/backups/$date/assets/" );
    exec( "rsync -aPq ../../repository/md/     ../../repository/backups/$date/md/" );
}
exec( 'node build.js' );

echo "Ready.\n";
