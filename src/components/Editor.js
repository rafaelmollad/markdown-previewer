import React from "react";

const Editor = props => {
  return (
    <div>
      <form>
        <textarea
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
