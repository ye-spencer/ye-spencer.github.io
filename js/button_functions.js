function buttonJumpToElement()
{
	//var button_section = getAttribute('data-name');
	console.log("this")
    //this.document.getElementById("aboutMe").scrollIntoView();
    this.style.backgroundColor = "red";
}
console.log(this);
var elements = this.document.getElementsByClassName("directionButton");
console.log(elements);
console.log(elements)
var length = elements.length;
console.log(length)
for (let i = 0; i < elements.length; i++) 
{
	console.log(i)
	elements[i].addEventListener("click", buttonJumpToElement);
}