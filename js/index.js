console.log("Loading Version 0.0.2");

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

function createProjectSlider ({ imgName, link, skillsUsed, description }) 
{
  return createEle(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

console.log("Successful Import");


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

console.log("Successful Display");