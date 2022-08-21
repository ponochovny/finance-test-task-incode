import { io } from 'socket.io-client'
import { setTickers } from '../store/reducers/tickersSlice'

const setupSocket = (dispatch) => {
	const socket = io('http://localhost:4000')

	socket.on('connect', () => {
		console.log(`You are connected with id: ${socket.id}`)
		socket.emit('start')

		socket.on('ticker', (data) => {
			dispatch(setTickers(data))
		})
	})
}

export const disconnectSocket = () => {
	const socket = io('http://localhost:4000')
	socket.disconnect()
}

export default setupSocket
