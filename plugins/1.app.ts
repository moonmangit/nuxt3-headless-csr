export default defineNuxtPlugin(() => {
  const loading = useLoadingModalStore();
  const toast = useToastStore();
  const confirm = useConfirmModalStore();

  const proceed = (callback: () => void | Promise<void>) => {
    confirm.add(async () => {
      try {
        loading.start();
        await callback();
        loading.stop();
        toast.add("success", "Operation completed successfully");
      } catch (error: any) {
        loading.stop();
        toast.add("error", error.message || "An error occurred");
      }
    });
  };

  return {
    provide: {
      dialog: {
        loading,
        toast,
        confirm,
        proceed,
      },
    },
  };
});
