/**
 * IE Bold Opacity Fix
 * 
 * Source: https://github.com/orthes/IEBoldOpacityFix
 * Author: Pavel Linkesch (http://linkesch.sk, @linkesch)
 */

$(document).ready(function () {
  // Fix needed only for older MSIE versions
  if ($.browser.msie && parseInt($.browser.version, 10) > 8) {
    return;
  }
    
  // Find all elements with filter alhpa opacity
  var elements = $('*').filter(function () {    
    return $(this).css('filter').match(/^alpha/) != null ? true : false;
  }); 
  
  elements.each(function () {
    var parent = $(this);
    var background, gradient;
    do {
      // Get parent background color or gradient
      parent = parent.parent();
      background = parent.css('background-color');
      gradient = parent.css('filter').match(/^progid:DXImageTransform.Microsoft.gradient/);  
    } while ((background === undefined || background === 'transparent') && gradient === null);
        
    if (background !== undefined && background !== 'transparent') {
      // Set background color to background color of parent      
      $(this).css('background-color', background);  
    } else {
      // Set transparent gradient to elements with parents with gradient background
      $(this).css({
        '-ms-filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#00000000)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00000000,endColorstr=#00000000)',
        'zoom': 1
      });        
    }    
  });
});