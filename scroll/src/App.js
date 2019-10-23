import React, { Component } from 'react';
import ContactList from './contact-list';

class App extends Component {
  render() {
    return (
      <div className="container">
      <h1>Contacts</h1>
      <ContactList />
      </div>
    );
  }
}

export default App;

