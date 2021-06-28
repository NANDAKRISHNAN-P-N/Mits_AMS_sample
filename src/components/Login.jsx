
import React from 'react';

function Login()
{
    return(
        <form>
            <div className="form-inner">
                <h2 >Login</h2>
                <div className="form-group">
                    <label htmlFor="name">UserName</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="btn">
                    <button>Login</button>
                </div>
                <div className="link">
                   <a href="https://github.com/NANDAKRISHNAN-P-N?tab=repositories">forgot Password</a>
                </div>
            </div>
        </form>
    );
}
export default Login;