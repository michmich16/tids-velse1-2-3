// displayModal("Cookie_container");

// function displayModal(id) {
//     document.getElementById(id).style.display = "block";
//     document.getElementById("myBody").classList.toggle("noScroll");

// }


// function displayGallery(id, src, desc) {
//     document.getElementById(id).style.display = "block";
//     document.getElementById("desc").innerHTML = desc;
//     document.getElementById("myBody").classList.toggle("noScroll");
// }


// function closeModal(id) {
//     document.getElementById(id).style.display = "none";
//     document.getElementById("myBody").classList.toggle("noScroll");
// }

// THE JAVASCRIPT

// cookie modal
// let cookieModal = document.getElementById("Cookie_container") //declare cookie_container as cookieModal (not use)
document.getElementById("Cookie_container").style.display = "block"; //show cookie_container
document.getElementById("myBody").classList.toggle("noScroll"); //block scrolling


// displayModal("Cookie_container");


function displayModal(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("myBody").classList.toggle("noScroll");

}


function displayGallery(id, src, desc) {
    document.getElementById(id).style.display = "block";
    document.getElementById("desc").innerHTML = desc;
    document.getElementById("myBody").classList.toggle("noScroll");
}


function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
}


//Reset scroll top found on stackoverflow
history.scrollRestoration = "manual";

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});