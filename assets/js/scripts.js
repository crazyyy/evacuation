// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());

// Place any jQuery/helper plugins in here.

// set SECTION size

$( document ).ready(function() {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight,
    section = $('section'),
    sectionHeight = y,
    leftSidebar = $('.left-sidebar'),
    leftSidebarH = $('.left-sidebar').height();

    // section width and height
    // $(section).width(x);
    $(section).height(sectionHeight);
    // set left sidebar top position
    var leftSidebarTop = (sectionHeight - leftSidebarH) / 2;
    $(leftSidebar).css({ top: leftSidebarTop +'px'});

    // close button

    $('.left-sidebar button').click(function () {
      var parent = $(this).parent();
      $(parent).toggleClass('current-block');
    });

    $('.toggle-footer').click( function() {
      var parent = $('footer');
      $(parent).toggleClass('current-block');
      $(this).toggleClass('toggled');

    })

    $('.toggle-header').click( function() {
      var parent = $('header');
      $(parent).toggleClass('current-block');
      $(this).toggleClass('toggled');
    })

    $('.toggle-all').click( function() {
      var parent = $('header, footer, .left-sidebar'),
        parrentSupport = $('.toggle-header, .toggle-footer');
      $(parent).toggleClass('current-block');
      $(parrentSupport).toggleClass('toggled');
      $(this).toggleClass('toggled');
    })


});


