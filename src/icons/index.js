import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquare, faCheckSquare, faMinusSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

library.add([faSquare, faCheckSquare, faMinusSquare, faTrashAlt]);

Vue.component('font-awesome-icon', FontAwesomeIcon);
