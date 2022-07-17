(function() {
    string = "";
    if ($(window).width() > 900) {
        string = "<div class='devsite-banner devsite-banner-announcement\n" +
            "' style='background-color: transparent;'>\n" +
            "<div id='upper_id' class='devsite-banner-inner' style='background-color: transparent; height: auto;'>\n" +
            "" +
            "    <div id='default_template'>\n" +
            "    <div class='front-picture'>\n" +
            "    <img src='https://www.ipvisioninc.com/wp-content/uploads/banner_tech-driven-results_secondary.jpg' style='height: 350px; width: 100%;'>\n" +
            "<div id='logo1' class='headlogo'> <img src='com/head.gif' id='lg1'> </div>" +
            "<div id='logo2' class='headlogo'> <img src='images/ccet-logo.png' id='lg2'></div>" +
            "    <div class='heading-text-8new'>\n " +
            "    International Conference on Intelligent<br>\n" +
            "Computing for Sustainable Development  (intCSD-2023) <br>\n" +
            "<span style='font-family: " + '"Courier New"' + "; font-size:25px;' class='heading-text-8' >9th - 10th Feb 2023</span><br><br>\n\n" +
            "<span style='font-family: " + '"Courier New"' + "; line-height: 0.9; '>Organised by<br>\n" +
            "Department of Computer Science & Engineering<br>\n" +
            "Chandigarh College of Engineering and Technology<br> \n" +
            "(Degree Wing) Chandigarh, India " +
            "</div>\n" +
            "</div>\n" +
            "</div>\n" +
            "\n" +
            "</div>\n" +
            "</div>";
    } else {
        string = "<div class='devsite-banner devsite-banner-announcement\n" +
            "' style='background-color: transparent;'>\n" +
            "<div id='upper_id' class='devsite-banner-inner' style='background-color: transparent; height: auto;'>\n" +
            "" +
            "    <div id='default_template'>\n" +
            "    <div class='front-picture'>\n" +
            "    <img src='https://www.ipvisioninc.com/wp-content/uploads/banner_tech-driven-results_secondary.jpg' style='height: 330px; width: 100%;'>\n" +
            "<div id='logo1' class='headlogo'> <img src='com/head.gif' id='lg1'> </div>"
        "    <div class='heading-text-8new'>\n " +
        "    3rd International Conference on <br>\n" +
        "Frontiers in Computing and Systems (intCSD-2023) <br>\n" +
        "<span class='heading-text-8'>29th September to 1st October 2021</span><br>\n" +
        "<span style='font-family: " + '"Courier New"' + "; line-height: 0.9; '>Organised by<br>\n" +
        "Department of Computer Science & Engineering<br>\n" +
        "Indian Institute of Technology Ropar,<br>\n" +
        "Punjab, India and <br>COMSYS Educational Trust, Kolkata <br>   " +
        "</div>\n" +
        "</div>\n" +
        "</div>\n" +
        "\n" +
        "</div>\n" +
        "</div>";
    }


    string += "<nav id='main_navbar' class='devsite-section-nav devsite-nav nocontent'\n" +
        "                 style='left: auto; max-height: 779px; position: relative; top: 0px;'>\n" +
        "                <ul class='devsite-nav-list devsite-nav-only-accordions '>\n" +
        "\n" +
        "                    <li></li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='index.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'>Home</span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='impdate.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'><b>Important Dates</b></span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='Sub_Guidelines.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'><b>Submission Guidelines</b></span></a>\n" +
        "                    </li>\n" +
        "                    <li  id='mainn' class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='speakers.html' \n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'>  <span class='text-navbar'>Committee</span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='publication.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'>Publications</span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='registration.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'><b>Registration</b></span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='call_for_paper.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'> <b>Call for paper</b></span></a>\n" +
        "                    </li>\n" +
        "                    <li class='devsite-nav-item devsite-nav-item-section-expandable devsite-nav-accordion '><a href='call.html'\n" +
        "                            class='devsite-nav-title devsite-nav-title-no-path' role='link' tabindex='0'><span class='text-navbar'> <b>Call for Collaborators</b> </span></a>\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </nav>";




    document.getElementById('heading-of-comsys').innerHTML = string;

    Strr = "";
    if ($(window).width() > 900) {
        Strr += "<div class=\"devsite-top-logo-row-wrapper-wrapper\">\n" +
            "                <div class=\"devsite-top-logo-row-wrapper\">\n" +
            "                    <div class=\"devsite-top-logo-row devsite-full-site-width\" style=\"height: 85px;\">\n" +
            "                        <nav id=\"mob-nav\" class=\"respo\">\n" +
            "                        </nav>\n" +
            "                        <div class=\"devsite-product-name-wrapper\"><img\n" +
            "                                src=\"mainfile/lockup.gif\" style=\"height: 70px;\"\n" +
            "                                class=\"devsite-site-logo\" ><span\n" +
            "                                class=\"devsite-site-name devsite-product-name\"></span></div>\n" +
            "                        <div style=\"display: block; position: absolute; right: 10%;\">\n" +
            "\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";
    } else {
        Strr = "<div class=\"devsite-top-logo-row-wrapper-wrapper\">\n" +
            "                <div class=\"devsite-top-logo-row-wrapper\">\n" +
            "                    <div class=\"devsite-top-logo-row devsite-full-site-width\" style=\"height: 85px;\">\n" +
            "                        <nav id=\"mob-nav\" class=\"respo\">\n" +
            "                        </nav>\n" +
            "                        <div class=\"devsite-product-name-wrapper\"><img\n" +
            "                                src=\"mainfile/lockup.gif\" style=\"height: 70px;\"\n" +
            "                                class=\"devsite-site-logo\" ><span\n" +
            "                                class=\"devsite-site-name devsite-product-name\"></span></div>\n" +
            "                        <div style=\"display: block; position: absolute; right: 10%;\">\n" +
            "\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>";
    }

    document.getElementById('beg').innerHTML = Strr;


})();