var acc = document.getElementsByClassName("question")

var i;
for   ( i=0; i < acc.length; i++ ){
    acc[i].addEventListener("click", function() {
         
        // toggle between adding and removing the active class
        this.classList.toggle("active");

        //toggle between hiding and showing the answer
        var answer = this.nextElementSibling;
        console.log(answer)
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
}



var object = document.getElementsByClassName("object");
var button = document.getElementsByClassName("popup")

var i;

for   ( i=0; i < acc.length; i++ ){
    button[i].addEventListener("click", function() {
         
        // toggle between adding and removing the active class
        this.classList.toggle("active");

        //toggle between hiding and showing the answer
        var object = this.nextElementSibling;
        console.log(object)
        if (object.style.display === "block") {
            object.style.display = "none";
        } else {
            object.style.display = "block";
        }
    })
}
