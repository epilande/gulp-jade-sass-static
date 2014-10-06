# gulp-jade-sass-static

An automated build environment for static websites making front-end development a breeze.

## How to use gulp-jade-sass-static

    # Clone this repo
    $ git clone https://github.com/epilande/gulp-jade-sass-static.git
    $ cd gulp-jade-sass-static

    # Install dependencies
    $ npm install

    # Start default tasks for development
    $ gulp

Open your web browser and navigate to [http://localhost:3000](http://localhost:3000)

    # Build for production
    $ gulp build

## Directory Layout

    assets/           --> Contents are compiled, minified, copied, etc.. to the public directory
      js/               --> Javascript files
      sass/             --> Sass files
      views/            --> Jade files
        layout.jade       --> Doctype, html, head, body template
        index.jade        --> Main page
        partials/         --> View partials
    public/           --> Static assets. Generated files are added here. No work should be done in this directory
    bower.json        --> For bower to install bower components
    gulpfile.json     --> Gulp config
    package.json      --> For npm to install node modules