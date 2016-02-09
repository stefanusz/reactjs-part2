var React = require('react');

var Box = React.createClass({

    render : function (){

        var headingStyle = {
          background : 'pink'
        };

        var containerStyle = {
          borderRadius: '40',
          background: 'pink',
          padding: '0',
          marginTop: '30',
          minHeight: '200',
          maxHeight: '200',
          overflow: 'hidden',
          textAlign: 'center',
          backgroundImage: '',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };

        var footerStyle = {
            color: 'red'
        };

        if(this.props.height){
            containerStyle.height = this.props.height;
        }

        return (
          <div style={containerStyle} className="panel panel-default">

                <div style={headingStyle} className="panel-heading"> Panel heading</div>

                <div className="panel-body">
                    <h2>{this.props.description}</h2>
                </div>

                {/*<div style={footerStyle} className="panel-footer"> foot </div>*/}
          </div>
        );
    }

});

module.exports = Box;
