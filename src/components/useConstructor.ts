import React, { useContext, useReducer } from "react";
import { v4 } from "uuid";

interface StoreComponent {
  id: string | number;
  props: any;
  uid: string;
}

export enum Actions {
  ADD_COMPONENT = "ADD_COMPONENT",
  REMOVE_COMPONENT = "REMOVE_COMPONENT",
  EDIT_COMPONENT = "EDIT_COMPONENT",
  COPY_COMPONENT = "COPY_COMPONENT",
}

export interface ConstructorStorage {
  components: StoreComponent[];
}
interface ReducerActions {
  type: Actions;
  payload: any;
}

interface ContextProps {
  store: ConstructorStorage;
  dispatch: React.Dispatch<ReducerActions>;
}

const initialState: ConstructorStorage = {
  components: [],
};

export const ConstructorContext = React.createContext<ContextProps>({
  store: initialState,
  dispatch: () => ({}),
});
export const useConstructorContext = () => useContext(ConstructorContext);

const reducer = (state: ConstructorStorage, action: ReducerActions) => {
  if (action.type === Actions.ADD_COMPONENT) {
    const uid = v4();
    const newComponent = {
      id: action.payload.id,
      props: { ...action.payload, uid },
      uid, // уникальный id в массиве, для идентификации в среде одинаковых компонентов
    };

    return {
      ...state,
      components: [...state.components, newComponent],
    };
  }
  if (action.type === Actions.EDIT_COMPONENT) {
    return {
      ...state,
      components: state.components.map((component) =>
        component.uid === action.payload.uid
          ? { ...component, props: action.payload }
          : component
      ),
    };
  }
  if (action.type === Actions.REMOVE_COMPONENT) {
    return {
      ...state,
      components: state.components.filter(
        (component) => component.uid !== action.payload.uid
      ),
    };
  }

  if (action.type === Actions.COPY_COMPONENT) {
    const newComponents = [...state.components];
    let index = 1;

    const targetComponent = newComponents.find((item, iter) => {
      if (item.uid === action.payload.uid) {
        index = iter + 1;
        return true;
      }
      return false;
    });

    if (targetComponent) {
      const duplicatedComponent = { ...targetComponent };
      const uid = v4();

      duplicatedComponent.uid = uid;
      duplicatedComponent.props.uid = uid;

      newComponents.splice(index, 0, duplicatedComponent);
    }

    return {
      ...state,
      components: newComponents,
    };
  }

  return state;
};

export const useConstructor = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return { store, dispatch };
};
