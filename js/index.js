console.log("Loading Version 0.0.4");

const createEle = React.createElement;

class LikeButton extends React.Component 
{
  constructor(props) {
    super(props);
  }

  render() {

    return createEle(
      'button',
      { className: 'testClass' },
      'BooHoo'
    );
  }
}

// function createProjectSlider ({ imgName, link, projectName, skillsUsed, description }) 
// {
//   return createEle(
//     'div',
//     { className: "projectSlider" },
//     createEle('img', {source: ("imgs/" + imgName), className = "projectPicture"}),
//     createEle('a', {href: link}, createEle('br', null), projectName),
//     createEle('h5', {className: "projectSkillsUsed"}, skillsUsed),
//     createEle('p', {className: "projectDescription"}, description)
//   );
// }

console.log("Successful Import");


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(createEle(LikeButton));

console.log("Successful Display");