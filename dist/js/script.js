let banner = document.querySelector(".banner");
let logoButton = document.querySelector(".banner__logo");

logoButton.addEventListener('click', function() {
    if (banner.classList.contains('banner--bars')) {
        banner.classList.remove('banner--bars');
    } else {
        banner.classList.add('banner--bars');
    }
});