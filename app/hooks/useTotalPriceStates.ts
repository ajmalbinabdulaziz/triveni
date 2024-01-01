import { create } from 'zustand';

interface TotalPriceStatesStore {
    price: number;
    addPrice: (addedPrice: number) => void;
}



const useTotalPriceStates = create<TotalPriceStatesStore>((set) => ({
  price: 0,
  addPrice: (addedPrice: number) => set({price: addedPrice}),
}));


export default useTotalPriceStates;