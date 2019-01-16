 // Setting up Masonry properties
 var grid = document.querySelector('.grid');
 var gridItem = document.querySelector('.grid-item');
 var msnry = new Masonry( grid, {
     columnWidth: 200,
     gutter: 20
 });

 // need to decrese gigantic on show all click
gridFilter("showAllBoxes")
function gridFilter(c) {
  var classesToFilter = document.getElementsByClassName("grid-item");
  if (c == "showAllBoxes"){
    c = "";
  } 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (var i = 0; i < classesToFilter.length; i++) {
    hideClass(classesToFilter[i], "show");
    if (classesToFilter[i].className.indexOf(c) > -1) showClass(classesToFilter[i], "show");
  }
  msnry.layout();
}

// Show filtered elements
function showClass(element, name) {
  var i, elementsArrayOne, elementsArrayTwo;
  elementsArrayOne = element.className.split(" ");
  elementsArrayTwo = name.split(" ");
  for (i = 0; i < elementsArrayTwo.length; i++) {
    if (elementsArrayOne.indexOf(elementsArrayTwo[i]) == -1) {
      element.className += " " + elementsArrayTwo[i];
    }
  }
}

// Hide elements that are not selected
function hideClass(element, name) {
  var i, elementsArrayOne, elementsArrayTwo;
  elementsArrayOne = element.className.split(" ");
  elementsArrayTwo = name.split(" ");
  for (i = 0; i < elementsArrayTwo.length; i++) {
    while (elementsArrayOne.indexOf(elementsArrayTwo[i]) > -1) {
      elementsArrayOne.splice(elementsArrayOne.indexOf(elementsArrayTwo[i]), 1); 
    }
  }
  element.className = elementsArrayOne.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Event listener for clicking on boxes.
 grid.addEventListener( 'click', function( event ) {
 // don't proceed if item was not clicked on
     if ( !matchesSelector( event.target, '.grid-item' ) ) {
         return;
     }
     // trigger layout
     msnry.layout();
 });

 $(window).resize(function () {
     $container.masonry('bindResize')
 });

// When boxes are clicked, toggle classes to increase height and size.
// Also toggle fades the text in the box.
 $(".childshow").click(function () {
     $(this).children('.item-text').fadeToggle("fast");
     // change size of item via class
     event.target.classList.toggle('grid-item--gigante');
 });