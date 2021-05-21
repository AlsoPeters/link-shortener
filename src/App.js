import React from 'react';
import shrtcode from './api/shrtcode';

import UserInput from './components/UserInput';
import UserOutput from './components/UrlOutput';

import 'rsuite/dist/styles/rsuite-dark.css';

class App extends React.Component {
  state = { link: '' };

  onSearchSubmit = async (term) => {
    const response = await shrtcode.post(`shorten?url=${term}`);
    this.setState({ link: response.data.result.short_link });
    console.log(this.state.link);
  };

  render() {
    return (
      <div className='ui container'>
        <UserInput onSubmit={this.onSearchSubmit} />
        <UserOutput link={this.state.link} />
      </div>
    );
  }
}
export default App;
