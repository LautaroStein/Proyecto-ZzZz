import React from 'react'
import Graph from '../RealTimeGraph/Graph'
const Dashboard = () => {
    return (
        <section className='main-dashboard'>
            <article className="dashboard-container">
                <div className='dashboard-resume'>
                    <div className='card-revenue'>
                        <i className="fas fa-chart-line"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>Revenue</h2>
                            <h2 className='card-amount'>ETH 849245</h2>
                        </div>
                    </div>
                    <div className='card-total-users'>
                        <i className="fas fa-users"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>Users</h2>
                            <h2 className='card-amount'>105</h2>
                        </div>
                    </div>
                    <div className='card-total-sales'>
                        <i className="fas fa-sort-amount-up-alt"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>NFT Sales</h2>
                            <h2 className='card-amount'>36</h2>
                        </div>
                    </div>
                </div>
                <Graph />

            </article>
            <article className="dashboard-container">
                <div className='dashboard-resume'>
                    <div className='card-revenue'>
                        <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>Revenue</h2>
                            <h2 className='card-amount'>ETH 849245</h2>
                        </div>
                    </div>
                    <div className='card-total-users'>
                        <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>Users</h2>
                            <h2 className='card-amount'>105</h2>
                        </div>
                    </div>
                    <div className='card-total-sales'>
                        <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                        <div className='card-description'>
                            <h2 className='card-title'>Sales</h2>
                            <h2 className='card-amount'>36</h2>
                        </div>
                    </div>
                </div>
                <Graph />
            </article>
        </section >
    )
}

export default Dashboard
