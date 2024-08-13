<script setup lang="ts">

</script>

<template>
  <div id="home">
    <header>
      <div class="logo">Salt1024's Blog</div>
      <div class="main-menu">
        <div class="menu-item" @click="$router.push({ name: 'Three' })">Three</div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#home {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;

  header {
    position: relative;
    width: 100%;
    height: 60px;
    flex: 0 0 60px;
    background-color: rgba(240, 240, 240, 0.7);
    display: flex;
    align-items: center;
    box-shadow: 0 2px 2px rgba(192, 192, 192, 0.5);
    justify-content: center;

    .logo {
      flex: 0 0 120px;
    }

    .main-menu {
      width: 1200px;
      margin: 0 auto;
      height: 100%;

      .menu-item {
        width: 120px;
        height: 100%;
        line-height: 60px;
        cursor: pointer;
        text-align: center;

        &:hover {
          background-color: rgba(240, 240, 240, 1);
        }
      }
    }

    .right-menu {
      flex: 0 0 120px;
    }
  }

  main {
    width: 100%;
    flex: 1 1 auto;
    padding: 0 20px;
    margin: 40px auto 0 auto;
    max-width: 1200px;
  }
}
</style>
