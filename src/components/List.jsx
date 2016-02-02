var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id" : "1", "text" : "first item"},
  {"id" : "2", "text" : "second item"},
  {"id" : "3", "text" : "third item"},
  {"id" : "4", "text" : "fourth item"}
];

var List = React.createClass({

    render : function(){
        var listItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }

});

module.exports = List;
