import {create} from 'zustand';

export const useFormulaStore = create((set) => ({
    input: '',
    setInput: (val) => set({ input: val }),
    tokens: [],
    addToken: (token) => set((state) => ({ tokens: [...state.tokens, token], input: '' })),
}));

