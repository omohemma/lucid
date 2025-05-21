import {create} from 'zustand';

export const useFormulaStore = create((set) => ({
    input: '',
    setInput: (val) => set({ input: val }),
}));

