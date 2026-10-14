(function(){
  "use strict";

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  var menuClose = document.querySelector('.mobile-menu-close');
  function closeMenu(){
    var wasOpen = menu.classList.contains('open');
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
    if (wasOpen && document.activeElement === menuClose) toggle.focus();
  }
  function openMenu(){
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-open');
    if (menuClose) menuClose.focus();
  }
  if (toggle){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });
  }
  if (menuClose) menuClose.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-menu a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
  });
  // leaving the phone layout (rotate / resize) must not leave the page scroll-locked
  window.addEventListener('resize', function(){
    if (window.innerWidth > 960) closeMenu();
  });

  /* ---- Faculty team expand ---- */
  var reviewerToggle = document.querySelector('.reviewer-toggle');
  var reviewerWrap = document.querySelector('.reviewer-wrap');
  if (reviewerToggle){
    reviewerToggle.addEventListener('click', function(){
      var expanded = reviewerWrap.classList.toggle('expanded');
      reviewerToggle.textContent = expanded ? 'Show fewer' : 'View full faculty team';
    });
  }

})();
