window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var scrollToBottomBtn = document.getElementById("scrollToBottomBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        scrollToBottomBtn.style.display = "none";
    } else {
        scrollToBottomBtn.style.display = "block";
    }
}

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
});

document.getElementById("scrollToBottomBtn").addEventListener("click", function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
});