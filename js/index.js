console.log("Loading Version 0.3.0");

const createEle = React.createElement;
const blogTitles = ["BLOGTESTA", "BLOGTESTB", "BLOGTESTC", "BLOGTESTD", "BLOGTESTE"]
const totalBlogCount = blogTitles.length;

class projectSlider extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state = props;
  }

  render() 
  {
    return createProjectSlider(this.state.img, this.state.link, this.state.title, this.state.skills, this.state.desc);
  }
}

class projectBoard extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return createProjectBoard();
  }
}

function createProjectBoard() // can replace later with a more clean implementation, such as reading from a file
{
  return createEle(
    'div',
    null,
    createEle(projectSlider, {img: "github.png", link: "../index.html", title: "This Website", skills: "HTML, CSS, JavaScript, React, jQuery", desc: "I designed and built this website completely from scratch. I had little understanding of frontend before this website, and a lot of the learning was through slowly learning"}),
    createEle(projectSlider, {img: "github.png", link: "../index.html", title: "Test", skills: "HTML, CSS, JavaScript, React, jQuery", desc: "I designed and built this website completely from scratch. I had little understanding of frontend before this website, and a lot of the learning was through slowly learning"}),
    createEle(projectSlider, {img: "github.png", link: "../index.html", title: "Test", skills: "HTML, CSS, JavaScript, React, jQuery", desc: "I designed and built this website completely from scratch. I had little understanding of frontend before this website, and a lot of the learning was through slowly learning"}))
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

class blogBoard extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return createBlogBoard();
  }
}

class blogBox extends React.Component
{
  constructor(props) 
  {
    super(props);
    this.state = props;
  }

  render() 
  {
    return createBlogBox(this.state.type, this.state.title, this.state.desc);
  }
}

function createBlogBox (type, title, description)
{
  return createEle("p", null, type, title, description);
}

function createBlogBoard()
{
  let arr = [];
  for (let i = 0; i < totalBlogCount; i += 5) 
  {
    for (let j = 0; j < 5; j++)
    {
      arr.push(createEle(blogBox, {type: j, title: blogTitles[i + j], desc: "TEST DESC"}));
    }
  }
  return createEle("div", null, arr);
}

console.log("Successful Import");


const projectsDOM = $("#projectA")[0]; // Find the Container to put it in
const projectsRoot = ReactDOM.createRoot(projectsDOM); // Create a React root to render in, the container is a DIV
projectsRoot.render(createEle(projectBoard, null)); // render the elements

console.log("Successful Project");

const blogsDOM = $("#testDiv")[0];
const blogsRoot = ReactDOM.createRoot(blogsDOM);
blogsRoot.render(createEle(blogBoard, null));

console.log("Successful Blogs");
