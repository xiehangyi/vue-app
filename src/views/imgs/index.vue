<template>
  <div class="imgs-container module-container">
    <el-button @click="handleAdd" size="small" style="margin-bottom:10px">追加图片</el-button>
    <el-button @click="handleUpset" size="small" style="margin-bottom:10px">打乱图片</el-button>
    <div class="img-group">
      <div class="img-wrap" v-for="src in imgs" :key="src">
        <img ref="imgs" class="img" :src="src" />
      </div>
    </div>
  </div>
</template>
<script>
// 图片加载动画
import { getRects, preload } from '@/utils/imgs.js'
import { randomsort } from '@/utils/utils.js'
export default {
  data () {
    return {
      num: 0,
      imgs: [
        'https://pic4.zhimg.com/v2-a8fb0a1d8581e4bfce905791271711c7_r.jpg',
        'https://pic2.zhimg.com/v2-1008cd2c72129809cc348cdc04310475_r.jpg',
        'https://pic2.zhimg.com/v2-ff15820a9c1cb8e2bb0af1048ea81145_r.jpg',
        'https://pic2.zhimg.com/v2-edc1b118c420939c545b1449344139b5_r.jpg'
      ],
      imgList: [
        'https://pic2.zhimg.com/v2-d94530f491f23c61659ef458ac8a9db5_r.jpg',
        'https://pic4.zhimg.com/v2-525c8002eb619387e7a31f67169f8a2b_r.jpg',
        'https://pic4.zhimg.com/v2-aeadbc3d02af2631e3a7acd0dc72b01b_r.jpg',
        'https://pic3.zhimg.com/v2-a47effc7163387c1ad7ccfc90ec3e91e_r.jpg',
        'https://pic4.zhimg.com/v2-02efe89495be4f68f6b7b6c510da36cf_r.jpg',
        'https://pic3.zhimg.com/v2-1e375cbcad7ae119c34a1357c9e8f182_r.jpg',
        'https://pic3.zhimg.com/v2-89735fee10045d51693f1f74369aaa46_r.jpg',
        'https://pic1.zhimg.com/v2-ca51a8ce18f507b2502c4d495a217fa0_r.jpg',
        'https://pic1.zhimg.com/v2-c90799771ed8469608f326698113e34c_r.jpg',
        'https://pic1.zhimg.com/v2-8d3dd83f3a419964687a028de653f8d8_r.jpg'
      ]
    }
  },
  methods: {
    async handleUpset () {
      const prevImgsDom = this.$refs.imgs.slice()
      const prevPositions = getRects(prevImgsDom)

      const nowImgsDom = prevImgsDom.sort(randomsort)
      let nowImgs = []
      nowImgsDom.map(item => { nowImgs.push(item.currentSrc) })
      this.imgs = nowImgs
      this.$nextTick(() => {
        this.loadAnimate(prevPositions, prevImgsDom)
      })
    },
    async handleAdd () {
      if (this.num > 9) {
        return false
      }
      let appendImgs = []
      appendImgs.push(this.imgList[this.num])
      this.num += 1

      await preload(appendImgs)
      const prevImgs = this.$refs.imgs.slice()
      console.log(prevImgs)
      const prevPositions = getRects(prevImgs)

      this.imgs = appendImgs.concat(this.imgs)
      this.$nextTick(() => {
        this.loadAnimate(prevPositions, prevImgs)
      })
    },
    loadAnimate (prevPositions, prevImgs) {
      const currentPositions = getRects(prevImgs)

      prevImgs.forEach((imgRef, imgIndex) => {
        const currentPosition = currentPositions[imgIndex]
        const prevPosition = prevPositions[imgIndex]

        const invert = {
          left: prevPosition.left - currentPosition.left,
          top: prevPosition.top - currentPosition.top,
        }

        const keyframes = [
          {
            transform: `translate(${invert.left}px, ${invert.top}px)`,
          },
          { transform: "translate(0)" },
        ]

        const options = {
          duration: 300,
          easing: "cubic-bezier(0,0,0.32,1)",
        }

        imgRef.animate(keyframes, options)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.imgs-container {
  .img-group {
    display: flex;
    flex-wrap: wrap;
    column-count: 4;
    .img {
      width: 100px;
      height: 200px;
      margin-right: 10px;
    }
  }
}
</style>
