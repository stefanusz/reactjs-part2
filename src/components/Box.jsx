var React = require('react');

var Box = React.createClass({

    render : function (){

        var style = {
          background : this.props.backgroundColor,
          color : 'white',
          marginTop : 5
        }
        return (
          <div style={style} className="thumbnail">

                {this.props.description}

          </div>
        );
    }

});

module.exports = Box;
