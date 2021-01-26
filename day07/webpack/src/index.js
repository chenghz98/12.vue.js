// src/index.js
import $ from 'jquery'
$(function () {
  $('li:odd').css('background', 'gold')
  $('li:even').css('background', 'pink')
})
import './index.css'
import './index.less'

import Vue from 'vue'
import App from './components/App.vue'

const vm = new Vue({
  el: '#app',
  render: (h) => h(App)
})
