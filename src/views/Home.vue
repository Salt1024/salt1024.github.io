<script setup lang="ts">

</script>

<template>
  <div id="home">
    <header>
      Salt1024's Blog
    </header>
    <main>
      <div class="article-list">
        <div class="article-item">
          <div class="article-cover"></div>
          <div class="article-info">
            <div class="article-title">施工中</div>
            <div class="article-description">施工中</div>
            <div class="update-time">2024-04-23 23:59:59</div>
          </div>
        </div>
      </div>
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
    background-color: rgba(200, 200, 200, 0.8);
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  main {
    width: 100%;
    flex: 1 1 auto;
    height: 300px;
    padding: 0 20px;
  }

  .article-list {
    position: relative;
    margin: 40px auto 0 auto;
    max-width: 1200px;
  }

  .article-item {
    position: relative;
    width: 100%;
    height: 160px;
    background-color: rgba(240, 240, 240, 1);
    border-radius: 9px;
    padding: 20px 40px;
    display: flex;
    cursor: pointer;

    .article-cover {
      width: 100px;
      height: 100px;
      flex: 0 0 100px;
      border-radius: 9px;
    }

    .article-info {
      margin-left: 20px;
      display: flex;
      flex-direction: column;

      .article-title {
        font-size: 24px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        flex: 0 0 40px;
      }

      .article-description {
        font-size: 16px;
        color: #333333;
        height: 40px;
        flex: 1 1 40px;
      }

      .update-time {
        font-size: 16px;
        color: #333333;
        height: 24px;
        line-height: 24px;
        flex: 0 0 24px;
      }
    }
  }
}
</style>
