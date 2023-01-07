<?php
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Cache-Control: no-store, no-cache, must-revalidate, max-age=0' );
    header( 'Cache-Control: post-check=0, pre-check=0', false );
    header( 'Content-Type: text/plain' );
    header( 'Pragma: no-cache' );

    if( !$_GET )
    {
        $_GET = [ 'search' => 'DB one Read', 'lang' => 'en' ];
    }

    $lang   = $_GET[ 'lang' ] ?? 'en';
    $search = $_GET[ 'search' ] ?? '';

    main( $search, $lang );

    function main( string $search, string $lang) : void
    {
        $original_search = $search;
        cleanSearchString( $search );
        $words = explode( ' ', $search );
        cleanSearchWords( $words, $lang );
        $default_dir = 'repository/md/documentation/default';
        $dir     = ( $lang === 'en' ) ? $default_dir : 'repository/md/documentation/cache/' . $lang;
        $results = $words
            ? ( new Search( $words ) )->searchInDir( is_dir( $dir ) ? $dir : $default_dir )
            : [];

        $responses = [];
        ksort( $results );
        foreach( $results as $by_weight )
        {
            krsort( $by_weight );
            foreach( $by_weight as $by_title )
            {
                ksort( $by_title );
                foreach( $by_title as $articles )
                {
                    foreach( $articles as $article )
                    {
                        $responses[] = articleToResponse( $article );
                    }
                }
            }
        }

        $s = ( count( $responses ) > 1 ) ? 's' : '';
        switch( $lang )
        {
            case 'fr':
                echo "<h1>Résultats de la recherche</h1>\r\n";
                echo "<div class=\"search_results\">"
                    . "<b>" . count( $responses ) . "</b> résultat$s pour \"<i>" . $original_search . "</i>\""
                    . "</div>\r\n";
                break;
            default:
                echo "<h1>Search result</h1>\r\n";
                echo "<div class=\"search_results\">"
                    . "<b>" . count( $responses ) . "</b> result$s for \"<i>" . $original_search . "</i>\""
                    . "</div>\r\n";
        }
        foreach( $responses as $response )
        {
            echo $response . "\r\n";
        }
    }

    function articleToResponse( Article $article ) : string
    {
        $link = "javascript:application.aoz.runProcedure( 'PAGE_LOAD', { ID$: '', URL$: '"
            . $article->url() . "', IS_NEW: true } );";
        $name        = $article->title;
        $description = $article->description;
        return "<p class=\"bloc-search\" onclick=\"$link\" style=\"cursor: pointer;\">"
            . "<b>$name</b><br />"
            . $description
            . "</p>";
    }

    function cleanSearchString( string &$search ) : void
    {
        $accents = [
            'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U',
            'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
            'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o', 'ô'=>'o', 'õ'=>'o',
            'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y'
        ];

        $search = trim( $search );
        $search = strtr( $search, $accents );
        $search = str_replace( [ "'", '"', "\t" ], [ '', '', ' ' ], $search );
        removeDoubleSpaces( $search );
        $search = strtolower( $search );
    }

    function cleanSearchWords( array &$words, string $lang ) : void
    {
        $cleaner = [
            'en' => [
                // articles
                'the', 'a', 'an', 'this', 'that', 'any', 'some', 'my', 'your', 'these',
                // prépositions
                'in', 'on', 'at', 'of', 'from', 'to', 'into', 'by', 'across', 'around', 'near', 'with', 'about', 'along',
                // Conjonctions
                'for', 'and', 'nor', 'but', 'or', 'yet', 'so'
            ],
            'fr' => [
                // articles
                'un', 'une', 'le', 'la', 'les', 'leur', 'de', 'du', 'des', 'ma', 'mon', 'mes', 'sa', 'son', 'ses', 'ta', 'ton', 'tes',
                'notre', 'nos', 'votre', 'vos',
                // prépositions
                'dans', 'a', 'de', 'depuis', 'vers', 'dedans', 'par', 'a travers', 'autour', 'pres de', 'avec', 'a propos', 'au long',
                // Conjonctions
                'mais', 'ou', 'et', 'donc', 'or', 'ni', 'car'
            ]
        ];
        $multiple = [
            'en' => [ ],
            'fr' => [ 'a travers', 'pres de', 'a propos', 'au long' ]
        ];
        $cleaner  = $cleaner[ $lang ]  ?? $cleaner[ 'en' ];
        $multiple = $multiple[ $lang ] ?? $multiple[ 'en' ];

        $search = ' ' . join( ' ', $words );
        foreach( $multiple as $pair )
        {
            $search = str_replace( ' ' . $pair . ' ', ' ', $search );
        }
        $words = explode( ' ', trim( $search ) );
        $words = array_diff( $words, $cleaner );
        foreach( $words as $key => $word )
        {
            if( strlen($word) < 2 )
            {
                unset( $words[ $key ] );
            }
        }
    }

    function removeDoubleSpaces( string &$text ) : void
    {
        while( str_contains( $text, '  ' ) )
        {
            $text = str_replace( '  ', ' ', $text );
        }
    }

    class Article
    {

        public string $identifier  = ''; // article identifier : 'path/file_name.txt'
        public string $buffer      = ''; // the full article, begins and ends with \n
        public array  $special     = []; // the special block : key is the data name
        public string $title       = ''; // from '# Name' or @name
        public string $description = ''; // @description or first paragraph content
        public array  $tags        = []; // @tags
        public array  $categories  = []; // @categories
        public array  $sections    = []; // full-text : key = 'title' from ##, value = 'Section text'
        public string $texts       = ''; // sections text, continuous, without titles

        public function __construct( string $identifier, string $buffer )
        {
            $this->identifier = $identifier;
            $this->setBuffer( $buffer );
            $this->parseSpecial();
            $this->parseSections();
            $this->title = $this->lineAfter( "\n# " )
                ?: $this->specialValue( 'name' );
            $this->description = $this->specialValue( 'description' )
                ?: $this->firstPhraseOf( reset( $this->sections ) );
            $this->specialList( 'categories' );
            $this->specialList( 'tags' );
        }

        protected function firstPhraseOf( string $text ) : string
        {
            $text = trim( $text );
            while(
                str_starts_with( $text, '<div')
                || str_starts_with( $text, '<tab')
            )
            {
                $j    = strpos( $text, '</' . substr( $text, 1, 3 ) );
                $text = trim( substr( $text, strpos( $text, '>', $j ) + 1 ) );
            }
            while( str_starts_with( $text, '<') )
            {
                $text = trim( substr( $text, strpos( $text, '>' ) + 1 ) );
            }
            $text = str_replace( [ "\n" , '!', '?', '<' ], '.', $text ) . '.';
            removeDoubleSpaces( $text );
            return "\n" . substr( $text, 0, strpos( $text, '.' ) ) . "\n";
        }

        protected function lineAfter( string $after_what ) : string
        {
            $i = strpos( $this->buffer, $after_what );
            if( $i === false ) return '';
            $i += strlen( $after_what );
            $j  = strpos( $this->buffer, "\n", $i );
            return substr( $this->buffer, $i, $j - $i );
        }

        protected function parseSections() : void
        {
            $this->sections = [];
            $buffer         = $this->buffer;
            if( $this->special )
            {
                $buffer = substr( $buffer, strpos( $buffer, "\n\\-->" ) + 5 );
            }
            elseif( str_contains($buffer, "\n# ") )
            {
                $buffer = substr( $buffer, strpos($buffer, "\n", strpos($buffer, "\n# " ) + 3 ) );
            }
            $section_number = 0;
            $title          = '';
            foreach( explode( "\n## ", $buffer ) as $section )
            {
                $section = trim( $section ) . "\n";
                if( $section_number ++ )
                {
                    $title   = trim( substr( $section, 0, $i = strpos( $section, "\n" ) ) );
                    $section = substr( $section, $i + 1 );
                }
                else {
                    $section = "\n" . $section;
                }
                $this->sections[ strtolower( $title ) ] = str_replace( "\n", ' ', $section );
            }
            $this->texts = str_replace( "\n", ' ', join( ' ', $this->sections ) );
        }

        protected function parseSpecial() : void
        {
            $this->special = [];
            $buffer        = $this->buffer;
            $j             = strpos( $buffer, "\n\\-->" );
            if( !$j ) return;
            $i = strrpos( substr( $buffer, 0, $j ), "\n<!--" );
            if( !$i ) return;
            $i += 5;
            $j += 1;
            foreach( array_slice( explode( "\n@", substr( $buffer, $i, $j - $i ) ), 1 ) as $special )
            {
                $i = strpos( $special, ':' );
                $this->special[ trim( substr( $special, 0, $i ) ) ]
                    = trim( substr( $special, $i + 1 ) );
            }
        }

        protected function setBuffer( string $buffer ) : void
        {
            $buffer = str_replace( [ "\r", "\t" ], [ '', ' ' ], $buffer );
            removeDoubleSpaces( $buffer );
            $this->buffer = "\n" . $buffer . "\n";
        }

        protected function specialList( string $name ) : void
        {
            $this->$name = [];
            $text        = trim( $this->specialValue( $name ) );
            if( !$text )
            {
                return;
            }
            foreach( explode( ',', $text ) as $item )
            {
                $this->$name[] = trim( $item );
            }
        }

        protected function specialValue( $name ) : string
        {
            return $this->special[ $name ] ?? '';
        }

        public function url() : string
        {
            return $this->identifier;
        }

    }

    class Search
    {

        // search into $article
        protected Article $article;

        // the identifier of the article, used to create a link
        protected string $article_id;

        // search words for exact word search : with a space before, another after
        protected array $s_words;

        // search sentence, with a space before, another after ( ' $word1 $word2 $word3 ' )
        protected string $sentence;

        // how many words into $words (cache)
        protected int $words_count;

        // searched words, cleaned
        public array $words;

        // search results : Article $article [ int $weight1 1-100 ][ int $weight2 100-1 ]
        public array $results = [];

        public function __construct( array $words )
        {
            $this->words       = $words;
            $this->words_count = count( $this->words );
        }

        protected function searchExactIn( int $priority, string $text) : bool
        {
            if( str_contains( ' ' . strtolower( $text ) . ' ', $this->sentence ) )
            {
                $this->results[ $priority ][ 100 ][ $this->article->title ][ $this->article->identifier ]
                    = $this->article;
                return true;
            }
            return false;
        }

        public function searchInDir( string $dir ) : array
        {
            foreach( scandir($dir) as $file ) if( !str_starts_with( $file, '.' ) )
            {
                if( is_dir( "$dir/$file" ) )
                {
                    $this->searchInDir( "$dir/$file" );
                    continue;
                }
                $l_file = strtolower( $file );
                if(
                    ( $l_file === 'topics.txt' )
                    || ( !str_ends_with( $l_file, '.txt' ) && !str_ends_with( $l_file, '.md' ) ) )
                {
                    continue;
                }
                $this->searchInFile( "$dir/$file" );
            }
            return $this->results;
        }

        public function searchInFile( string $filename ) : array
        {
            $identifier       = substr( $filename, strpos( $filename, 'documentation/' ) + 14 );
            $this->article    = new Article( $identifier, file_get_contents( $filename ) );
            $this->article_id = substr( $filename, strrpos( $filename, '/' ) + 1 );
            $this->article_id = substr( $this->article_id, 0, strrpos( $filename, '.' ) );
            $this->sentence   = ' ' . join( ' ', $this->words ) . ' ';
            $this->s_words    = [];
            foreach( $this->words as $word )
            {
                $this->s_words[] = ' ' . $word . ' ';
            }
            $article = $this->article;
            // This is the core of search algorithm : here we decide where to search for :
            $this->searchExactIn( 1, $article->title )
                || $this->searchExactIn( 2, $article->description )
                || $this->searchWordsIn( 3, $article->title )
                || $this->searchWordsIn( 4, $article->description )
                || $this->searchWordsIn( 5, ' ' . join( ' ', $article->tags ) . ' ' )
                || $this->searchExactIn( 6, $buffer = str_replace( "\n" , ' ', $article->buffer ) )
                || $this->searchWordsIn( 7, $buffer )
                || $this->searchWordsIn( 8, ' ' . join( ' ', $article->categories ) . ' ' );
            return $this->results;
        }

        protected function searchWordsIn( int $priority, string $text ) : bool
        {
            if( $found_count = $this->wordsIn( strtolower( $text ), $this->s_words ) )
            {
                $weight = ( $found_count === $this->words_count ) ? 99 : $found_count;
                $this->results[ $priority ][ $weight ][ $this->article->title ][ $this->article->identifier ]
                    = $this->article;
                return true;
            }
            return false;
        }

        protected function wordsIn( string $text, array $words ) : int
        {
            $count = 0;
            $text  = ' ' . $text . ' ';
            foreach( $words as $word )
            {
                if( str_contains( $text, $word ) )
                {
                    $count ++;
                }
            }
            return $count;
        }

    }
