import type { ConfirmModalListContent } from "~/components/app/confirm/ConfirmModalList.vue";

export const useConfirmModalStore = defineStore("ConfirmModal", () => {
  const confirms = ref<ConfirmModalListContent[]>([]);

  function add(
    onConfirm: () => void | Promise<void>,
    options?: Partial<
      Pick<
        ConfirmModalListContent,
        "message" | "onCancel" | "title" | "variant"
      >
    >,
  ) {
    const id = randomString();
    const _confirm = async () => {
      await onConfirm();
      remove(id);
    };
    const _cancel = () => {
      options?.onCancel?.();
      remove(id);
    };
    confirms.value.push({
      id,
      onConfirm: _confirm,
      onCancel: _cancel,
      message: options?.message ?? "Are you sure?",
      title: options?.title ?? "Confirm",
      variant: options?.variant ?? "info",
    });
  }

  function remove(id: string) {
    const idx = confirms.value.findIndex((c) => c.id === id);
    if (idx !== -1) {
      confirms.value.splice(idx, 1);
    }
  }

  function $reset() {
    confirms.value = [];
  }

  return {
    confirms,
    // actions
    add,
    remove,
    $reset,
  };
});
