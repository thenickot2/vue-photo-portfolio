Photography Portfolio
===================

Static website built from vue.js source.

**GOAL:** To utilize Vue to build a small project.

----------

How To Use
-------------

The root directory contains scripts to assist with optimizing images and upload/sync to AWS S3 for easy hosting.

Inside of `/app`:

1. Edit `/app/src/photos.json` which is a "human-readable" json file containing information on the photos to display for the photography portfolio. Relative links can be used.
2. `npm install`
3. `npm run-script build` to use webpack to build the vue application
4. Serve `/app` from a hosting provider or server such as `apache` to view the website (uses hash history).

![Website](/example.jpg?raw=true "Website Homepage")
