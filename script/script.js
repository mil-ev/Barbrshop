var login = document.querySelector(".login");
var loginForm = document.querySelector(".login-form");
var loginFormClose = document.querySelector(".login-form-close");
var openMap = document.querySelector(".open-map");
var openMapFoot = document.querySelector(".open-map-foot");
var map = document.querySelector(".map");
var mapClose = map.querySelector(".map-close");
var gallery = document.querySelector(".index .gallery");


login.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.add('show-login-form');
});

loginFormClose.addEventListener("click", function() {
    loginForm.classList.remove("show-login-form");
});

openMapFoot.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("show-map");
});

mapClose.addEventListener("click", function() {
    map.classList.remove("show-map");
});

openMap.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("show-map");
});

gallery.classList.add("gallery-live");