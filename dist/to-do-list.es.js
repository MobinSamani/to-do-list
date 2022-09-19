import { resolveComponent as p, openBlock as m, createElementBlock as a, createElementVNode as o, createVNode as c, normalizeClass as h, withDirectives as _, vModelText as v, toDisplayString as x, withKeys as w, Fragment as k, renderList as I, createBlock as T, createTextVNode as b } from "vue";
const V = {
  props: ["modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(t) {
        this.$emit("update:modelValue", t);
      }
    }
  }
}, g = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [u, n] of e)
    r[u] = n;
  return r;
}, A = {
  name: "To Do List Item",
  mixins: [V],
  methods: {
    toggleDone() {
      this.model.done = !this.model.done;
    },
    remove() {
      this.$emit("remove", this.model.id);
    }
  }
}, C = { class: "bg-gray-100 rounded-lg px-6 py-3 flex items-center gap-x-4" };
function D(t, e, r, u, n, s) {
  const i = p("font-awesome-icon");
  return m(), a("div", C, [
    o("button", {
      onClick: e[0] || (e[0] = (...d) => s.toggleDone && s.toggleDone(...d))
    }, [
      c(i, {
        icon: "circle-check",
        class: h(["fa-lg duration-150", t.model.done ? "text-green-500" : "text-gray-400"])
      }, null, 8, ["class"])
    ]),
    _(o("input", {
      class: h(["grow outline-none bg-transparent border-b border-transparent focus:border-gray-300 duration-150 py-1 w-0", { "line-through text-gray-400": t.model.done }]),
      "onUpdate:modelValue": e[1] || (e[1] = (d) => t.model.title = d)
    }, null, 2), [
      [v, t.model.title]
    ]),
    o("button", {
      onClick: e[2] || (e[2] = (...d) => s.remove && s.remove(...d))
    }, [
      c(i, {
        icon: "trash",
        class: "fa-lg text-red-300 hover:text-red-500 duration-150"
      })
    ])
  ]);
}
const S = /* @__PURE__ */ g(A, [["render", D]]), R = {
  name: "To Do List",
  components: {
    Item: S
  },
  data() {
    return {
      newItemTitle: null,
      items: []
    };
  },
  computed: {
    remainingItemsCount() {
      var t, e;
      return (e = (t = this.items) == null ? void 0 : t.filter((r) => !r.done)) == null ? void 0 : e.length;
    }
  },
  mounted() {
    this.$refs.input.focus(), this.initSomeItems();
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
          done: !1
        },
        {
          id: this.getRandomId(),
          title: "Upload Video on YouTube",
          done: !1
        },
        {
          id: this.getRandomId(),
          title: "Monitor Staging Server",
          done: !1
        }
      ];
    },
    add() {
      !this.newItemTitle || (this.items.push({
        id: this.getRandomId(),
        title: this.newItemTitle,
        done: !1
      }), this.newItemTitle = null);
    },
    remove(t) {
      this.items = this.items.filter((e) => e.id !== t);
    },
    checkAll() {
      this.items.map((t) => (t.done = !0, t));
    },
    removeAll() {
      this.items.splice(0, this.items.length);
    }
  }
}, L = { class: "p-8 border-b border-gray-300 flex flex-col gap-y-4 sm:flex-row items-center justify-between" }, M = { class: "flex items-center gap-x-2" }, U = /* @__PURE__ */ o("div", { class: "text-2xl font-bold" }, "Tasks", -1), N = { class: "text-xl text-gray-400" }, j = { class: "flex items-center gap-x-4" }, B = /* @__PURE__ */ b(" Check All "), E = /* @__PURE__ */ b(" Remove All "), $ = { class: "flex gap-x-4 p-8" }, K = { class: "px-6 pb-8" }, Y = {
  key: 0,
  class: "flex flex-col gap-y-2 max-h-[317px] overflow-y-auto custom-scrollbar px-2"
}, z = {
  key: 1,
  class: "text-center text-gray-400"
};
function F(t, e, r, u, n, s) {
  const i = p("font-awesome-icon"), d = p("item");
  return m(), a("div", null, [
    o("div", L, [
      o("div", M, [
        U,
        o("div", N, "(" + x(s.remainingItemsCount) + "/" + x(n.items.length) + ")", 1)
      ]),
      o("div", j, [
        o("button", {
          class: "text-sm flex items-center gap-x-2 text-green-500",
          onClick: e[0] || (e[0] = (...l) => s.checkAll && s.checkAll(...l))
        }, [
          c(i, {
            icon: "check",
            class: "fa-sm"
          }),
          B
        ]),
        o("button", {
          class: "text-sm flex items-center gap-x-2 text-red-500",
          onClick: e[1] || (e[1] = (...l) => s.removeAll && s.removeAll(...l))
        }, [
          c(i, {
            icon: "trash",
            class: "fa-sm"
          }),
          E
        ])
      ])
    ]),
    o("div", $, [
      _(o("input", {
        ref: "input",
        class: "grow border border-gray-300 outline-none rounded-lg px-4 py-2 focus:border-blue-500 duration-150 w-0",
        placeholder: "New Task...",
        "onUpdate:modelValue": e[2] || (e[2] = (l) => n.newItemTitle = l),
        onKeyup: e[3] || (e[3] = w((...l) => s.add && s.add(...l), ["enter"]))
      }, null, 544), [
        [v, n.newItemTitle]
      ]),
      o("button", {
        class: "bg-blue-500 text-white px-4 rounded-lg flex items-center gap-x-2 hover:bg-blue-600 duration-150",
        onClick: e[4] || (e[4] = (...l) => s.add && s.add(...l))
      }, [
        c(i, { icon: "plus" })
      ])
    ]),
    o("div", K, [
      n.items && n.items.length ? (m(), a("div", Y, [
        (m(!0), a(k, null, I(n.items, (l, f) => (m(), T(d, {
          key: l.id,
          modelValue: n.items[f],
          "onUpdate:modelValue": (y) => n.items[f] = y,
          onRemove: s.remove
        }, null, 8, ["modelValue", "onUpdate:modelValue", "onRemove"]))), 128))
      ])) : (m(), a("div", z, "Your Task List is Empty!"))
    ])
  ]);
}
const J = /* @__PURE__ */ g(R, [["render", F]]), O = {
  name: "App",
  components: {
    ToDoList: J
  }
}, q = { class: "min-h-screen bg-gray-100 flex items-center justify-center p-8" }, G = { class: "flex flex-col gap-y-8 w-full lg:w-1/2 xl:w-1/3 2xl:w-1/4" }, H = /* @__PURE__ */ o("div", { class: "flex items-center justify-center gap-2 flex-wrap text-center" }, [
  /* @__PURE__ */ o("div", { class: "text-gray-600" }, "A Vue To Do List Application by"),
  /* @__PURE__ */ o("a", {
    class: "font-bold",
    href: "https://MobinSamani.com",
    target: "_blank"
  }, "MobinSamani.com")
], -1), P = { class: "bg-white shadow rounded-lg" };
function Q(t, e, r, u, n, s) {
  const i = p("to-do-list");
  return m(), a("div", q, [
    o("div", G, [
      H,
      o("div", P, [
        c(i)
      ])
    ])
  ]);
}
const X = /* @__PURE__ */ g(O, [["render", Q]]);
export {
  X as default
};
