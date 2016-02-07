var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({


      render : function (){

          var createItem = function(text, index){
             return (
               <ListItem key={index + text} text={text}></ListItem>
             );
          };

          return (
            <ul>{this.props.items.map(createItem)}</ul>
          );

      }

});

module.exports = List;
 
