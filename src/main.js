import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faCircleCheck, faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faCircleCheck, faTrash, faCheck);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
