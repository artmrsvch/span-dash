import React from "react";
import { Divider } from "antd";
import { Size } from "src/components/types";

interface DividerComponentProps {
  size: Size;
  isVisible: boolean;
}

const getMargin = (size: Size) => {
  if (size === Size.SMALL) return "8px 0";
  if (size === Size.MEDIUM) return "16px 0";
  if (size === Size.LARGE) return "32px 0";

  return "16px 0";
};

const DividerComponent: React.FC<DividerComponentProps> = ({
  size,
  isVisible,
}) => (
    <Divider
      style={{
        margin: getMargin(size),
        borderTop: isVisible ? undefined : "none",
      }}
    />
  )

export default DividerComponent;
