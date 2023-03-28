const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

import { defineConfig } from "@vue/cli-service"
import vue from '@vue/cli-plugin-vuex'
export default defineConfig({
    base:'/deploying-vue-project-example/',
    plugins:[vue()]
  })