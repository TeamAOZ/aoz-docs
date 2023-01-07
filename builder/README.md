# Build the AOZ Documentation

## Get all pages from the Google Drive

- Go to the link 1 : https://drive.google.com/drive/folders/1GuctdVkOlrrSty8FiYaiy5Hfw5Vyn0yX
- Get all the folders
- Get the Images folder from the drive too 2 : https://drive.google.com/drive/folders/1st6Arb_mbxzxQyMX9KK8hR91Ji7GBJK9

## Extract the folders

- Delete the content of **builder/md/documentation/default/**.
- Extract the archive 1 content got from Google Drive into the **md/documentation/default/** folder.

## Execute command to build

- Execute the command :

``` javascript
node build.js
```

- Wait the "Topics generated!" message.

## Transfer to the documentation production folder

When everything is ok, you can execute :

```php
php build.php
```

This will run build.js again, and more :

- Make a copy of the current production documentation into the **repository/backups/** folder
- Copy the content of **builder/md/documentation/cache/** to repository/md/documentation/cache/**
- Copy the content of **builder/md/documentation/default/** to repository/md/documentation/default/**

Then you have still something to do :

- Extract the archive 2 content into the **repository/assets/images/** folder

## Transfer to Server

Now, get the **repository/** and copy it on the "doc.aoz.studio" FTP server.

You're done !
