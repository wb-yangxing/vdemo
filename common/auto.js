(function(doc, win) {
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if( clientWidth > 540){
              clientWidth = 540;
          }
          var fontSize = 20 * (clientWidth / 375);
          docEl.style.fontSize = fontSize + 'px';

          var dpi = window.devicePixelRatio;

          docEl.setAttribute('data-dpi', dpi);
          // var scale = 1/dpi;
      };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);