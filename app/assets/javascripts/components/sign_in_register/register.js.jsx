var RegisterBox = React.createClass({
  render: function() {
    var form = JSON.parse(this.props.form);
    return (
      <div className="register-box">
        <form ref="form" className="sign-in-form" action="/users" method="post" onSubmit={ this.handleSubmit }>
          <input type="hidden" name={ form.csrf_param } value={ form.csrf_token } />
          <div className="sign-in-register-input">
            <input type="text" name="user[email]" placeholder="Email" />
          </div>
          <div className="sign-in-register-input">
            <input type="password" name="user[password]" placeholder="Password"/>
          </div>
          <div className="sign-in-register-input">
            <input type="password" name="user[password_confirmation]" placeholder="Confirm Password"/>
          </div>
          <button type="submit">Create Account</button>
        </form>
      </div>
    );
  }
});
