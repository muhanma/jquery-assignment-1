// Do your work in this file.
// Do your work in this file.
//1. Fork this repo.

//2. Only code inside the file named script.js. No editing any other files.

//3. Create a div element with a class name of "view" and append it to the document body using jQuery. You can use append, appendTo, or any other jQuery method.

$("<div>").addClass("view").appendTo(document.body)

//4. Create a div element with a class name of "grass" and append it to the previously created "view" div from step 3.

$("<div>").addClass("grass").appendTo(".view")

//5.  Create a div element with a class name of "sun" and append it to the previously created "view" div from step 3.

$("<div>").addClass("sun").appendTo(".view")
//6.  Write a while loop to create 5 divs. The div classes will be "ray-1", "ray-2", "ray-3", "ray-4", and "ray-5". Append each of these divs to the previously created "sun" div from step 5.

var rayN = 1;
while (rayN <= 5) {
     $("<div>").addClass("ray-" + rayN)
    .appendTo(".sun");
    rayN++;
}

//7. Create a div element with a class name of "mountain" and append it to the previously created "view" div from step 3.

$("<div>").addClass("mountain").appendTo(".view")

//8. Create a div element with a class name of "mountain-top" and append it to the previously created "mountain" div from step 7.

$("<div>").addClass("mountain-top").appendTo(".mountain")

//9. Write a do...while loop to create 3 divs. The div classes will be "mountain-cap-1", "mountain-cap-2", and "mountain-cap-3". Append each of these divs to the previously created "mountain-top" div from step 
var cap = 0;
do {
    $("<div>").addClass("mountain-cap-" + cap)
    .appendTo(".mountain-top");
    cap ++;
} while (cap <= 3);


// My Previous Work

// var view = document.createElement("div");
// view.className = "view";
// document.body.appendChild(view);


// var grass = document.createElement("div");
// grass.className = "grass";
// view.appendChild(grass);


// var sun = document.createElement("div");
// sun.className = "sun";
// view.appendChild(sun);

// //--6. The div classes will be "ray-1", "ray-2", "ray-3", "ray-4", and "ray-5". 
// var rayN = 1;
// while (rayN <= 5) {
//     var ray = document.createElement("div");
//     ray.className = "ray-"+rayN;
//     sun.appendChild(ray);
//     rayN++;
// }

// var mountain = document.createElement("div");
// mountain.className = "mountain";
// view.appendChild(mountain);

// var Top = document.createElement("div");
// Top.className = 'mountain-top';    
// mountain.appendChild(Top);

// var cap = 0;
// do {
//     var mountainCap = document.createElement("div");
//     mountainCap.className = 'mountain-cap-' + (cap + 1);    
//     Top.appendChild(mountainCap);
//     cap ++;
// } while (cap <= 3);
