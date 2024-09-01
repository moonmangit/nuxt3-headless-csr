export const useLoadingModalStore = defineStore("LoadingModal", () => {
  const active = ref(false);
  const message = ref<string>("");

  function start(msg?: string) {
    message.value = msg || "";
    active.value = true;
  }

  function updateMessage(msg: string) {
    if (active.value) {
      message.value = msg;
    } else {
      message.value = "";
    }
  }

  function stop() {
    active.value = false;
    message.value = "";
  }

  function $reset() {
    active.value = false;
    message.value = "";
  }

  return {
    active,
    message,
    start,
    updateMessage,
    stop,
    $reset,
  };
});
