Package.describe({
  name: 'afuggini:underscore-string',
  summary: "underscore.string: Additional string functions for Underscore",
  version: "1.0.0",
  git: "https://github.com/afuggini/meteor-underscore-string.git"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');

  api.use('meteor', {unordered: true});
	api.use('underscore', ['client', 'server']);

  api.addFiles(['pre.js','lib/underscore.string/lib/underscore.string.js','post.js']);

	api.export('_s');
});
