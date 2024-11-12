
// vanilla JS
// document.querySelector("h1");

// jquery
// $("h1");

// document.querySelectorAll("button");

// jquery
// $("button");

// changes colour of h1 to green
// the .css can take 2 parameters. with 1 parameter it GETS. with 2 parameters, it SETS
// $("h1").css("color","green");

// this adds a class to h1.
// $("h1").addClass("big-title");

// this removes the class
// $("h1").removeClass("big-title");

// adding multiple classes to h1
// $("h1").addClass("big-title margin-50");

// checking if the element has that class
// $("h1").hasClass("big-title");

// changing text
// $("h1").text("Goodbye!");

// jquery selects all by default
// $("button").text("Goodbye!");

// changing html tags inside the button.
// $("button").html("<em>Hello</em>");


// ATTRIBUTES
// we can GET and SET attributes

// this will GET the source of all images
// $("img").attr("src")

// $("a").attr("href","www.google.com")


// EVENT LISTENERS

// $("h1").click(function () {
//     $("h1").css("color", "red");
// }
// );


// $("button").click(function () {
//     $("h1").css("color","purple");
// });

// this changes the h1 to whatever key is being pressed
// $("body").keydown(function (event) {

//     $("h1").text(event.key);

// });

// $("h1").on("mouseover", function () {
//     $("h1").css("color","purple");
// });


// ADD OR REMOVE ELEMENTS

// $("h1").before("<button>New</button>")
// $("h1").after("<button>New</button>")
// $("h1").prepend("<button>New</button>")
// $("h1").append("<button>New</button>")

// $("button").remove()


// ANIMATIONS

// hide, wait 100ms (1 second) and then show the h1 again.
// $("button").click(function () {
// $("h1").fadeToggle();
// setTimeout(() => {
//     $("h1").fadeIn();
// }, 1000);
// });

// animate can only be used with CSS properties that have NUMERIC values
// $("button").click(function () {
//     $("h1").animate({ opacity: 0.5 });
// });

// we can use fadeOut, fadeIn and fadeToggle
// there are also slideOut, slideIn and SlideToggle
