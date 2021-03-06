import React from "react";
import axios from "axios";

class Images extends React.Component {
  state = {
    images: [],
    loading: false
  };
  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get("http://localhost:3006/view")
      .then(res => {
        console.log(res.data);
        this.setState({
          images: res.data.image,
          loading: false
        });
      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {this.state.loading === true ? (
            <p>Loading...</p>
          ) : (
            this.state.images.map(image => (
              <li key={image._id} style={{ listStyleType: "none" }}>
                <img
                  src={image.img.filePath}
                  alt={image.img.fileName}
                  className="img-thumbnail mt-4"
                />
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default Images;
