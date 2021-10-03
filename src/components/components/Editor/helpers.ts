import htmlToDraft from "html-to-draftjs";
import { ContentState, EditorState } from "draft-js";

export const getEditorStateByHtml = (html: string) => {
  const contentBlock = htmlToDraft(html);

  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    return EditorState.createWithContent(contentState);
  }
  return null;
};
