import { create } from 'zustand'

const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  asyncChange: async () => {
    const value = await Promise.resolve(999)
    set({ bears: value })
  }
}))

export default useStore
