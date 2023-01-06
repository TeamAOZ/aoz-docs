const PATH = require( 'path' );
const FS = require( 'fs' );
const deepl = require('deepl-node');
const authKey = '1e5c8a9b-29ed-6132-bec7-a0ee504b6b28';
var id = 1

String.prototype.strReplace = function( strSearch, strReplace )
{
	var newStr = '';
	for( n = 0; n < this.length; n++ )
	{
		var part = this.substr( n, strSearch.length );
		if( part == strSearch )
		{
			newStr = newStr + strReplace;
			n = n + ( strSearch.length - 1 );
		}
		else
		{
			newStr = newStr + part.substr( 0, 1 );
		}
	}

	return newStr;
};

var template = FS.readFileSync( 'md/template_topics.txt' );
template = template.toString();
var dt = new Date();
var ver = '1.0-' + ( dt.getMonth() + 1 ) + dt.getDate() + dt.getFullYear();
template = template.strReplace( '%VERSION$%', ver );

var docPath = 'md/documentation/default/user_guide/table_of_contents';
var userGuideEN = readDirectory( docPath, 0 );

var docPath = 'md/documentation/default/syntax';
var categoriesEN = readDirectory( docPath, 0 );

var docPath = 'md/documentation/default/more_tricks';
var tricksEN = readDirectory( docPath, 0 );

var templateEN = template.strReplace( '%code%', userGuideEN );
templateEN = templateEN.strReplace( '%categories%', categoriesEN );
templateEN = templateEN.strReplace( '%more_tricks%', tricksEN );

//var docPath = 'md/documentation/default/user_guide/table_of_contents';
var docPath = 'md/documentation/default';
FS.writeFileSync( docPath + '/topics.txt', templateEN, { encoding: 'utf8' } );
/**
// Traduction
setTimeout( function()
{
    const translator = new deepl.Translator(authKey);
    //var page = path + '/' + file.name;
    //var file_cache = page.strReplace( ' ', '_' );
    //file_cache = page.strReplace( '/', '_' );
    //var data = FS.readFileSync( path + '/' + file.name );
    translator.translateText( templateEN, null, 'fr', { tagHandling: 'xml', ignoreTags: [ 'keep' ] } )
    .then(result => {
        FS.writeFileSync( 'md/documentation/cache/fr/default/topics.txt', result.text );
    } )
    .catch( err => {
        console.log( 'Error on: md/documentation/cache/default/fr/topics.txt' );
        console.error( err )
        process.exit();
    } );
}, 500 );
*/
console.log( 'Topics generated!' );
 
function readDirectory( path, depth )
{
    var dataUrl = path;
    var code = '<ul id="path" data-url="' + dataUrl + '" class="' + ( ( depth == 0 ) ? 'item_show' : 'item_hide' ) + '">\r\n';
    var filenames = FS.readdirSync( path, { withFileTypes: true } );
    filenames.forEach( file => {
        var name = computeTopic( path, file.name );
        if( file.isDirectory() )
        {
            if( !FS.existsSync( path + '/' + file.name + '/000_chapter.txt' ) )
            {
                FS.writeFileSync( path + '/' + file.name + '/000_chapter.txt', '# ' + name );
            }

            if( name != '' )
            {
                code += '<li id="T' + id + '" class="chapter" onclick="javascript:toggleChapter( \'' + dataUrl + '/' + file.name + '\' );application.aoz.runProcedure( \'PAGE_LOAD\', { ID$: \'T' + id + '\', URL$: \'' + path + '/' + file.name + '/000_chapter.txt\', IS_NEW: true } );">' + name + '</li>\r\n';
                id++;
            }
        }
        else
        {
            if( name != '' )
            {
                if( PATH.extname( file.name ) == '.txt' && file.name != 'topics.txt' && file.name != '000_chapter.txt' )
                {
                    var page = file.name;
                    // var file_cache = page.strReplace( ' ', '_' );
                    // file_cache = page.strReplace( '/', '_' );
                    var data = FS.readFileSync( path + '/' + file.name );

                    var targetPath = path.strReplace( 'md/documentation', '' );
                    var listPaths = targetPath.split( '/' );
                    var tPath = '';
                    for( var pl = 0; pl < listPaths.length; pl++)
                    {
                        if( listPaths[ pl ] != '' )
                        {
                            tPath = tPath + '/' + listPaths[ pl ];
                            if( !FS.existsSync( 'md/documentation/cache/fr' + tPath ) )
                            {
                                FS.mkdirSync( 'md/documentation/cache/fr' + tPath );
                            }
                        }
                    }
                    /**
                    if( !FS.existsSync( 'md/documentation/cache/fr' + tPath + '/000_chapter.txt' ) )
                    {
                        FS.writeFileSync( 'md/documentation/cache/fr' + tPath + '/000_chapter.txt', '# ' + name );
                    }
                    */

                    // Traduction
                   /**
                    setTimeout( function()
                    {
                        const translator = new deepl.Translator(authKey);
                        //var page = path + '/' + file.name;
                        //var file_cache = page.strReplace( ' ', '_' );
                        //file_cache = page.strReplace( '/', '_' );
                        if( !FS.existsSync( 'md/documentation/cache/fr' + tPath + '/' + file.name ) )
                        {
                            var data = FS.readFileSync( path + '/' + file.name );
                            translator.translateText( data.toString(), null, 'fr', { tagHandling: 'xml', ignoreTags: [ 'keep' ] } )
                            .then(result => {
                                console.log( result);
                                FS.writeFileSync( 'md/documentation/cache/fr' + tPath + '/' + file.name, result.text );
                            } )
                            .catch( err => {
                                console.log( 'Error on: ' + path + '/' + file.name );
                                console.error( err )
                                process.exit();
                            } );
                        }
                    }, 500 );
                    */
                    FS.writeFileSync( 'md/documentation/cache/fr' + tPath + '/' + file.name, data.toString() );
                    code += '<li id="T' + id + '" class="page" onclick="javascript:application.aoz.runProcedure( \'PAGE_LOAD\', {  ID$: \'T' + id + '\', URL$: \'' + path + '/' + file.name + '\', IS_NEW: true } );">' + name + '</li>\r\n';
                    id++;
                }

            }
        }

        if( file.isDirectory() )
        {
            code += readDirectory( path + '/' + file.name, depth + 1 );
        }
    } );

    code += '</ul>\r\n';
    return code;
}

function computeTopic( path, name )
{
    var topic = name.strReplace( '_', ' ' );
    var parts = topic.split( ' ' );
    topic = '';
    var ps = 1;
    if( isNaN( parts[ 0 ] ) )
    { 
        ps = 0;
    }

    for( var p = ps; p < parts.length; p++ )
    {
        if( p > ps )
        {
            topic += ' ';
        }
        topic += parts[ p ];
    }

    topic = topic.strReplace( " s ", "'s " );
    topic = topic.strReplace( ".txt", "" );
    topic = topic.substring( 0, 1 ).toUpperCase() + topic.substring( 1, topic.length );

    return topic
}

