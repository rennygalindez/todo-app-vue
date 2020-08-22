import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

library.add([faSquare, faCheckSquare]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
