/**
 * Created by van on 6/15/17.
 */
import React, {Component} from 'react';


// Import Style
export class Login extends Component {

  checkUser = () => {
    alert('Hey');
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <a className="btn btn-primary" data-toggle="modal" href="#loginModal">Login</a>
          <div className="modal hide" id="loginModal">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">x</button>
              <h3>Is that you Sméagol?</h3>
            </div>
            <div className="modal-body">
              <form method="post" name="login_form">
                <p><input type="text" className="span3" name="eid" id="email" placeholder="Email" /></p>
                <p><input type="password" className="span3" name="passwd" placeholder="Password" /></p>
                <p>
                  <button type="submit" className="btn btn-primary" onClick={this.checkUser}>Sign in</button>
                </p>
              </form>
            </div>
            <div className="modal-footer">
              New To MyWebsite.com?
              <a href="#" className="btn btn-primary">Register</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
