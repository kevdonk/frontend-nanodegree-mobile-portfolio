## Cameron's Optimized Portfolio

Aside from some changes to the source files, most optimization is achieved with Gulp ( http://gulpjs.com/ )

The easiest way to test is just to view the live site:
http://kevdonk.github.io/frontend-nanodegree-mobile-portfolio/

I tested the urls of the project pages with PageSpeed Insights and achieved scores ranging from 93-98 speed and usually 100 user experience.

To build the site
=====================================
1) Make sure you have Gulp and Node installed
	http://gulpjs.com
	http://nodejs.org

2) Install dependencies
	npm install

3) Run build task
	gulp build

The site will now be built and optimized in the 'dist/' folder

Note: if you inspect the gulpfile.js, you will see the 'deploy' task which will push the 'dist/' folder to GitHub

If you change the remote url for the GitHub repository, you should be able to push to that url using 'gulp deploy'
