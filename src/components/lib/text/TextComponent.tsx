import React from "react";

interface TextProps {
  text: string;
}

const TextComponent: React.FC<TextProps> = ({ text }) => {
  return <div dangerouslySetInnerHTML={{__html: text}} />;
};

export default TextComponent;
