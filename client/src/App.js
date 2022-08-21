import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setupSocket, { disconnectSocket } from './sockets'
import dayjs from 'dayjs'

function App() {
	const tickers = useSelector((state) => state.tickers.tickers)
	const dispatch = useDispatch()

	useEffect(() => {
		setupSocket(dispatch)

		return () => {
			disconnectSocket()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div className='App'>
			<div className='container mt-4 d-flex flex-wrap  justify-content-between'>
				{tickers.map((el) => (
					<div className='card mb-3 w-100' key={Math.random()}>
						<div className='card-body d-flex flex-row'>
							<span
								style={{ width: '55px' }}
								className='badge text-bg-primary me-2'
							>
								{el.ticker}
							</span>
							<div className='d-flex flex-row'>
								<p className='m-0 card-text me-4'>{el.exchange}</p>
								<p
									style={{ width: '100px' }}
									className='m-0 card-text me-2 fw-bold'
								>
									{el.change}
								</p>
								<p
									style={{ width: '100px' }}
									className='m-0 card-text my-0 me-2'
								>
									Price: {el.price}
								</p>
								<p
									style={{ width: '100px' }}
									className='m-0 card-text my-0 me-2'
								>
									{el.change_percent}%
								</p>
							</div>
							<small>
								Last trade time:{' '}
								{dayjs(el.last_trade_time).format('YYYY-MM-DD HH:mm')}
							</small>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default App
