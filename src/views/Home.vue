<script lang="ts" setup>
import { NDrawer, NIcon } from 'naive-ui'
import { reactive, watch, markRaw } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { routes } from '@/router'
import MenuOutline from '@vicons/ionicons5/MenuOutline'

import type { Component } from 'vue'

type MenuItem = {
  label: string,
  key: string,
  icon: Component
}

type Menu = {
  list: Array<MenuItem>,
  active: string,
  isExpanded: boolean,
}

const route = useRoute()
const router = useRouter()
const menu: Menu = reactive({
  list: [],
  active: '',
  isExpanded: false,
})

menu.active = route.meta.key || route.meta.menuKey

menu.list = routes[0].children.map(routeRaw => {
  return {
    label: routeRaw.meta.label,
    key: routeRaw.name.toString(),
    icon: markRaw(routeRaw.meta.icon),
  }
})

function handleMenuClick (menuItem: MenuItem) {
  menu.active = menuItem.key
  router.push({
    name: menuItem.key,
  })
  menu.isExpanded = false
}

watch(route, (newVal) => {
  if (newVal?.meta?.menuKey) {
    menu.active = newVal.meta.menuKey
  } else if (newVal?.meta?.key) {
    menu.active = newVal.meta.key
  }
})
</script>

<template>
  <header>
    <NIcon
      :component="MenuOutline"
      size="28"
      style="cursor: pointer"
      @click="menu.isExpanded = true"
    />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <!--菜单-->
  <NDrawer v-model:show="menu.isExpanded" placement="left">
    <nav>
      <div class="logo">Salt1024</div>
      <ul class="menu">
        <li
          v-for="item of menu.list"
          :key="item.key"
          :class="{ 'menu-item-active': item.key === menu.active }"
          class="menu-item"
          @click="handleMenuClick(item)"
        >
          <NIcon :component="item.icon" class="menu-item-icon" size="24" />
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </NDrawer>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 12px;
  background: #f5f5f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

main {
  height: calc(100vh - 84px);
  margin-top: 24px;
}

nav {
  .logo {
    font-size: 20px;
    font-weight: bold;
    line-height: 50px;
    height: 50px;
    padding: 0 16px;
  }

  .menu {
    margin: 0;
    padding: 0 12px;

    li.menu-item {
      font-size: 18px;
      display: flex;
      align-items: center;
      padding: 12px 16px;
      list-style: none;
      cursor: pointer;
      user-select: none;

      .menu-item-icon {
        margin-right: 8px;
      }
    }

    li.menu-item-active {
      font-weight: 500;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
