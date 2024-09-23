import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const id = ref(1)

  // 设置函数改变id值
  function changeid(e) {
    this.id = ref(e)
  }

  return { id, changeid }


},
  {
    persist: {
      storage: sessionStorage,
      pick: ['someState'],
    }
  })
