# Fireshell

A front-end bootstrap with a modern workflow, which includes: Gulp, Bower, SASS, Autoprefixer, image optimisation with Imagemin, Modernizr, JS modules using Browserify and ES6 support using Babel.

## Your New Project

Either make a fresh clone – or checkout the `master` branch and copy the content – to your new project directory. 

**Make sure you remove the `.git` directory when you've done this**.

Init your git repo and add the remote:

```bash
$ git init 
$ git remote add origin ssh://git@bitbucket.org/USER/REPO.git # BitBucket
$ git remote add origin git@github.com:USER/REPO.git # GitHub
```

## Getting Started

For a fresh clone, run:

```bash
$ ./init.sh
```

This should install all the required npm and bower files.

## Gulp / Tasks

All the gulp tasks are imported as separate files which are organised within `/gulp/tasks/`. I based the setup on [gulp-starter](https://github.com/greypants/gulp-starter).

All task configuration options can be updated within `/gulp/config.js`.

Below are some familiar tasks for developing and building, but for more detail please have a look through the tasks themselves.

### `$ gulp`

Default task for building and watching development files for any changes made.

### `$ gulp sass`

Creates Autoprefixed stylesheets with source maps. Also creates a stats file in JSON format.

### `$ gulp js`

Uses Browserify and Babel(ify) to bundle all javascript files, which can be written in ES6 if you wish.

### `$ gulp images[:build|:vector|:raster]`

Image optimisation for rasters (jpg, png, gif) and vectors. 

Run on it's own will only copy the images to the build directory. Adding either the `[:raster]` or `[:vector]` flags will optimise just those files, whereas the `[:build]` flag will optimise everything.

### `$ gulp clean[:assets|:bower]`

Empty the relevant directories. `[:assets]` will remove all build assets.

### `$ gulp bower`

Any third-party or vendor files installed via Bower and added to the `/gulp/config.js` file will be copied to the specified location shown in the config settings.

### `$ gulp modernizr`

Generates and uglifies a new Modernizr build based on the files it's specified to scan and the forced options within the config settings.

### `$ gulp bump`

Bump, commit and tag the `package.json` version. The following arguments are supported:

```bash
$ gulp bump --patch # 0.0.X (default)
$ gulp bump --minor # 0.X.0
$ gulp bump --major # X.0.0
$ gulp bump --version=1.2.3
```

### `$ gulp bump`

Empties and creates new, production-ready build files.

## Credits

This FireShell was originally built by [Todd Motto](//github.com/toddmotto) and it's contributors. This fork is optimised for my on workflow.
