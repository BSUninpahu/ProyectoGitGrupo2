window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});
