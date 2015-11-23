# Fireshell

Gulp, SASS, Autoprefixer, image optimisation, svg symbols, Modernizr, JS modules (Browserify) and ES6 support using Babel.

## Your New Project

Either make a fresh clone – or checkout the `master` branch and copy the contents to your new project directory. 

**Make sure you remove the `.git` directory when you've done this**:

```bash
# might need sudo
$ rm -R .git
```

Init your git repo and add the remote:

```bash
$ git init 
$ git add .
$ git commit -m "Init"

$ git remote add origin ssh://git@bitbucket.org/USER/REPO.git # BitBucket
$ git remote add origin git@github.com:USER/REPO.git # GitHub

$ git push -u origin master
```

## Getting Started

```bash
$ npm install
```

## Gulp / Tasks

All the gulp tasks are imported as separate files which are organised within `/gulp/tasks/`. I based the setup on [gulp-starter](https://github.com/greypants/gulp-starter).

All task configuration options can be updated within `/gulp/config.js`.

Below are some familiar tasks for developing and building, but for more detail please have a look through the tasks themselves.

### `$ gulp`

Default task, alias for `build:dev`.

### `$ gulp watch`

First runs the build task before watching files for changes.

### `$ gulp serve`

First runs the watch task before creating a BrowserSync server instance. 

### `$ gulp templates[:replace|:copy]`

Runs a replace task and a copy task for HTML files.

### `$ gulp css[:sass]`

Creates Autoprefixed stylesheets with source maps.

### `$ gulp js`

Uses Browserify and Babel(ify) to bundle all javascript files, which can be written in ES6 if you wish.

### `$ gulp images[:optimised|:notoptimised|:vector|:raster|:symbols]`

Image optimisation for rasters (jpg, png, gif) and vectors. 

Run on it's own will only copy the images to the build directory. Adding either the `[:raster]` or `[:vector]` flags will optimise just those files, whereas the `[:build]` flag will optimise everything.

### `$ gulp clean[:assets|:bower]`

Empty the relevant directories. `[:assets]` will remove all build assets.

### `$ gulp modernizr`

Generates and uglifies a new Modernizr build based on the files it's specified to scan and the forced options within the config settings.

### `$ gulp build[:dev|:prod]`

Empties and creates new, production-ready build files.

### `$ gulp bump`

Bump, commit and tag the `package.json` version. The following arguments are supported:

```bash
$ gulp bump --patch # 0.0.X (default)
$ gulp bump --minor # 0.X.0
$ gulp bump --major # X.0.0
$ gulp bump --version=1.2.3
```
