console.log("Loading Version 0.1.4");

const createEle = React.createElement;

class projectSlider extends React.Component 
{
  constructor(props) 
  {
    super(props);
    console.log(this.state)
    console.log(props)
    this.state = props
    console.log(this.state)
    console.log(this.state.name)
  }

  render() 
  {
    return createProjectSlider("github.png", "../index.html", "This Website", "HTML, CSS, JavaScript, React, jQuery", "I designed and built this website completely from scratch. I had little understanding of frontend before this website, and a lot of the learning was through slowly learning");
  }
}

function createProjectSlider ( imgName, link, projectName, skillsUsed, description ) 
{
  return createEle(
    'div',
    { className: "projectSlider" },
    createEle('img', {src: ("imgs/" + imgName), alt:imgName, className: "projectPicture"}),
    createEle('a', {href: link}, createEle('br', null), projectName),
    createEle('h5', {className: "projectSkillsUsed"}, skillsUsed),
    createEle('p', {className: "projectDescription"}, description)
  );
}

console.log("Successful Import");


const domContainer = document.querySelector('#projectA'); // Find the Container to put it in
const root = ReactDOM.createRoot(domContainer); // Create a React root to render in, the container is a DIV
root.render(createEle(projectSlider, {one: 3, two: 5})); // render the elements

console.log("Successful Display");