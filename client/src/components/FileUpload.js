import React, { Fragment, Component } from "react";
import Images from "./Images";
import axios from "axios";
class FileUpload extends Component {
  state = {
    file: "",
    filename: "Choose File",
    uploadedFile: {}
  };

  onChange = e => {
    this.setState({
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);

    axios
      .post("http://localhost:3006/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        const { fileName, filePath } = res.data;
        this.setState({
          uploadedFile: {
            fileName,
            filePath
          }
        });
      })
      .catch(err => console.log(err.response.data));
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="customFile"
              onChange={this.onChange}
            />
            <label htmlFor="customFile" className="custom-file-label">
              {this.state.filename}
            </label>
          </div>
          <input
            type="submit"
            value="Upload"
            className="btn btn-primary btn-block mt-4"
          />
        </form>
        <Images />
      </Fragment>
    );
  }
}

export default FileUpload;
