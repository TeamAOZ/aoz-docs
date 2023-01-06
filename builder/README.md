# Build the AOZ Documentation

## Get all pages from the Google Drive
Go to the link :  https://drive.google.com/drive/folders/1GuctdVkOlrrSty8FiYaiy5Hfw5Vyn0yX?usp=share_link and get all the folders

## Extract the folders
Clean the "md/documentation" folder.
Extract all the folders got from Google Drive into the "md/documentation" folder.

## Execute command to build
Execute the command :

``` javascript
node build.js
```

Wait the "Topics generated!" message.

## Transfer to Server
Now, get the "md" and copy it on the "doc.aoz.studio" FTP server.

That's all.