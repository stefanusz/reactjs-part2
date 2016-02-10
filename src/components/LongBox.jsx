var React = require('react');
var Box = require('./Box.jsx');

var LongBox = React.createClass({


    render : function (){

        var headingStyle = {
          background : 'pink'
        };

        var containerStyle = {
          borderRadius: '10',
          background: 'pink',
          padding: '0',
          marginTop: '30',
          minHeight: '300',
          maxHeight: '300',
          overflow: 'hidden',
          textAlign: 'center',
          backgroundImage: '',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };

        var rowStyle = {
            height: '50'
        };

        return (
          <div style={containerStyle} className="panel panel-default">

                <div className="panel-body">
                    <h2>{this.props.description}</h2>

                    <div style={rowStyle} className="row">
                        <div className="col-sm-4 "><Box heading='false' height="50" title="ho" textColor="red" backgroundColor="red" description="1.5k"></Box></div>
                        <div className="col-sm-4 "><Box heading='false' height="50" title="ho" textColor="red" backgroundColor="red" description="1.5k"></Box></div>
                        <div className="col-sm-4 "><Box heading='false' height="50" title="ho" textColor="red" backgroundColor="red" description="1.5k"></Box></div>
                    </div>
                </div>



          </div>
        );


    }


});

module.exports = LongBox;
