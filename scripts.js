(() => {
    function makeTabs() {
        let tabs = document.querySelector('.section__tabs')
        let content = document.querySelectorAll('.section__panel')
        let contentWrap = document.querySelector('.section__panel__wrap')
        tabs.addEventListener( "click", function(e) {
            e.currentTarget.querySelector('.section__tab_active').classList.remove('section__tab_active')
            e.target.classList.toggle('section__tab_active')
            contentWrap.querySelector( ".section__panel:not(.section__panel_hidden)" ).classList.add("section__panel_hidden")
            content[e.target.getAttribute("data-content")].classList.remove("section__panel_hidden")
        } )
    }

    function makeMenu() {
        const links = document.querySelector('.header__links');
        const header__menu = document.querySelector('.header__menu');
        header__menu.addEventListener('click', () => {
            links.classList.toggle('header__links_opened');
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        makeTabs()
        makeMenu()
    });
})();
