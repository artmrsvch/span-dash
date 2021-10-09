import React, { useState } from "react";
import { ConstructorContainer, FlexContainer } from "src/components/styled";
import ControlPanel from "src/components/components/ControlPanel/ControlPanel";
import Header from "src/components/components/Header";
import Dashboard from "src/components/components/Dashboard";
import {
  Actions,
  ConstructorContext,
  useConstructor,
} from "src/components/useConstructor";
import DrawerMenu from "src/components/components/DrawerMenu/DrawerMenu";
import ComponentFormWrapper from "src/components/components/ComponentTemplate/ComponentFormWrapper";
import { ComponentEditState, Id } from "src/components/types";

const Constructor: React.FC = () => {
  const { store, dispatch } = useConstructor();

  const [isSortMode, setSortMode] = useState(false);

  const [isVisibleComponentsMenu, setIsVisibleComponentsMenu] = useState(false);
  const [component, setComponent] = useState<ComponentEditState>();

  const onCloseComponentEdit = () => setComponent(undefined);
  const onSaveComponent = (props: any) => {
    if (component?.action || props.action) {
      if (props?.action) {
        dispatch({ type: props.action, payload: props });
      } else if (component?.action) {
        dispatch({ type: component.action, payload: props });
      }

      onCloseComponentEdit();
      setIsVisibleComponentsMenu(false);
    }
  };
  const onAddComponent = ({ id, action }: ComponentEditState) =>
    setComponent({ id, action });

  const onEditComponent = (uid: string, id: Id) =>
    setComponent({ uid, action: Actions.EDIT_COMPONENT, id });

  const toggleSortMode = () => setSortMode((prevState) => !prevState);
  const toggleMenuDrawer = () =>
    setIsVisibleComponentsMenu((prevState) => !prevState);

  return (
    <ConstructorContext.Provider value={{ store, dispatch }}>
      <FlexContainer>
        <ConstructorContainer className="constructor-container">
          <Header isSortMode={isSortMode} store={store} />
          <Dashboard
            store={store}
            onEditComponent={onEditComponent}
            isSortMode={isSortMode}
          />
          <ControlPanel
            toggleMenuDrawer={toggleMenuDrawer}
            isSortMode={isSortMode}
            toggleSetSortMode={toggleSortMode}
          />
        </ConstructorContainer>
      </FlexContainer>
      <DrawerMenu
        onClose={toggleMenuDrawer}
        visible={isVisibleComponentsMenu}
        onComponentEdit={onAddComponent}
      />
      {component && (
        <ComponentFormWrapper
          onSave={onSaveComponent}
          visible={!!component}
          onClose={onCloseComponentEdit}
          id={component?.id}
          uid={component?.uid}
        />
      )}
    </ConstructorContext.Provider>
  );
};

export default Constructor;