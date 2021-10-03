import { useMemo, useState } from "react";
import ConfirmDrawer from "src/components/components/ConfirmDrawer/ConfirmDrawer";
import { ConfirmDrawerProps } from "src/components/components/ConfirmDrawer/types";

type HookConfirmDrawer = { onDeleteComponent: () => void };

export const useConfirmDrawer = ({ onDeleteComponent }: HookConfirmDrawer) => {
  const [props, setProps] = useState<ConfirmDrawerProps>();

  const onCancel = () => setProps(undefined);
  const openConfirm = (pr: ConfirmDrawerProps) => setProps(pr);
  const onOk = () => {
    onCancel()
    onDeleteComponent()
  };


  const contextHolder = useMemo(
    () =>
      props ? (
        <ConfirmDrawer
          {...props}
          visible={!!props}
          onOk={onOk}
          onCancel={onCancel}
        />
      ) : null,
    [props]
  );

  return { contextHolder, openConfirm };
};
