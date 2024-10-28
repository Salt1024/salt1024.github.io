<script setup lang="ts">
import { useIpStore } from '@/store/ip.ts'

const ipStore = useIpStore()

ipStore.getInfo()
</script>

<template>
  <div id="home">
    <table class="ip-table">
      <tbody>
      <tr>
        <td>Status</td>
        <td>{{ ipStore.code === 200 ? '✅' : '❌' }}</td>
      </tr>
      <tr>
        <td>IP</td>
        <td>{{ ipStore.ip }}</td>
      </tr>
      <tr>
        <td>Location</td>
        <td>{{ ipStore.region }}</td>
      </tr>
      <tr>
        <td>ISP</td>
        <td>{{ ipStore.isp }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.ip-table {
  border-collapse: collapse;

  td {
    border: 2px solid #cccccc;
    padding: 10px 20px;
  }
}
</style>