console.log("Loading Version 0.0.1");

const e = React.createElement;

class LikeButton extends React.Component 
{
  constructor(props) {
    super(props);
  }

  render() {

    return e(
      'button',
      { class: "testClass" },
      'BooHoo'
    );
  }
}

function createProjectSlider ({ imgName, link, skillsUsed, description }) 
{
  return createElement(
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