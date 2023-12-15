import React from "react";

var Header = () => {
    return (
        <div class="header col-sm-12">


            <div class="col-sm-12">

                <div class="header">

                    <div class="col-sm-4">

                        <div class="logo"></div>

                    </div>

                    <div class="col-sm-8">

                        <div class="headerMenu">

                            <ul>
                                <a href="index.php"><li>Home</li></a>
                                <a href="aboutUs.php"><li>About Us</li></a>
                                <a href="userDashboardProfile.php"><li>Dashboard</li></a>
                                <a href="logout.php"><li>Logout</li></a>
                                <a href="contactUs.php"><li>Contact Us</li></a>
                            </ul>

                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}

export default Header;