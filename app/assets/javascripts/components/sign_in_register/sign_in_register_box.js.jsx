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
    var tab = this.state.isSignInTab === true ? <SignInBox form={this.props.form} /> : <RegisterBox form={this.props.form}/>;
    return (
      <div className="sign-in-register-box">
        <SignInRegisterTabs handleTabSelection={this.handleTabSelection} isSignInTab={this.state.isSignInTab} />
        {tab}
      </div>
    );
  }
});