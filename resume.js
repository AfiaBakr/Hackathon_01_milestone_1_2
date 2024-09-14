var buttontoggle = document.getElementById("hideshow");
var get = document.getElementById("Software");
buttontoggle.addEventListener("click", function () {
    if (get.style.display === "none") {
        get.style.display = "block";
    }
    else
        (get.style.display = "none");
});
