import React from 'react';
import axios from 'axios';

import UserInput from './components/UserInput';
import UserOutput from './components/UrlOutput';
import ShortUrlCall from './utilities/ShortUrlCall';

import 'rsuite/dist/styles/rsuite-dark.css';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.post(`https://api.shrtco.de/v2/shorten?url=${term}`);
  }

  render() {
    return (
      <div className='ui container'>
        <UserInput onSubmit={this.onSearchSubmit} />
        <UserOutput />
      </div>
    );
  }
}
export default App;
