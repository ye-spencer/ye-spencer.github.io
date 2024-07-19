console.log("Loading Version 0.0.6");

const createEle = React.createElement;

class projectSlider extends React.Component 
{
  constructor(props) 
  {
    super(props);
  }

  render() 
  {
    return createProjectSlider("github.png", "google.com", "Testing Component", "Awesomeness", "THis works!");
  }
}

function createProjectSlider ( imgName, link, projectName, skillsUsed, description ) 
{
  return createEle(
    'div',
    { className: "projectSlider" },
    createEle('img', {src: ("imgs/" + imgName), className: "projectPicture"}),
    createEle('a', {href: link}, createEle('br', null), projectName),
    createEle('h5', {className: "projectSkillsUsed"}, skillsUsed),
    createEle('p', {className: "projectDescription"}, description)
  );
}

console.log("Successful Import");


const domContainer = document.querySelector('#like_button_container'); // Find the Container to put it in
const root = ReactDOM.createRoot(domContainer); // Create a React root to render in, the container is a DIV
root.render(createEle(projectSlider)); // render the elements

console.log("Successful Display");