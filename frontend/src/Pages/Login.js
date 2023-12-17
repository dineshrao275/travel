import React from "react";

var Login = () => {
    return (
        <div class="container-fluid">

            <div class="login">

                <div class="col-sm-12">

                    <div class="heading text-center">
                        Login
                    </div>

                </div>

                <div class="col-sm-6 col-sm-offset-3">

                    <div class="containerBox">

                        <form action="loginAction.php" method="POST">

                            <label for="username">Username:</label>
                            <input type="text" class="input" name="username" placeholder="Enter username here" required />

                            <label for="password">Password:</label>
                            <input type="password" class="input" name="password" placeholder="Enter password here" required />

                            <div class="col-sm-12 text-center">
                                <input type="submit" class="button" name="login" value="Login" />
                            </div>

                            <a href="forgotPassword.php">
                                <p class="col-xs-12 dots" style={{ color: "white", fontSize: "1.1em", marginTop: "1em", textAlign: "center" }}>
                                    Forgot Password?
                                </p>
                            </a>

                        </form>

                        <div class="col-sm-12 text-center">
                            <div class="signupPrompt">
                                New user? <a href="signup.php"><span class="dots">Sign Up</span></a> instead.
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;
