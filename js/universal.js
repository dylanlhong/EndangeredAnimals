var skip = document.getElementById("skip");

document.addEventListener("focus", function() {
    console.log("first tab");
    skipClass = skip.classList;
    skipClass.remove("hidden");
});