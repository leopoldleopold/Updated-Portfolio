$(document).ready(function () {
    // hide buttons
    $(".buttons").hide();

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
        console.log(myInfo);
        $(".snag").css({
            "margin": "auto",
            "margin-top": "36px"
        }).append(myInfo + "<p>" + email + "</p>" + "<br>" +
            "<p>" + linkedIn + "</p>" + "<br>" + "<p><a href='" + hub +
            "'>" + "My Git Hub" + "</a></p>");
    };
    // function for "portfolio" button
    $("#plink").on("click", function () {
        portfolio();
    });
    // function for portfolio
    function portfolio() {
        $(".snag").empty();
        $(".snag").append("<div id='photos'><img id='tim' src='assets/images/tim.png'>"
        + "</div>");
    };
    // function to empty class and stylize

    // other variables
    var letsTalk = "LET'S TALK ABOUT ME";
    var myStatement = "Full Stack Web Developer with a background in classical music to construct"
        + " creative user experiences with.<br><br> Recently obtained a certificate from UPENN’s coding program,"
        + " which provided skills in HTML, CSS, Javascript, and responsive web design."
        + " Regarded as a passionate team member, with a large interest in problem solving,"
        + " and creating an authentic user experience.<br><br> My goal with each project is to have immersion that"
        + " cancels out the users realization of the experience until after it has passed."
        + " I am looking forward to assisting, as well as learning from an experience oriented team.";
    var myInfo = "<h1>Contact</h1>";
    var email = "Email: <a href='mailto:jleopoldacosta@gmail.com'>jleopoldacosta@gmail.com</a>";
    var linkedIn = "LinkedIn: https://www.linkedin.com/in/justin-acosta-0b012414a/"
    var hub = "https://github.com/leopoldleopold";
});
