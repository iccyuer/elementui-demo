<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden">

      <router-link v-if="!item.children"
                   :to="item.path + '/' + item.path"
                   :key="item.name">
        <el-menu-item :index="item.path + '/'+ item.path"
                      class='submenu-title-noDropdown'>
          <i v-if="item.meta && item.meta.icon"
             class="el-icon" :class="`el-icon-${item.meta.icon}`"></i>
          <span v-if="item.meta && item.meta.title">
            {{ item.meta.title }}
          </span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name || item.path" :key="item.name">
        <template slot="title">
          <i v-if="item.meta && item.meta.icon" class="el-icon" :class="`el-icon-${item.meta.icon}`"></i>
          <span v-if="item.meta && item.meta.title">{{ item.meta.title }}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item class="nest-menu"
                        v-if="child.children && child.children.length > 0"
                        :routes="[child]"
                        :key="child.path"></sidebar-item>

          <router-link v-else :to="child.path" :key="child.name">
            <el-menu-item :index="child.path">
              <i v-if="child.meta&&child.meta.icon" class="el-icon" :class="`el-icon-${item.children[0].meta.icon}`"></i>
              <span v-if="child.meta && child.meta.title">{{ child.meta.title }}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'sidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-wrapper {
    .el-icon {
      font-size: 16px;
      margin-right: 16px;
    }
  }
</style>

