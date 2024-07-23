console.log("Loading Version 0.4.4");

const createEle = React.createElement;
const blogTitles = ["BLOGTESTA", "BLOGTESTB", "BLOGTESTC", "BLOGTESTD", "BLOGTESTE"]
const blogTags = ["CSF", "Life", "Running", "C++, CSF", "None"]
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

function createBlogBox (type, num)
{
  let classNames = "blogBox ";
  if (type === 0)
  {
    classNames += "column-2 left";
  }
  else if (type === 1)
  {
    classNames += "column-2 right";
  }
  else if (type === 2)
  {
    classNames += "column-3 left";
  }
  else if (type === 3)
  {
    classNames += "column-3 center";
  }
  else if (type === 4)
  {
    classNames += "column-3 right";
  }
  else if (type === 10) // single box
  {
    classNames += "column-1"; // need to add as a class in css
  }
  //onClick: () => {console.log('clicked')}
  return createEle("div", {className: classNames, onClick: () => {window.open("blogs/" + blogTitles[num] + ".html"), '_blank');}}, createEle("h6", {className: "blogTitle"}, blogTitles[num]), createEle("p", {className: "blogTag"}, blogTags[num]));
}

function createRow(size, startingPoint)
{
  if (size === 1)
  {

  }
  else if (size === 2)
  {
    return createEle("div", {className: "row"}, createBlogBox(0, startingPoint), createBlogBox(1, startingPoint + 1));
  }
  else if (size === 3)
  {
    return createEle("div", {className: "row"}, createBlogBox(2, startingPoint), createBlogBox(3, startingPoint + 1), createBlogBox(4, startingPoint + 2));
  }
  return "ERROR";
}

function createBlogBoard()
{
  let rows = [];
  for (let i = 0; i < totalBlogCount; i += 5) // creating groupings of 5
  {
    let j = 0;
    rows.push(createRow(2, i));
    rows.push(createRow(3, i + 2));
  }

  let leftover = totalBlogCount % 5; // deal with the final 0-4 blog boxes
  if (leftover === 1)
  {
    rows.push(createRow(1, totalBlogCount - 1));
  }
  else if (leftover === 2)
  {
    rows.push(createRow(2, totalBlogCount - 2));
  }
  else if (leftover === 3)
  {
    rows.push(createRow(3, totalBlogCount - 3));
  }
  else if (leftover === 4)
  {
    rows.push(createRow(2, totalBlogCount - 4));
    rows.push(createRow(2, totalBlogCount - 2));
  }

  return createEle("div", null, rows);
}

console.log("Successful Import");


const projectsDOM = $("#projectA")[0]; // Find the Container to put it in
const projectsRoot = ReactDOM.createRoot(projectsDOM); // Create a React root to render in, the container is a DIV
projectsRoot.render(createEle(projectBoard, null)); // render the elements

console.log("Successful Project");

const blogsDOM = $("#blogContainer")[0];
const blogsRoot = ReactDOM.createRoot(blogsDOM);
blogsRoot.render(createEle(blogBoard, null));

console.log("Successful Blogs");
