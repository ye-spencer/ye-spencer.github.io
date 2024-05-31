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
  $("#blogButton").click(function()
  {
    $("#blog")[0].scrollIntoView({behavior: "smooth"});
  });
  $("#contactButton").click(function()
  {
    $("#contact")[0].scrollIntoView({behavior: "smooth"});
  });
});