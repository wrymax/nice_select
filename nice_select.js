jQuery.fn.nice_select = function(){
  var select = $(this);
  var selected = $(this).find('.nice-select-selected');
  var select_options = $(this).find('.nice-select-options');

  // hover function
  var hovering = false;
  select.hover(function(){
    hovering = true;
    selected.addClass('hovered');
    select_options.slideDown(80);
  }, function(){
    hovering = false;
    setTimeout(function(){
      if(!hovering) {
        select_options.hide();
        selected.removeClass('hovered');
      }
    }, 150);
  })
}
