import React, { Component } from 'react';
import { Sidebar } from './containers/Sidebar';
import { MessagesList } from './containers/MessagesList';
import { AddMessage } from './containers/AddMessage';
import './App.css';

export default class App extends Component {
  componentDidMount() {
    const username = prompt('Please enter your name: ', 'name');
  }

  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

// const App = () => (
//   <div id="container">
//     <Sidebar />
//     <section id="main">
//       <MessagesList />
//       <AddMessage />
//     </section>
//   </div>
// );

// export default App;
