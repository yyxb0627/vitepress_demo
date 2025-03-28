import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import vpSearch from './components/vp-search.vue'
import './style/index.scss'
import type { VNode } from 'vue'

/**
 * 使用第三方组件库
 * 
 * @see fighting-design https://github.com/FightingDesign/fighting-design
 */
import FightingDesign from 'fighting-design'
import 'fighting-design/dist/index.css'




export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see 布局插槽 https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
       */
      'nav-bar-content-before': (): VNode => h(vpSearch)
    })
  },
  enhanceApp({ app }) {
    app.use(FightingDesign)
  }
  
}

