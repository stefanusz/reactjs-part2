var React = require('react');
var Box = require('./Box.jsx');

var LongBox = React.createClass({

    render: function() {

        var headingStyle = {
            background: 'pink'
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
            backgroundPosition: 'center',
            marginLeft: 0
        };

        var rowStyle = {
            display: 'inline-block',
            textPosition: 'bottom',
            listStyleType: 'none',
            marginTop: 50
        };

        return (
            <div style={containerStyle} className="panel panel-default">

                <div className="panel-body">
                    <h2>{this.props.description}</h2>

                    <div style={rowStyle} className="row">
                        <div className="col-sm-12">


                            <li >
                                <ul style={rowStyle}>
                                    <h2>{this.props.description}</h2>
                                </ul>
                                <ul style={rowStyle}>
                                    <h2>{this.props.description}</h2>
                                </ul>
                                <ul style={rowStyle}>
                                    <h2>{this.props.description}</h2>
                                </ul>
                            </li>


                        </div>
                    </div>
                </div>

            </div>
        );

    }

});

module.exports = LongBox;
