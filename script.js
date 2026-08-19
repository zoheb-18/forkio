document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('menuToggle');
    var links = document.getElementById('navLinks');

    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            links.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            links.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});