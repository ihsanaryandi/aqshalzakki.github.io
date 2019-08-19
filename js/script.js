// sidenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// slider
const slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, {
      indicators: false,
      height: 400,
      transition: 600,
      interval: 3000
    });

// parallax
const paralak = document.querySelectorAll('.parallax');
M.Parallax.init(paralak);

// smooth scrolling
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
        scrollOffset: 57
   });

// portfolio
const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// tes autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);
