$(document).ready(function()
{
  $("#aboutMeButton").click(function()
  {
    $("#aboutMe")[0].scrollIntoView({behavior: "smooth", inline: 'center', block: 'center'});
  });
  $("#projectsButton").click(function()
  {
    $("#projects")[0].scrollIntoView({behavior: "smooth", inline: 'center', block: 'center'});
  });
  $("#blogButton").click(function()
  {
    $("#blog")[0].scrollIntoView({behavior: "smooth", inline: 'center', block: 'center'});
  });
  $("#contactButton").click(function()
  {
    $("#contact")[0].scrollIntoView({behavior: "smooth", inline: 'center', block: 'center'});
  });
});