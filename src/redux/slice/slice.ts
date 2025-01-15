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
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
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
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updatePlace, updateIsMobile, updateSearchText } = counterSlice.actions

export default counterSlice.reducer