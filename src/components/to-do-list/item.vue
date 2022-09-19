<template>
  <div class="bg-gray-100 rounded-lg px-6 py-3 flex items-center gap-x-4">
    <button @click="toggleDone">
      <font-awesome-icon icon="circle-check" class="fa-lg duration-150" :class="model.done ? 'text-green-500' : 'text-gray-400'" />
    </button>

    <input
      class="grow outline-none bg-transparent border-b border-transparent focus:border-gray-300 duration-150 py-1 w-0"
      :class="{ 'line-through text-gray-400': model.done }"
      v-model="model.title"
    />

    <button @click="remove">
      <font-awesome-icon icon="trash" class="fa-lg text-red-300 hover:text-red-500 duration-150" />
    </button>
  </div>
</template>

<script>
import vModel from "../../mixins/vModel.vue";

export default {
  name: "To Do List Item",
  mixins: [vModel],
  methods: {
    toggleDone() {
      this.model.done = !this.model.done;
    },
    remove() {
      this.$emit("remove", this.model.id);
    }
  }
};
</script>
