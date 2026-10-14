(function(){
  "use strict";

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  function closeMenu(){
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    document.body.classList.remove('menu-open');
  }
  function openMenu(){
    menu.classList.add('open');
    toggle.setAttribute('aria-expanded','true');
    document.body.classList.add('menu-open');
  }
  if (toggle){
    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });
  }
  document.querySelectorAll('.mobile-menu a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeMenu();
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

  /* ---- Gallery lightbox ---- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = document.querySelector('.lightbox img');
  var lightboxCaption = document.querySelector('.lightbox-caption');
  var currentIndex = 0;

  function showImage(i){
    currentIndex = (i + galleryItems.length) % galleryItems.length;
    var img = galleryItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.alt || '';
  }
  function openLightbox(i){
    showImage(i);
    lightbox.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    document.body.classList.remove('menu-open');
  }
  galleryItems.forEach(function(item, i){
    item.addEventListener('click', function(){ openLightbox(i); });
  });
  var closeBtn = document.querySelector('.lightbox-close');
  var prevBtn = document.querySelector('.lightbox-prev');
  var nextBtn = document.querySelector('.lightbox-next');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', function(){ showImage(currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function(){ showImage(currentIndex + 1); });
  if (lightbox){
    lightbox.addEventListener('click', function(e){ if (e.target === lightbox) closeLightbox(); });
  }
  document.addEventListener('keydown', function(e){
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
  });
})();
