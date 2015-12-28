var SignInBox = React.createClass({
  render: function() {
    var form = JSON.parse(this.props.form);
    return (
      <div className="sign-in-box">
        <form ref="form" className="sign-in-form" action="/users/sign_in" method="post" onSubmit={ this.handleSubmit }>
          <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
          <div className="sign-in-register-input">
            <input type="text" name="user[email]" placeholder="Email" />
          </div>
          <div className="sign-in-register-input">
            <input type="password" name="user[password]" placeholder="Password"/>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
});