import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number,
    age: number,
    place: string,
    isMobile: boolean,
    searchText: string,
    isSearch: boolean
}

const initialState: CounterState = {
    value: 0,
    age: 26,
    place: "knr",
    isMobile: false,
    searchText: "",
    isSearch: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.age -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
        updatePlace: (state, action: PayloadAction<string>) => {
            state.place = action.payload
        },
        updateIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload
        },
        updateSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },
        updateIsSearch: (state, action: PayloadAction<boolean>) => {
            state.isSearch = action.payload
        },

    },
})

export const { increment, decrement, incrementByAmount, updatePlace, updateIsMobile, updateSearchText, updateIsSearch } = counterSlice.actions

export default counterSlice.reducer