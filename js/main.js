$(document).ready(() => {
    //logging
    $('#ltr').click(function() { //parent

        $('#rtl').removeClass('ch');
        $('#rtl').css({ 'color': '#20ACEA' });
        $(this).toggleClass('ch');
        $(this).css({ 'color': '#fff' });

        $('#p1').css({ 'display': 'block' });
        $('#p2').css({ 'display': 'block' });
        $('#s1').css({ 'display': 'none' });
        $('#s2').css({ 'display': 'none' });
        $('#s3').css({ 'display': 'none' });

    });
    $('#rtl').click(function() { //student

        $('#ltr').removeClass('ch');
        $('#ltr').css({ 'color': '#20ACEA' });
        $(this).toggleClass('ch');
        $(this).css({ 'color': '#fff' });
        $('#p1').css({ 'display': 'none' });
        $('#p2').css({ 'display': 'none' });
        $('#s1').css({ 'display': 'block' });
        $('#s2').css({ 'display': 'block' });
        $('#s3').css({ 'display': 'block' });


    });


    //lesson side bar
    $('.lesson .arrow .v2').click(function() {
        $('.lesson .content .video').css({ "display": "block" });
        $('.lesson .content .read').css({ "display": "none" });
        $('.lesson .content .questions').css({ "display": "none" });

    });
    $('.lesson .arrow .i2').click(function() {
        $('.lesson .content .read').css({ "display": "block" });
        $('.lesson .content .video').css({ "display": "none" });
        $('.lesson .content .questions').css({ "display": "none" });

    });
    $('.lesson .arrow .q2').click(function() {
        $('.lesson .content .questions').css({ "display": "block" });
        $('.lesson .content .read').css({ "display": "none" });
        $('.lesson .content .video').css({ "display": "none" });

    });
    //end function lesson side bar

    //validate passowrd
    var password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");

    function validatePassword() {
        if (password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
    //end  validate passowrd
});


//questions
$(document).ready(function() {
    // Create an array to store all questions.
    var allQuestions = [];
    // Store each question in an object.
    allQuestions[0] = {
        question: "هل تحب الرياضه",
        choices: ["Yes", "No", "Maybe"],
        correctAnswer: 2
    };
    allQuestions[1] = {
        question: "ما هي رياضتك المفضله",
        choices: ["كرة القدم", "المضرب", "الطائره"],
        correctAnswer: 0
    };
    allQuestions[2] = {
        question: "من هي اقوي شكره في مجال الخاسب",
        choices: ["جوجل", "مايكروسوفت", "ابل"],
        correctAnswer: 0
    };

    // Display first question
    document.getElementById("question").textContent = allQuestions[0].question;

    document.getElementById("choice0").textContent = allQuestions[0].choices[0];

    document.getElementById("choice1").textContent = allQuestions[0].choices[1];

    document.getElementById("choice2").textContent = allQuestions[0].choices[2];

    // Create a variable to store the user's score
    var userScore = 0;

    // Create a variable to store the index of the current question
    var questionNum = 0;

    // When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
    $("#next").click(function() {

        // Check if User answered question.
        // If so, update user's score. If not, do not continue quiz until answer is given.
        if ($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
            userScore++;
        }

        // If last question, show user's score rather than next question
        if (questionNum == (allQuestions.length - 1)) {
            document.getElementsByTagName("form")[0].style.display = "none";

            document.getElementById("question").textContent = " لقد اجبت علي" + userScore + "من  3  ";
        }
        if (userScore > 1) {
            $('#nextlesson').css({ 'display': 'block' });
        }
        // Current question is not the last question, so increment the current question index
        questionNum++;

        // Replace current question with next question
        document.getElementById("question").textContent = allQuestions[questionNum].question;

        document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

        document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

        document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
    });

});

//schdule
$(function() {
    $("#schedule").jqs();
    var s;
    $("#export").click(function() {
        // $("#result").val($("#schedule").jqs('export'));
        s = val($("#schedule").jqs('export'));
    })

    var saveShdule;
    $('#saveButton').click(function() {
        saveShdule = document.getElementsByClassName("jqs-period-container");
        document.getElementsByClassName('jqs-period-container').innerHTML = (saveShdule);
    });


});




//accordian
var accordion = (function() {

    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings 
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function($settings) {
            $accordion_header.on('click', function() {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function($this) {

            if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
                $this.closest('.js-accordion')
                    .find('> .js-accordion-item')
                    .removeClass('active')
                    .find('.js-accordion-body')
                    .slideUp()

            }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$(document).ready(function() {
    accordion.init({ speed: 300, oneOpen: true });
    $("#c1").click(function() {
        $(".s1").toggle();
        (".f1").toggle();
    });
    $(".c2").click(function() {
        $(".s2").toggle();
        (".f2").toggle();
    });
    $(".c3").click(function() {
        $(".s3").toggle();
        (".f3").toggle();
    });
    $(".c4").click(function() {
        $(".s4").toggle();
        (".f4").toggle();
    });
    $(".c5").click(function() {
        $(".s5").toggle();
        (".f5").toggle();
    });
    $(".c6").click(function() {
        $(".s6").toggle();
        (".f6").toggle();
    });

    // console.log("this is " + saveShdule);
    //admin panel
    var d = document.getElementById('dom');
    var n = document.getElementById('num');
    var s = document.getElementById('start');

  
});