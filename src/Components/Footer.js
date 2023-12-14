import React from "react";

var Footer = () => {
    return (
        // <!-- FOOTER SECTION STARTS -->

        <div class="footer col-sm-12">

            <div class="col-sm-4">

                <div class="footerHeading">
                    Contact Us
                </div>

                <div class="footerText">
                    3rd floor, Basai Enclave, Sector 10, <br /> Gurugram-122006, Haryana, India
                </div>

                <div class="footerText">
                    E-mail: queries@travelwale.com
                </div>

            </div>

            <div class="col-sm-4">

                <div class="footerHeading">
                    Made with
                </div>

                <div class="fa fa-heart"></div>

                <div class="footerHeading">
                    in India
                </div>

                <div class="flagContainer text-center">
                    <img src="images/flag.png" />
                </div>

            </div>

            <div class="col-sm-4">

                <div class="footerHeading">
                    Social Links
                </div>

                <div class="socialLinks">

                    <div class="fb">
                        facebook.com/travelwale
                    </div>

                    <div class="gp">
                        plus.google.com/travelwale
                    </div>

                    <div class="tw">
                        twitter.com/travelwale
                    </div>

                    <div class="in">
                        linkedin.com/travelwale
                    </div>

                </div>

            </div>

            <div class="col-sm-12">
                <div class="copyrightContainer">
                    <div class="copyright">
                        Copyright &copy; 2018 Joydeep Dev Nath.
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;