import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CertificateList from './components/CertificateList';
import FilePicker from './components/FilePicker';
import SignButton from './components/SignButton';
import SignatureDisplay from './components/SignatureDisplay';

class App extends React.Component {
  handleFileSelect = (file: File) => {
    console.log('Selected file:', file);
  };

  handleSignClick = () => {
    console.log('Sign button clicked');
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>SPA для подписания документов КЭП</h1>
          <CertificateList />
          <FilePicker onFileSelect={this.handleFileSelect} />
          <SignButton onSignClick={this.handleSignClick} />
          <SignatureDisplay signature="" /> 
        </div>
      </Provider>
    );
  }
}

export default App;