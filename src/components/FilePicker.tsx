import React from 'react';

interface FilePickerProps {
  onFileSelect: (file: File) => void;
}

class FilePicker extends React.Component<FilePickerProps> {
  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      this.props.onFileSelect(event.target.files[0]);
    }
  };

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileChange} />
      </div>
    );
  }
}

export default FilePicker;