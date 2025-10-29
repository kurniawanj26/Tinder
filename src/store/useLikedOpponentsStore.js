import { create } from 'zustand';

export const useLikedOpponentsStore = create((set, get) => ({
  likedOpponents: [],
  addLikedOpponent: (user) => {
    const exists = get().likedOpponents.some(u => u.id === user.id);
    if (!exists) {
      set(state => ({ likedOpponents: [...state.likedOpponents, user] }));
    }
  },
  clearLikedOpponents: () => set({ likedOpponents: [] }),
}));