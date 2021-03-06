$(document).ready(function () {
    // hide buttons
    $(".buttons").hide();
    var contactChoice = $(".contactChoice");
    var contactTrue = false;
    var myHub = false;
    var myLink = false;
    var resume = false;

    // start website 
    $("#start").on("click", function () {
        console.log("click");
        helloHide();
        aboutMe();
    });
    //hide greeting
    function helloHide() {
        $(".hellofade").hide();
    }
    // function for "About" button press
    $("#alink").on("click", function () {
        aboutMe();
    });
    // function for "About"
    function aboutMe() {
        console.log(letsTalk);
        console.log(myStatement);
        // other variables
        var letsTalk = "LET'S TALK ABOUT ME";
        var myStatement = "Full Stack Web Developer with a background in classical music to construct"
            + " creative user experiences with.<br><br> Recently obtained a certificate from UPENN’s coding program,"
            + " which provided skills in HTML, CSS, Javascript, and responsive web design."
            + " Regarded as a passionate team member, with a large interest in problem solving,"
            + " and creating an authentic user experience.<br><br> My goal with each project is to have immersion that"
            + " cancels out the users realization of the experience until after it has passed."
            + " I am looking forward to assisting, as well as learning from an experience oriented team.";
        $(".snag").empty();
        $(".buttons").show();
        $(".snag").css({
            "margin": "auto",
            "margin-top": "36px",
            "width": "350px", "line-spacing": "25px",
            "line-height": "20px",
            "font-size": "18px",
            "color": "rgba(255, 255, 255, 0.206)",
            "text-align": "center",
            "position": "relative",
            "display": "overflow"
        }).append("<h1>" + letsTalk + "</h1><br>"
            + "<p>" + myStatement + "</p>");
    };
    //function for "contact" button
    $("#clink").on("click", function () {
        contact();
    });
    //function for contact
    function contact() {
        $(".snag").empty();
        var infoMe = "<h1>CONTACT</h1>"
            + "<div class='contactchoice'>"
            + "<br>"
            + "<button id='myresume' type='submit' class='btn btn-primary btn-lg'>My Resume</button>"
            + "<br>"
            + "<button id='myhub' type='submit' class='btn btn-primary btn-lg'>My Github</button>"
            + "<br>"
            + "<button id='mylinked' type='submit'class='btn btn-primary btn-lg'>My LinkedIn</button>"
            + "<br>"
            + "<button id='email' type='submit' class='btn btn-primary btn-lg'>EMAIL ME..PLEASE</button>"
            + "<br>"
            + "</div>"
        // console.log(myInfo);
        $(".snag").css({
            "margin": "auto",
            "margin-top": "56px",
            "height": "600px"
        }).append(infoMe).css({
            "line-height": "30px",
            "z-index": 5
        });
        // user contact choice 
        $("#email").on("click", function () {
            contactTrue = true;
            var email = "jleopoldacosta@gmail.com";
            var mailto_link = 'mailto:' + email
            if (contactTrue === true) {
                window = window.open(mailto_link, 'emailWindow');
                contactTrue = false;
            }
        });
        $("#myhub").on("click", function () {
            myHub = true;
            var hubLink = "https://github.com/leopoldleopold";
            if (myHub === true) {
                window = window.open(hubLink, 'newWindow');
                myHub = false;
            }
        });
        $("#mylinked").on("click", function () {
            myLink = true;
            var linkedIn = "https://www.linkedin.com/in/justin-acosta-0b012414a/"
            if (myLink === true) {
                window = window.open(linkedIn, 'newWindow');
                myLink = false
            }
        });
        $("#myresume").on("click", function () {
            resume = true;
            var myResume = "assets/images/resume.pdf";
            if (resume === true) {
                window = window.open(myResume, 'newWindow');
                resume = false;
            }
        });
    };
    // function for "portfolio" button
    $("#plink").on("click", function () {
        portfolio();
    });
    // function for portfolio
    function portfolio() {
        $(".snag").empty();
        $(".snag").append("<div class='personalwork'>"
            + "<div class='lirinode'>"
            + "<h2>LIRI JS</h2>"
            + "<a href='https://github.com/leopoldleopold/liri-node-app'>"
            + "<img id='liri' src='assets/images/liri.png'>"
            + "</a>"
            + "<p id='description'>Coded LIRI, a Language Interpretation and Recgonition Interface."
            + " LIRI utilizes Spotify, Bands in Town, and OMDB to search for songs, concerts and movies."
            + " LIRI is built to run inside of your Terminal/Git Bash"
            + "and is controlled by a simple set of commands.</p>"
            + "</div>"
            + "<div class='kicking'>"
            + "<h2>Kicking in the Kitchen</h2>"
            + "<a href='https://leopoldleopold.github.io/Group_Project-1/'>"
            + "<img id='kitchen' src='assets/images/kitchen.png'>"
            + "</a>"
            + "<p>A website that pairs recipes with movies to ease the pressure of date night!"
            + " Coded with a group.</p>"
            + "</div>"
            + "</div>"
        )
    };
});





