# Catalog panel

[![Build Status](https://travis-ci.org/MarceloBorgesP/catalog_panel.svg?branch=master)](https://travis-ci.org/MarceloBorgesP/catalog_panel)

This is a project created for [Eduk](http://www.eduk.com.br/), as a challenge for front-end skills.

## About

The catalog panel is a single page application created with ember, that gets data from a json and uses it as fixtures to simulate a database. To create these fixtures we are using [ember-cli-mirage](http://www.ember-cli-mirage.com/).

Eduk already has this catalog on its website, so I decided to create a project that follows its theme, but makes some minor improvements, the most important one being that i am using bootstrap for everything, what makes it easier to deal with the responsibility (some components in eduk's website don't take advantage of bootstrap).

The code couldn't be fully tested because of the time, but I tried to insert integration and unit tests.

## Cross-browser Compatibility

The app was tested with the latest versions of Chrome and Firefox and is working great :)

## Prerequisites to run

You will need the following tools installed to run this project:

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
- Then inside of the project folder do: 


`heroku create --buildpack https://codon-buildpacks.s3.amazonaws.com/buildpacks/heroku/emberjs.tgz`


this will create a buildpack in an s3 server in AWS.


- To deploy: `git push heroku master`

And voilà, your app should be deployed and running, just type `heroku open` now to access it.

Pretty simple huh? Have fun!
