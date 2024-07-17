import { LikeButton } from '/react_test.js';

console.log("Successful Import");

const e = React.createElement;

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

console.log("Successful Display");