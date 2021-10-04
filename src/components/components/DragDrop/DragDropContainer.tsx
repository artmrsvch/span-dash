import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Actions, useConstructorContext } from "src/components/useConstructor";

const DragDropContainer: React.FC = ({ children }) => {
  const { store, dispatch } = useConstructorContext();

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    //сортировка массива после дропа элемента
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      // если дроп был мимо не в дропзоне main
      return;
    }
    console.log("onDragEnd", result);
    //переорганизовываем массив
    const payload = reorder(
      store.components,
      result.source.index,
      result.destination.index
    );

    dispatch({ type: Actions.REORDER_COMPONENTS, payload });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(
          provided, //provider - реализации dnd,
          snapshot // snapshot-переменные состояний dnd
        ) => (
          <div
            {...provided.droppableProps} // пропсы для анимирования переноса
            ref={provided.innerRef} //ссылка на дом узел(референс)
          >
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDropContainer;
