'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var generator = yeoman.generators.Base.extend({
	init: function () {
		this.pkg = require('../package.json');

		this.on('end', function () {
			if (!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},
	askFor: function () {
		var done = this.async();

		// have Yeoman greet the user
		this.log(this.yeoman);

		// replace it with a short and sweet description of your generator
		this.log(chalk.magenta('You\'re using the fantastic Autobahn generator.'));

		var prompts = [{
			name: 'author',
			message: 'Author name?',
		},
		{
			name: 'email',
			message: 'Author email?',
		},
		{
			name: 'applicationName',
			message: 'Name of your application?',
			default: 'myApp'
		},
		{
			name: 'version',
			message: 'version number of your application?',
			default: '0.0.0'
		},
		{
			name: 'description',
			message: 'Description of your application?'
		},
		{
			name: 'githubURL',
			message: 'github URL of the repository?'
		}];

		this.prompt(prompts, function (props) {
			this.author = props.author;
			this.email = props.email;
			this.applicationName = props.applicationName;
			this.version = props.version;
			this.description = props.description;
			this.githubURL = props.githubURL;

			done();
		}.bind(this));

	},
	app: function () {
		this.template('app.js', 'app.js');
		this.template('bower.json', 'bower.json');
		this.template('compil.sh', 'compil.sh');
		this.template('Gruntfile.js', 'Gruntfile.js');
		this.template('index.html', 'index.html');
		this.template('README.md', 'README.md');
		this.template('package.json', 'package.json');
	},
	projectfiles: function () {
		//this.copy('jshintrc', '.jshintrc');
		this.copy('.gitignore', '.gitignore');
	},
	runNpm: function () {
		var done = this.async();
		this.npmInstall('', function () {
			console.log('\nEverything Setup !!!\n');
			done();
		});
	}
});

module.exports = generator;