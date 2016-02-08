var React = require('react');
var Box = require('./Box.jsx');

var BoxManager = React.createClass({



  render: function() {

    var divStyle = {
      marginTop: 50
    };

    var style = {
      background : this.props.background
    };




    //onChange is called with every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates on every typed
    return (
        <div className="row">
            <div style={style} className="col-sm-8">
              <Box title="ho" description="this is the description"></Box>
            </div>


            <div style={style} className="col-sm-4">
              <div className="row"> <Box title="ho" backgroundColor="blue" description="this is the description"></Box> </div>
              <div className="row"> <Box title="ho" backgroundColor="red" description="this is the description"></Box> </div>
              <div className="row"> <Box title="ho" backgroundColor="green" description="this is the description"></Box> </div>
              <div className="row"> <Box title="ho" backgroundColor="purple" description="this is the description"></Box> </div>
              <div className="row"> <Box title="ho" backgroundColor="yellow" description="this is the description"></Box> </div>
            </div>


        </div>

    );
  }

});

module.exports = BoxManager;
