import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue';

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
library.add(faPhone);
library.add(faHome);
library.add(faFile);
library.add(faLayerGroup);
library.add(faStickyNote);

app.mount('#app');
