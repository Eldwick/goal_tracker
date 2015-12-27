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
        <li onClick={registerHandler} className={registerClass}><a>Register</a></li>
        <li onClick={signInHandler} className={signInClass}><a>Sign In</a></li>
      </ul>
    );
  }
});
