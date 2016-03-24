var Backbone = require('backbone');

var Chat = Backbone.Model.extend({

});

var ChatCollection = Backbone.Firebase.Collection.extend({
   model: Chat,
   url: 'https://loginchatapp.firebaseio.com/',
 });
