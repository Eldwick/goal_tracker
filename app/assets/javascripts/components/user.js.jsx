var SignInRegisterBox = React.createClass({
  getInitialState: function() {
    return {
        isSignInTab: false
    };
  },
  handleTabSelection: function(isSignInTab) {
    this.setState({isSignInTab: isSignInTab});
  },
  render: function() {
    var tab = this.state.isSignInTab === true ? <SignInBox /> : <RegisterBox />;
    return (
      <div className="sign-in-register-box">
        <SignInRegisterTabs handleTabSelection={this.handleTabSelection} isSignInTab={this.state.isSignInTab} />
        {tab}
      </div>
    );
  }
});

var SignInRegisterTabs = React.createClass({
  render: function() {
    var signInClass =  "sign-in-tab",
          registerClass  = "register-tab",
          props = this.props,
          registerHandler = function() {props.handleTabSelection(false)},
          signInHandler = function() {props.handleTabSelection(true)};

    if (this.props.isSignInTab === true) {
      signInClass = signInClass +" active"
    } else {
      registerClass = registerClass +" active"
    }

    return (
      <ul className="sign-in-register-tabs">
        <li onClick={registerHandler} className={registerClass}><a href="#">Register</a></li>
        <li onClick={signInHandler} className={signInClass}><a href="#">Sign In</a></li>
      </ul>
    );
  }
});

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
    return (
      <div className="register-box">
        <div className="sign-in-register-header">Register</div>
      </div>
    );
  }
});

$(function(){
  ReactDOM.render(
    <SignInRegisterBox />,
    document.getElementById('goal-tracker')
  );
})
