import React, {  useState } from "react";
import styled from "styled-components";
import { Editor as Wysywyg } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { convertToRaw, EditorState } from "draft-js";
import { getEditorStateByHtml } from "src/components/components/Editor/helpers";

const EditorWrapper = styled.div`
  .wrapper-class {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
  }
  .toolbar-class {
    display: flex;
    width: 100%;
    padding: 16px 16px 0;
    border: none;
    margin: 0;
    .rdw-inline-wrapper {
      display: flex;
      justify-content: space-around;
      flex: 1;
      border-right: 1px solid #b4b4bb;
    }
    .rdw-text-align-wrapper {
      display: flex;
      justify-content: space-around;
      flex: 1;
    }
    .rdw-option-wrapper {
      cursor: pointer;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;

      img {
        width: 15px;
        height: 15px;
      }
    }
    .rdw-option-active {
      box-shadow: 0 1px 4px rgba(24, 144, 255, 0.3),
        -23px 0 20px -23px rgba(24, 144, 255, 0.8),
        23px 0 20px -23px rgba(24, 144, 255, 0.8),
        0 0 40px rgba(24, 144, 255, 0.2) inset;
    }
  }
  .editor-class {
    height: 136px;
    padding: 0 16px;
    background-color: #f5f5f5;

    .public-DraftEditorPlaceholder-root {
      margin-top: 10px;
    }
    .public-DraftStyleDefault-block {
      margin: 0;
    }
  }
`;

interface EditorProps {
  setFieldValue: (html: string) => void;
  initialState: string;
}

const createState = (html: string) => {
  if (html) {
    const editorState = getEditorStateByHtml(html);

    if (editorState) return editorState;
  }
  return EditorState.createEmpty();
};

const Editor: React.FC<EditorProps> = ({ setFieldValue, initialState }) => {
  const [state, setState] = useState<EditorState>(createState(initialState));

  const onEditorStateChange = (props: EditorState) => {
    const html = draftToHtml(convertToRaw(props.getCurrentContent()));

    setState(props);
    setFieldValue(html);
  };

  return (
    <EditorWrapper>
      <Wysywyg
        placeholder="Введите текст"
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ["inline", "textAlign"],
          inline: {
            options: ["bold", "italic", "underline"],
          },
          textAlign: {
            options: ["left", "center", "right"],
          },
        }}
        onEditorStateChange={onEditorStateChange}
        editorState={state}
      />
    </EditorWrapper>
  );
};

export default Editor;
