import React, { CSSProperties } from 'react';
import {
  Draggable,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';
import styled from 'styled-components';

interface DraggableItemProps {
  uid: string;
  index: number;
}
const Div = styled.div`
  left: auto!important;
  top: auto!important;
`

const DraggableItem: React.FC<DraggableItemProps> = ({
  uid,
  index,
  children,
}) => {
  const getItemStyle = (
    isDragging: boolean,
    draggableStyle?: DraggingStyle | NotDraggingStyle
  ): CSSProperties => ({
    userSelect: "none",
    // background: isDragging ? "lightgreen" : "grey", //смена бэкраунда компонента который переносится
    ...draggableStyle, //пропсы реализации всей анимации драга
  });

  return (
    <Draggable key={uid} draggableId={uid} index={index} >
      {(provided, snapshot) => (
        <Div
          className="drag-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          {children}
        </Div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
//