type User = {
  name: string;
  age: number;
};

export const useUserStore = defineStore("User", () => {
  const val = ref<User | null>(null);

  function $reset() {
    val.value = null;
  }

  return {
    val,
    $reset,
  };
});
