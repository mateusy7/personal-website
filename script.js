function openTab(event, tabId) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabId).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tabcontent").style.display = "block";
    document.querySelector(".tablink").classList.add("active");
});