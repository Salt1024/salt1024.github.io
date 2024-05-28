import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
	state: () => ({
		accessToken: '',
		refreshToken: '',
	}),

	getters: {},
	actions: {},
})
