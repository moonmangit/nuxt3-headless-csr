import type { ToastListItemContent } from "~/components/app/toast/ToastList.vue";

const variantConfigs: Record<
  ToastListItemContent["variant"],
  Pick<ToastListItemContent, "iconName" | "lifeSec" | "title">
> = {
  success: { iconName: "check-circle", lifeSec: 5, title: "Success" },
  info: { iconName: "info-circle", lifeSec: 5, title: "Info" },
  warning: { iconName: "exclamation-circle", lifeSec: 5, title: "Warning" },
  error: { iconName: "times-circle", lifeSec: 5, title: "Error" },
};

export const useToastStore = defineStore("Toast", () => {
  const toasts = ref<ToastListItemContent[]>([]);

  function remove(id: string) {
    const index = toasts.value.findIndex((toast) => toast.id === id);
    if (index !== -1) {
      toasts.value.splice(index, 1);
    }
  }

  function add(
    variant: ToastListItemContent["variant"],
    message: string,
    options?: Partial<Pick<ToastListItemContent, "iconName" | "lifeSec">>,
  ) {
    const config = variantConfigs[variant];
    toasts.value.push({
      id: randomString(5),
      variant,
      title: config.title,
      message,
      iconName: options?.iconName ?? config.iconName,
      lifeSec: options?.lifeSec ?? config.lifeSec,
    });
  }

  function $reset() {
    toasts.value = [];
  }

  return {
    // state
    toasts,
    // actions
    add,
    remove,
    $reset,
  };
});
