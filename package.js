Package.describe({
  summary: "JWPlayer free edition 6 Meteor wrapper"
});

Package.on_use(function (api) {
  api.add_files([
    '//api.longtailvideo.com/library/U4WWQDLeEeOytRIxOUCPzg.js'
  ], 'client'
  );
});