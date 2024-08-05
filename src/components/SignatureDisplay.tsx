import React from 'react';

interface SignatureDisplayProps {
  signature: string;
}

class SignatureDisplay extends React.Component<SignatureDisplayProps> {
  render() {
    return (
      <div>
        <h2>ЭЦП в формате base64</h2>
        <textarea value={this.props.signature} readOnly />
      </div>
    );
  }
}

export default SignatureDisplay;