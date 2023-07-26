import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ onEditorDataChange }) => {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (content, delta, source, editor) => {
    setEditorData(content);
    onEditorDataChange(content);
  };

  return (
    <>
      <ReactQuill
        value={editorData}
        onChange={handleEditorChange}
        style={{ height: "35rem" }}
      />
    </>
  );
};

export default TextEditor;
