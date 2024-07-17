class LikeButton extends React.Component 
{
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello, React!</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('footer'))