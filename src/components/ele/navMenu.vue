<template>
  <div>
    <div class="slider">
      <el-menu mode="vertical"
             default-active="/home"
             :collapse="true"
             background-color="#304156"
             text-color="#fff"
             active-text-color="#409EFF">
        <sidebar-item :routes="routers"></sidebar-item>
      </el-menu>
      <br>
      
      <el-menu
      default-active="1"
      mode="vertical"
      :collapse="true"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1" class="23">
        <template slot="title">
          
           <i class="el-icon-location"></i>导航一
         <span>导航一</span>
        </template>
        <router-link to="">
          <el-menu-item index="1-1">选项1</el-menu-item>
        </router-link>
        <el-menu-item index="1-2">选项2</el-menu-item>     
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>

      <router-link to="">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>导航二</span>
        </el-menu-item>
      </router-link>

      <router-link to="">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span>导航三</span>
        </el-menu-item>
      </router-link>

      <!-- <router-link to=""> -->
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>dfdsf
          <!-- <span>导航四</span> -->
        </el-menu-item>
      <!-- </router-link> -->
    </el-menu>
    
    </div>
  </div>
</template>

<script>
import sidebarItem from './sidebarItem'
export default {
  components:{
    sidebarItem
  },
  data(){
    return{
      routers:[
        {
          name: 'home',
          path: '/home',
          hidden: false,
          meta:{
            icon: 'location',
            title: '首页'
          }
        },
        {
          name: 'fruit',
          path: '/fruit',
          hidden: false,
          meta:{
            icon: 'location',
            title: '水果'
          },
          children:[
            {
              name: 'pitaya',
              path: '/fruit/pitaya',
              hidden: false,
              meta:{
                icon: 'location',
                title: '火龙果'
              },
              children:[
                {
                  name: 'pitaya_red',
                  path: '/fruit/pitaya/red',
                  hidden: false,
                  meta:{
                    icon: 'location',
                    title: '红心火龙果'
                  }
                },
                {
                  name: 'pitaya_white',
                  path: '/fruit/pitaya/white',
                  hidden: false,
                  meta:{
                    icon: 'location',
                    title: '白心火龙果'
                  }
                }
              ]
            },
            {
              name: 'banana',
              path: '/fruit/banana',
              hidden: false,
              meta:{
                icon: 'location',
                title: '香蕉'
              }
            },
          ]
        },
        {
          name: 'meat',
          path: '/meat',
          hidden: false,
          meta:{
            icon: 'location',
            title: '肉'
          },
          children:[
            {
              name: 'pig',
              path: '/meat/pig',
              hidden: false,
              meta:{
                icon: 'location',
                title: '猪肉'
              }
            },
            {
              name: 'chicken',
              path: '/meat/chicken',
              hidden: false,
              meta:{
                icon: 'location',
                title: '鸡肉'
              }
            }
          ]
        },
      ]
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  .slider{
    width: 200px;
    height: 100%;
    position: fixed;
    .el-menu{
      width: 100%;
    }
  }
</style>
