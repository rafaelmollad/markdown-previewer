import React from "react";
import "./Editor.css";

const Editor = props => {
  return (
    <div className="editor-container">
      <form>
        <textarea
          className="editor"
          onChange={props.handleChange}
          name="editor"
          id="editor"
          cols="30"
          rows="10"
          value={props.content}
        />
      </form>
    </div>
  );
};

export default Editor;
