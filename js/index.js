console.log("Successful Loading Index v0.0.1");

const e = React.createElement;

class LikeButton extends React.Component 
{
  constructor(props) 
  {
    super(props);
    console.log(props)
  }

  render() 
  {

    return e(
      'button',
      { class: "testClass"}
      'Like'
    );
  }
}

console.log("Successful Import");


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

console.log("Successful Display");