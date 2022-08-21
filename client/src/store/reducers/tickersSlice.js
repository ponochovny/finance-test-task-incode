import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	tickers: [],
}

export const tickersSlice = createSlice({
	name: 'tickers',
	initialState,
	reducers: {
		setTickers: (state, { payload }) => {
			state.tickers = payload
		},
	},
})

export const { setTickers } = tickersSlice.actions

export default tickersSlice.reducer
