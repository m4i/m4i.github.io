jQuery(function($) {
  var $ul = $('#links');
  var $li = $ul.find('> li:eq(0)');
  if ($li.length) {
    var prev_container_width = null;
    var prev_columns         = null;

    var min_columns = parseInt($ul.css('min-width')) / li_width;
    var max_columns = parseInt($ul.css('max-width')) / li_width;
    var li_width    = $li.outerWidth();

    var setUlWidth = function() {
      var container_width = $ul.parent().width();
      if (container_width === prev_container_width) return;
      prev_container_width = container_width;

      var columns = Math.floor(
        Math.max(min_columns, Math.min(max_columns,
          container_width / li_width
        ))
      );
      if (columns === prev_columns) return;
      prev_columns = columns;

      $ul.width(columns * li_width);
    };

    $(window).resize(setUlWidth);
    setUlWidth();
  }
});
