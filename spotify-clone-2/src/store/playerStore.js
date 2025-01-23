import { create } from "zustand";

export const usePlayerStore = create((set)=>({
  playing: false,
  currentMusic: { playlist: null, song: null, songs:[] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setPlaying: (playing) => set({ playing }),
  setCurrentMusic: (currentMusic) => set({ currentMusic })
}))