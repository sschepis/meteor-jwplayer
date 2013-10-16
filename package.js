Package.describe({
  summary: "JWPlayer free edition 6 Meteor wrapper"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/jwplayer.flash.swf',
	'lib/jwplayer.html5.js',
    'lib/jwplayer.js'
  ], 'client'
  );
});