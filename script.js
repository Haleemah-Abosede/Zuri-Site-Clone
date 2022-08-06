var acc = document.getElementsByClassName("question")

var i;
for   ( i=0; i < acc.length; i++ ){
    acc[i].addEventListener("click", function() {
         
        // toggle between adding and removing the active class
        this.classList.toggle("active");

        //toggle between hiding and showing the answer
        var answer = this.classList.toggle("active");
        if (answer.style.display === "block"){
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
}