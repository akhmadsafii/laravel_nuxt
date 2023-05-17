import Vue from 'vue'
import Router from 'vue-router'

import Notes from '~/pages/notes.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Notes
      }
    ]
  })
}
