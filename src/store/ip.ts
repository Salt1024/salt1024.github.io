import { defineStore } from 'pinia'

export const useIpStore = defineStore('ip', {
  state () {
    return {
      code: 0,
      ip: '-',
      region: '-',
      isp: '-',
    }
  },

  actions: {
    async getInfo () {
      const response = await fetch('https://uapis.cn/api/myip.php')
      const data = await response.json()
      if (data && data.code === 200) {
        this.$patch(data)
      }
    }
  }
})