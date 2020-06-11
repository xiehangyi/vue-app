<template>
  <div id="app">
    <div class="app-head"></div>
    <div class="app-body">
      <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="defaultActive"
        unique-opened>
        <el-menu-item index="/login" @click="handleTo('/login')">
          <i class="el-icon-menu"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/home" name="home" @click="handleTo('/home')">home</el-menu-item>
            <el-menu-item index="/imgs" name="imgs" @click="handleTo('/imgs')">imgs</el-menu-item>
            <el-menu-item index="/typescript" name="typescript" @click="handleTo('/typescript')">typescript</el-menu-item>
            <el-menu-item index="/live" name="live" @click="handleTo('/live')">live</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <transition name="slide-left">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {}
  },
  created () {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleTo (path) {
      this.$router.push({ path })
    }
  },
  computed: {
    ...mapState({
      defaultActive: state => state.home.defaultActive
    })
  }
}
</script>

<style lang="less">
html, body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  .app-head{
    width: 100%;
    height: 50px;
    background: #444;
  }
  .app-body {
    display: flex;
    flex-direction: row;
    flex: 1;
    .el-menu {
      flex-shrink: 0;
      height: 100%;
    }
  }
}
</style>
