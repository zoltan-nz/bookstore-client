# Bookstore Ember.js Frontend

Based on [this](http://emberigniter.com/modern-bridge-ember-and-rails-5-with-json-api/) tutorial.

## Implementation log

### Initialize the project

    ember new bookstore

Update `bower.json`

    "ember": "2.0",
    "ember-data": "2.0"

### Generate models

    ember generate resource books title:string price:number author:belongs-to publisher:belongs-to
    ember g resource authors name:string books:has-many
    ember g resource publishing-houses name:string discount:number books:has-many

    ember g adapter application
    ember g serializer application

### Setup JSON API adapter and serializer

`app/adapters/application.js`

    import DS from 'ember-data';

    export default DS.JSONAPIAdapter.extend();

`app/serializer/application.js`

    import DS from 'ember-data';

    export default DS.JSONAPISerializer.extend();

### Run the client

Make sure that your Rails Api app is already running

    ember server --proxy http://localhost:3000

### Create Publisher model

    ember g model publisher

### Update routes and list all books on home page

`app/router.js`

    Router.map(function() {
      this.route('books', { path: '/' });
      this.route('author', { path: '/author/:author_id' });
    });

Download model in router

`app/routes/books.js`

    model() {
      return this.store.findAll('book');
    }

Add a list in `templates/books.hbs`

    <ul>
      {{#each model as |book|}}
          <li>
              <strong>{{book.title}}</strong> <em>by</em> {{book.author.name}}
          </li>
      {{/each}}
    </ul>

### Add Sass version from Bootstrap

ember-cli-sass repo: [link](https://github.com/aexmachina/ember-cli-sass)
ember-cli-bootstrap-sassy repo: [link](https://github.com/lifegadget/ember-cli-bootstrap-sassy)

    ember install ember-cli-sass 
    ember install ember-cli-bootstrap-sassy
    
Add container to `application.hbs` and boxes to `books.hbs`

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

