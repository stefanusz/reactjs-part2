var React = require('react');
var Box = require('./Box.jsx');
var LongBox = require('./LongBox.jsx');

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
        <div className="container-fluid">
            <div className="row">
                <div style={style} className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-4"><Box title="ho" backgroundColor="blue" textColor="red" description="20"></Box></div>
                    <div className="col-sm-4"><Box title="ho" backgroundColor="blue" textColor="red" description="$1250"></Box></div>
                    <div className="col-sm-4"><Box title="ho" backgroundColor="blue" textColor="red" description="$13865"></Box></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12"><LongBox title="longbox" backgroundColor="blue" textColor="red" description="this is the description"></LongBox></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12"><LongBox title="longbox" backgroundColor="blue" textColor="red" description="this is the description"></LongBox></div>
                  </div>
                </div>


                <div style={style} className="col-sm-4">
                  <div className="row"> <Box title="ho" textColor="red" backgroundColor="blue" description="18 &deg;"></Box> </div>
                  <div className="row"> <Box title="ho" textColor="red" backgroundColor="red" description="1.5k"></Box> </div>
                  <div className="row"> <Box title="ho" textColor="red" backgroundColor="green" description="50%"></Box> </div>
                  <div className="row"> <Box title="ho" textColor="red" backgroundColor="purple" description="28%"></Box> </div>
                  <div className="row"> <Box title="ho" textColor="red" backgroundColor="yellow" description="140.5kb"></Box> </div>
                </div>


            </div>
        </div>


    );
  }

});

module.exports = BoxManager;
