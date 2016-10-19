# Catalog panel

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/MarceloBorgesP/catalog_panel.git`
* `cd catalog-panel`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This application is currently deployed in [Heroku](https://www.heroku.com/), if you also want to deploy it just follow the steps:

- First of all you need to install the [Heroku Command Line](https://devcenter.heroku.com/articles/heroku-command-line)
- Then inside of the project folder do: `heroku create --buildpack https://codon-buildpacks.s3.amazonaws.com/buildpacks/heroku/emberjs.tgz`, this will create a buildpack in an s3 server in AWS.
- To deploy: `git push heroku master`
- And voilà, your app should be deployed and running, just type `heroku open` now to access it.

Pretty simple huh? Have fun!
