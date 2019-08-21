import '~/assets/js/jquery.js';
import '~/assets/js/uikit.min.js';
import '~/assets/js/custom.js';
import '~/assets/css/uikit.min.css';
import '~/assets/css/main.css';


import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  lazyComponent: true
})
import Layout from '~/layouts/Default.vue';
export default function (Vue, { head, router, isServer }) {
  Vue.component('Layout', Layout)
}

