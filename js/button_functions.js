$(document).ready(function()
{
  $("#aboutMeButton").click(function()
  {
    $("#aboutMe")[0].scrollIntoView({behavior: "smooth"});
  });
  $("#projectsButton").click(function()
  {
    $("#projects")[0].scrollIntoView({behavior: "smooth"});
  });
});