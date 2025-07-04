import {create} from 'zustand';

export const useFormulaStore = create((set) => ({
    input: '',
    setInput: (val) => set({input: val}),
    tags: [],
    addTag: (tag) => set((state) => ({tags: [...state.tags, tag], input: ''})),
    removeLastTag: () => set((state) => ({tags: state.tags.slice(0, -1)})),
}));

