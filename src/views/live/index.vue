<template>
  <div class="module-container">
    <el-button type="primary" @click="handleSwitch" size="small">换装</el-button>
  </div>
</template>
<script>
/* eslint-disable */
import '@/components/live2d/autoload.js'
import { getRandModalId } from '@/api/live.js'
export default {
  data () {
    return {
      apiPath: "https://live2d.fghrsh.net/api",
      modelId: 1,
      modelTexturesId: 53
    }
  },
  created () {
    console.log(document)
  },
  methods: {
    async handleSwitch () {
      let modelId = this.modelId
      let modelTexturesId = this.modelTexturesId

      let res = await getRandModalId(modelId, modelTexturesId)

      let id = res.textures.id
      this.modelTexturesId = id
      loadlive2d("live2d", `${this.apiPath}/get/?id=${modelId}-${id}`, null);
    }
  }
}
</script>
<style lang="less" scoped>

</style>
