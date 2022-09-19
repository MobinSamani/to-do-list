<template>
  <div>
    <div class="p-8 border-b border-gray-300 flex flex-col gap-y-4 sm:flex-row items-center justify-between">
      <div class="flex items-center gap-x-2">
        <div class="text-2xl font-bold">Tasks</div>

        <div class="text-xl text-gray-400">({{ remainingItemsCount }}/{{ items.length }})</div>
      </div>

      <div class="flex items-center gap-x-4">
        <button class="text-sm flex items-center gap-x-2 text-green-500" @click="checkAll">
          <font-awesome-icon icon="check" class="fa-sm" />
          Check All
        </button>

        <button class="text-sm flex items-center gap-x-2 text-red-500" @click="removeAll">
          <font-awesome-icon icon="trash" class="fa-sm" />
          Remove All
        </button>
      </div>
    </div>

    <div class="flex gap-x-4 p-8">
      <input
        ref="input"
        class="grow border border-gray-300 outline-none rounded-lg px-4 py-2 focus:border-blue-500 duration-150 w-0"
        placeholder="New Task..."
        v-model="newItemTitle"
        @keyup.enter="add"
      />

      <button class="bg-blue-500 text-white px-4 rounded-lg flex items-center gap-x-2 hover:bg-blue-600 duration-150" @click="add">
        <font-awesome-icon icon="plus" />
      </button>
    </div>

    <div class="px-6 pb-8">
      <div v-if="items && items.length" class="flex flex-col gap-y-2 max-h-[317px] overflow-y-auto custom-scrollbar px-2">
        <item v-for="(item, index) in items" :key="item.id" v-model="items[index]" @remove="remove" />
      </div>

      <div v-else class="text-center text-gray-400">Your Task List is Empty!</div>
    </div>
  </div>
</template>

<script>
import Item from "./item.vue";

export default {
  name: "To Do List",
  components: {
    Item
  },
  data() {
    return {
      newItemTitle: null,
      items: []
    };
  },
  computed: {
    remainingItemsCount() {
      return this.items?.filter((item) => !item.done)?.length;
    }
  },
  mounted() {
    this.$refs.input.focus();
    this.initSomeItems();
  },
  methods: {
    getRandomId() {
      return String(Math.floor(Math.random() * 99999999));
    },
    initSomeItems() {
      this.items = [
        {
          id: this.getRandomId(),
          title: "Learn JavaScript",
          done: false
        },
        {
          id: this.getRandomId(),
          title: "Upload Video on YouTube",
          done: false
        },
        {
          id: this.getRandomId(),
          title: "Monitor Staging Server",
          done: false
        }
      ];
    },
    add() {
      if (!this.newItemTitle) return;

      this.items.push({
        id: this.getRandomId(),
        title: this.newItemTitle,
        done: false
      });

      this.newItemTitle = null;
    },
    remove(id) {
      this.items = this.items.filter((item) => item.id !== id);
    },
    checkAll() {
      this.items.map((item) => {
        item.done = true;
        return item;
      });
    },
    removeAll() {
      this.items.splice(0, this.items.length);
    }
  }
};
</script>
