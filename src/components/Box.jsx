var React = require('react');

var Box = React.createClass({

    render : function (){

        var style = {
          background : 'red',
          color : 'white',
          marginTop : 5
        }
        return (
          <div style={style} className="panel panel-default">
              <div className="panel panel-heading">
                {this.props.title}
              </div>

              <div className="panel-body">
                {this.props.description}
              </div>
          </div>
        );
    }

});

module.exports = Box;
