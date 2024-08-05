import React from 'react';

interface SignButtonProps {
  onSignClick: () => void;
}

class SignButton extends React.Component<SignButtonProps> {
  render() {
    return (
      <button onClick={this.props.onSignClick}>Подписать</button>
    );
  }
}

export default SignButton;