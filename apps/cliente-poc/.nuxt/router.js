import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4188b6ce = () => interopDefault(import('../pages/acompanhamento-consentimento.vue' /* webpackChunkName: "pages/acompanhamento-consentimento" */))
const _0fdc2ec8 = () => interopDefault(import('../pages/classificacao-cookies.vue' /* webpackChunkName: "pages/classificacao-cookies" */))
const _5f6632db = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _6d6847e1 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _0435dd5a = () => interopDefault(import('../pages/preferencias.vue' /* webpackChunkName: "pages/preferencias" */))
const _17218cbd = () => interopDefault(import('../pages/privacidade.vue' /* webpackChunkName: "pages/privacidade" */))
const _668a5199 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/acompanhamento-consentimento",
    component: _4188b6ce,
    name: "acompanhamento-consentimento"
  }, {
    path: "/classificacao-cookies",
    component: _0fdc2ec8,
    name: "classificacao-cookies"
  }, {
    path: "/dashboard",
    component: _5f6632db,
    name: "dashboard"
  }, {
    path: "/inspire",
    component: _6d6847e1,
    name: "inspire"
  }, {
    path: "/preferencias",
    component: _0435dd5a,
    name: "preferencias"
  }, {
    path: "/privacidade",
    component: _17218cbd,
    name: "privacidade"
  }, {
    path: "/",
    component: _668a5199,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
