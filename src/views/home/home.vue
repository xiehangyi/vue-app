<template>
  <div>
    <div>
      <el-button type="primary" size="small">切换</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'APP',
  data () {
    return {
      num: 0,
      types: [
        {key: 'chitose', value: 'chitose'}, {key: 'epsilon2_1', value: 'Epsilon2.1'}, {key: 'gf', value: 'Gantzert_Felixander'},
        {key: 'haru_1', value: 'haru01'}, {key: 'haru_2', value: 'haru02'}, {key: 'haruto', value: 'haruto'}, {key: 'hibiki', value: 'hibiki'}, {key: 'hijiki', value: 'hijiki'},
        {key: 'izumi', value: 'izumi'}, {key: 'koharu', value: 'koharu'}, {key: 'miku', value: 'miku'}, {key: 'nico', value: 'nico'}, {key: 'nietzsche', value: 'nietzsche'},
        {key: 'ni-j', value: 'ni-j'}, {key: 'nipsilon', value: 'nipsilon'}, {key: 'nito', value: 'nito'}, {key: 'shizuku', value: 'shizuku'}, {key: 'tororo', value: 'tororo'},
        {key: 'tsumiki', value: 'tsumiki'}, {key: 'unitychan', value: 'unitychan'}, {key: 'wanko', value: 'wanko'}, {key: 'z16', value: 'z16'}
      ]
    }
  },
  created () {
    this.initWidget()
  },
  methods: {
    // handleChangeWidget () {
    //   let num = this.num++
    //   console.log(num)
    //   let type = this.types[num]
    //   this.initWidget(type)
    // },
    initWidget () {
      // let L2Dwidget = null
      setTimeout(() => {
        window.L2Dwidget.init({
          pluginRootPath: 'static/live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: `live2d-widget-model-z16/assets/`,
          tagMode: false,
          debug: false,
          model: { jsonPath: `../static/live2dw/live2d-widget-model-z16/assets/z16.model.json` },
          display: { position: 'right', width: 300, height: 650 },
          mobile: { show: true },
          dialog: { 
            'enable': true,
            'script': {
              //每20s，显示一言（调用一言Api返回的句子）
              'every idle 2s': '$hitokoto$',
              //触摸到class='star'对象
              'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
              //触摸到身体
              'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
              //触摸到头部
              'tap face': '~~'
            }
          },
          log: false
        })
      }, 1000)

      // setTimeout(() => {
      //   L2Dwidget.alert("我要吃包子~")
      // }, 5000)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
