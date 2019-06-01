$(".dropdown-trigger").dropdown();
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });
  $(document).ready(function(){
    $('select').formSelect();
  });
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
  $(document).ready(function(){
    $('.timepicker').timepicker();
  });