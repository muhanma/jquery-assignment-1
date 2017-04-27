// Do your work in this file.
// Do your work in this file.
// Fork this repo.

// Only code inside the file named script.js. No editing any other files.

// Create a for loop that creates 196 divs and will include the following:

// All the divs will have a class of box.

// All even-numbered divs will also have the class of type-1.

// All odd-numbered divs will also have the class of type-2.

// All the divs created in step 3 will be appended to the document body.

// Add an click event listener on all the created box divs in step 3 and 4. Important: You cannot do this with any type of loop.

for (var i = 0; i < 196; i++) 
{
    var n = i % 2;
if (n == 0) 
{ 
 $("<div>").addClass("box type-1").appendTo(document.body);
} 
else if (n ==1) 
{ 
 $("<div>").addClass("box type-2").appendTo(document.body);

 }
}

$(".box").click(function() {
    if($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
    } else {
        $(this).addClass("clicked");
    }
})
