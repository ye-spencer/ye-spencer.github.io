console.log("Loading Version 0.6.0");

const createEle = React.createElement;
const blogTitles = ["How To Play 24", "Bucket List", "Life Mission Statement", "Top 7 Photos 2023-2024"]
const blogTags = ["Games", "Life", "Life", "Life"]
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
    createEle(projectSlider, {img: "github.png", link: "../index.html", title: "This Website", skills: "HTML, CSS, JavaScript, React, jQuery", desc: "This website was designed and entirely coded from scratch. Before this website, I had zero experience with front-end development. I enjoyed slowly learning various Front-End design concepts while slowly bringing my vision for the site to life. I plan to improve this website more after some formal instruction in JavaScript in the Fall 2024 Semester."}),
    createEle(projectSlider, {img: "playingcards.png", link: "https://github.com/ye-spencer/24-Game-Solver", title: "24 Game Solver & Bot", skills: "Python, Selenium, OpenCV, PyTesseract", desc: "This project was initially intended to simulate hands in the card game '24' to settle a family debate about what percentage of hands are solvable. However, the project has since evolved into a bot that can play the game in online game rooms. This bot can avoid all antibot countermeasures implemented by the website."}),
    createEle(projectSlider, {img: "windowscomputer.png", link: "https://github.com/ye-spencer/Windows-Motivational-Backgrounds", title: "Windows Background Creator", skills: "C++, Python, Pillow", desc: "Automatically updates a Windows device's background wallpaper with motivational quotes, lessons, and more. These phrases are customizable."}),
    createEle(projectSlider, {img: "california.png", link: "https://github.com/ye-spencer/California-HS-Data-Project", title: "California High School Performance", skills: "SQL, BigQuery, Python, Sklearn", desc: "This project uses a Random Forest Machine Learning Model to determine what factors lead to high school success as measured by a custom made scoring algorithm based off standardized test scores."}),
    createEle(projectSlider, {img: "running.png", link: "https://github.com/ye-spencer/PR-Predictor", title: "PR Predictor (Planning)", skills: "N/A", desc: "This project focuses on determining the likelihood of a track runner running a Personal Record (PR) based on their previous performance conditions. The data will be collected from online sources like Athletic.net and TFRRS."}))
}

function createProjectSlider ( imgName, link, projectName, skillsUsed, description ) 
{
  return createEle(
    'div',
    { className: "projectSlider" },
    createEle('img', {src: ("imgs/" + imgName), alt:imgName, className: "projectPicture"}),
    createEle('a', {href: link, target: "_blank"}, createEle('br', null), projectName),
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
    classNames += "column-1";
  }
  return createEle("div", {className: classNames, onClick: () => {window.open(("blogs/" + blogTitles[num] + ".html"), '_blank');}}, createEle("h6", {className: "blogTitle"}, blogTitles[num]), createEle("p", {className: "blogTag"}, "Tags: " + blogTags[num]));
}

function createRow(size, startingPoint)
{
  if (size === 1)
  {
    return createEle("div", {className: "row"}, createBlogBox(10, startingPoint));
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
  for (let i = 0; i < totalBlogCount - 5; i += 5) // creating groupings of 5
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
