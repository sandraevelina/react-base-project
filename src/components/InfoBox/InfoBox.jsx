import React from "react";
import Button from "../Button/Button";
import Tag from "../Tag/Tag";

class InfoBox extends React.Component {
  render() {
    return (
      <div className="list-item">
        <div className="list-item-title">{this.props.name}</div>
        <div className="list-item-sub-title">{this.props.company}</div>
        <div
          className="list-item-description"
          dangerouslySetInnerHTML={{
            __html: this.props.description,
          }}
        ></div>

        <div className="list-item-footer">
          <div className="list-item-footer-tag-container">
            <Tag tagName={this.props.type} />
            <Tag tagName={this.props.location} />
            <Tag tagName={this.props.experience} />
          </div>
          <Button
            label="Read more"
            handleClick={() => window.open(this.props.url, "_blank")}
          />
        </div>
      </div>
    );
  }
}

export default InfoBox;
