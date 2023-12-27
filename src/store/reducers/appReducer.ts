import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../../interfaces'

export const initialData: AppState = {
    filter: null,
    screen: 'list',
    transports: [],
    driver: null
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialData,
  reducers: {
    setFilter: (state: AppState, action) => {
        state.filter = action.payload
    },
    setScreen: (state: AppState, action) => {
        state.screen = action.payload
    },
    setTransports: (state: AppState, action) => {
        state.transports = action.payload
    },
    setDriver: (state: AppState, action) => {
        state.driver = action.payload
    },
  },
})

export const {
    setFilter,
    setScreen,
    setTransports,
    setDriver
} = appSlice.actions

export default appSlice.reducer