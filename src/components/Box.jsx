var React = require('react');

var Box = React.createClass({

    render : function (){

        var headingStyle = {
          background : 'pink'
        };

        var containerStyle = {
          borderRadius: '10',
          background: this.props.backgroundColor,
          padding: '0',
          marginTop: '30',
          minHeight: '200',
          maxHeight: '200',
          overflow: 'hidden',
          textAlign: 'center',
          backgroundImage: '',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          marginLeft: 0
        };

        var footerStyle = {
            color: 'red'
        };

        var h2style = {
            marginTop : 70
        }

        if(this.props.height){
            containerStyle.height = this.props.height;
        }

        return (
          <div style={containerStyle} className="panel panel-default">


                    {/*<div style={headingStyle} className="panel-heading"> Panel heading</div>*/}



                <div className="panel-body">
                    <h2 style={h2style} >{this.props.description}</h2>
                </div>

                {/*<div style={footerStyle} className="panel-footer"> foot </div>*/}
          </div>
        );
    }

});

module.exports = Box;
