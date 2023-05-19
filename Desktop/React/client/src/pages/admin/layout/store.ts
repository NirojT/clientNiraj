import { create } from 'zustand';

export const adminLayoutStore = create((set, get) => ({
    activeUrl: '',
    setActiveUrl: (url: string) => set({ activeUrl: url }),
}))