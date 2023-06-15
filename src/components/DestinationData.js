import { Component } from "react";
import "./DestinationStyles.css";
import pic1 from "../assets/versailles1.jpg";
import pic2 from "../assets/versailles2.jpg";
import pic3 from "../assets/versailles1.jpg";
import pic4 from "../assets/versailles1.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
