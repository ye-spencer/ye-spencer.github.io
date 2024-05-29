// function buttonJumpToElement()
// {
// 	var button_section = this.getAttribute('data-name');
// 	var parent_document = this;
// 	while (!(parent_document instanceof HTMLDocument))
// 	{
// 		parent_document = parent_document.parentNode;
// 	}
//     parent_document.getElementById(button_section).scrollIntoView();
// }

// var elements = this.document.getElementsByClassName("directionButton");
// for (let i = 0; i < elements.length; i++) 
// {
// 	elements[i].addEventListener("click", buttonJumpToElement);
// }

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