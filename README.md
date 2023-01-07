# aoz-docs

All AOZ documentation.

## Run AOZ code in dev

- Open **sources/AOZ Docs/AOZ Docs.aoz**
- Change `LOCAL = True` and `PREP = False`
- Have a local apache2, server? set `LOCAL_WHO$` to `"BB"` or `"BP"`
- If into another path, add your `LOCAL_WHO$` case into **includes/app.aozinc**
- Add `header("Access-Control-Allow-Origin: *");`
- Let's play !
- Update the AOZ documentation topic page
  - See [builder/README.md]()
- Simulate search from your browser:
  - BB: http://localhost/aozdoc/search.php?search=DB+Read&lang=en
  - BP: http://localhost/aoz/aoz-docs/search.php?search=DB+Read&lang=en
  - You can comment search.php's `header( "Content-Type: text/plain" );` to have it understandable
- Simulate search from the command line or script debugger:
  - Change the value of `$_GET['search']` to match what you want to test
  - Run `php search.php`

## Release in pre-production

- Open **sources/AOZ Docs/AOZ Docs.aoz**
- Change `LOCAL = False` and `PREP = True`
- Transpile AOZ Docs
- Send folder **sources/AOZ Docs/html/** to https://doc.aoz.studio/www/next/ (sftp, rsync)
- Send **\*.php** and **php/** to https://doc.aoz.studio/www/next/

## Release in production

- Open **sources/AOZ Docs/AOZ Docs.aoz**
- Change `LOCAL = False` and `PREP = False`
- Transpile AOZ Docs
- Send folder **sources/AOZ Docs/html/** to https://doc.aoz.studio/www/ (sftp, rsync)
- Send **\*.php** and **php/** to https://doc.aoz.studio/www/
