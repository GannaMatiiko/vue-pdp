import { createApp } from 'vue';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faFile } from "@fortawesome/free-solid-svg-icons";
// import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
// import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import App from './App.vue';

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
// app.component("font-awesome-icon", FontAwesomeIcon);
// library.add(faPhone);
// library.add(faHome);
// library.add(faFile);
// library.add(faLayerGroup);
// library.add(faStickyNote);

app.mount('#app');
