import React from "react";
import { Button } from "antd";

interface LinkComponentProps {
  text: string;
  link: string;
  fullWidth?: boolean;
}

const LinkComponent: React.FC<LinkComponentProps> = ({
  text,
  link,
  fullWidth,
}) => (
  <Button
    href={link}
    target="_blank"
    type="primary"
    style={{ width: fullWidth ? "100%" : undefined }}
  >
    {text}
  </Button>
);

export default LinkComponent;
