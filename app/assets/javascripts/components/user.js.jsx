var SignInBox = React.createClass({
  render: function() {
    return (
      <div className="sign-in-box">
        <div className="sign-in-register-header">Sign In</div>
      </div>
    );
  }
});

var RegisterBox = React.createClass({
  render: function() {
    var form = JSON.parse(this.props.form);
    return (
      <div className="register-box">
        <div className="sign-in-register-header">Register</div>
      </div>
    );
  }
});
