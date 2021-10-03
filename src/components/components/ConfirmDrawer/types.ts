export interface ConfirmDrawerProps {
  title: string;
  description: string;
  okButtonText: string;
  cancelButtonText: string;
}
export interface ConfirmProps {
  onCancel: () => void
  onOk: () => void
}