console.log("Loading Version 0.1.6");

const createEle = React.createElement;

class projectSlider extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = props
  }

  render() 
  {
    return createProjectSlider(this.state.img, this.state.link, this.state.title, this.state.skills, this.state.desc);
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


const projectsDOM = document.querySelector('#projectA'); // Find the Container to put it in
const projectsRoot = ReactDOM.createRoot(projectsDOM); // Create a React root to render in, the container is a DIV
projectsRoot.render(
  createEle(projectSlider, {img: "github.png", link: "../index.html", title: "This Website", skills: "HTML, CSS, JavaScript, React, jQuery", desc: "I designed and built this website completely from scratch. I had little understanding of frontend before this website, and a lot of the learning was through slowly learning"})
  ); // render the elements

console.log("Successful Display");