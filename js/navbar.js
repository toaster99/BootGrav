// //Code to make the navbar stick to the top of the page on scroll

// $(function(){
//   var
//     $win = $(window),
//     $filter = $('.navbar_menu'),
//     $filterSpacer = $('<div />', {
//       "class": "filter-drop-spacer",
//       "height": $filter.outerHeight()
//     });
//   $win.scroll(function(){     
//     if(!$filter.hasClass('navbar-fixed-top') && $win.scrollTop() > $filter.offset().top){
//       $filter.before($filterSpacer);
//       $filter.addClass("navbar-fixed-top");
//     } else if ($filter.hasClass('navbar-fixed-top')  && $win.scrollTop() < $filterSpacer.offset().top){
//       $filter.removeClass("navbar-fixed-top");
//       $filterSpacer.remove();
//     }
//   });
// });

$(document).ready(function()
{
  //Setup the hamburger menu
  $("#hamburger_icon").click(function()
  {
    $("#navbar_hamburger_menu").slideToggle("slow");
  });
});