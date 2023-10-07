import { ToastService } from "@src/shared/view/services/ToastService/Toast.service";

export const useGenericErrorToast = () => {
  const triggerGenericErrorToast = () =>
    ToastService.show({
      title: `Oops, an error occured.`,
      body: `Please try again`,
      type: "error",
    });

  return { triggerGenericErrorToast };
};
