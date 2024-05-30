var navi = document.getElementById("stickyNavigator")
var y_off = navi.offsetTop - 10;

$(window).scroll(function()
{
  if ($(window).scrollTop() >= y_off) 
  {
    navi.classList.add('sticky');
  }
  else 
  {
    navi.classList.remove('sticky');
  }
});