import React, { Component } from "react";
import marked from "marked";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getMarkdownText() {
    const rawMarkup = marked(this.props.content, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />;
  }
}

export default Preview;
