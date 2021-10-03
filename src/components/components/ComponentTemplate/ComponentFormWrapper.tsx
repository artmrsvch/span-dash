import React from "react";
import { Drawer, Form } from "antd";
import { lib } from "src/components/lib/config";
import { Id } from "src/components/types";
import { Actions, useConstructorContext } from "src/components/useConstructor";
import DrawerHeader from "src/components/components/ComponentTemplate/DrawerHeader";
import styled from "styled-components";
import { FormContext } from "src/components/components/ComponentTemplate/helpers";

type SaveFun = (props: object) => void;

interface ComponentFormWrapperProps {
  visible?: boolean;
  id: Id;
  uid?: string;
  onClose: () => void;
  onSave: SaveFun;
}

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;

const ComponentFormWrapper: React.FC<ComponentFormWrapperProps> = ({
  visible,
  onClose,
  onSave,
  id,
  uid,
}) => {
  const { store } = useConstructorContext();
  const [form] = Form.useForm();

  const onFinish = (values?: any) => {
    onSave({ ...values, id, uid });
  };

  const saveComponent = (act?: Actions) => {
    // если мы передали экшн, то вероятно это удаление либо дублирование,
    // и данные формы нам не нужны
    if (act) {
      onSave({ id, uid, action: act });
    } else {
      form.submit();
    }
  };

  const Component = lib[id].template;
  const initialProps = uid
    ? store.components.find((compo) => compo.uid === uid)?.props || {}
    : {};

  return (
    <StyledDrawer
      title={
        <DrawerHeader onSave={saveComponent} uid={uid}>
          {lib[id]?.name || "Компонент"}
        </DrawerHeader>
      }
      placement="bottom"
      getContainer=".constructor-container"
      style={{ position: "absolute" }}
      onClose={onClose}
      visible={visible}
      contentWrapperStyle={{
        height: "auto",
        maxHeight: "calc(100% - 16px)",
      }}
    >
      <FormContext.Provider value={{ form }}>
        <Form
          onFinish={onFinish}
          form={form}
          initialValues={initialProps}
          layout="vertical"
        >
          <Component />
        </Form>
      </FormContext.Provider>
    </StyledDrawer>
  );
};

export default ComponentFormWrapper;
