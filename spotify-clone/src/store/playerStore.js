import { create } from "zustand"

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),

  currentMusic: { playlist: null, song: null, songs: [] },
  setCurrentMusic: (currentMusic => set({ currentMusic }))

}))