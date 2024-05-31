var navi = document.getElementById("stickyNavigator")
var top_after_nav = document.getElementById("aboutMe")
var y_off = navi.offsetTop - 10;

$(window).scroll(function()
{
  if ($(window).scrollTop() >= y_off) 
  {
    navi.classList.add('sticky');
    aboutMe.classList.add('stickyBuffer');
  }
  else 
  {
    navi.classList.remove('sticky');
    aboutMe.classList.remove('stickyBuffer');
  }
});