setInterval(function() {
    let output = document.getElementById("output");
    output.innerHTML = "Inner: " + window.innerWidth + " x " + window.innerHeight + "<br>Outer: " + window.outerWidth + " x " + window.outerHeight;
}, 1000);
