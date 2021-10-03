import React from "react";
import { TitleProps } from "src/components/lib/title/types";

const Title: React.FC<TitleProps> = (props) => {
  return <div>{props.title}</div>;
};

export default Title;
