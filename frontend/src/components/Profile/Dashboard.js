import React, { useState, useEffect, useRef } from 'react'
import Graph from '../RealTimeGraph/Graph'
import { formatData } from "../../utils/formData";
const Dashboard = () => {

    const [currencies, setcurrencies] = useState([]);
    const [pair, setpair] = useState("");
    const [price, setprice] = useState("0.00");
    const [pastData, setpastData] = useState({});
    const ws = useRef(null);
    let first = useRef(false);
    const url = "https://api.pro.coinbase.com";

    useEffect(() => {
        ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");

        let pairs = [];

        const apiCall = async () => {
            await fetch(url + "/products")
                .then((res) => res.json())
                .then((data) => (pairs = data));

            let filtered = pairs.filter((pair) => {
                if (pair.quote_currency === "USD") {
                    return pair;
                }
            });

            filtered = filtered.sort((a, b) => {
                if (a.base_currency < b.base_currency) {
                    return -1;
                }
                if (a.base_currency > b.base_currency) {
                    return 1;
                }
                return 0;
            });


            setcurrencies(filtered);

            first.current = true;
        };

        apiCall();
    }, []);

    useEffect(() => {
        if (!first.current) {

            return;
        }
        let msg = {
            type: "subscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let jsonMsg = JSON.stringify(msg);
        ws.current.send(jsonMsg);

        let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
        const fetchHistoricalData = async () => {
            let dataArr = [];
            const data = []
            const dates = []
            await fetch(historicalDataURL)
                .then((res) => res.json())
                .then((data) => (dataArr = data));
            let formattedData = formatData(dataArr);
            console.log(formattedData);
            formattedData.labels.map(element => {
                dates.push(element)
            })
            formattedData.datasets[0].data.map((element, i) => {
                const obj = {
                    date: dates[i],
                    value: element
                }
                data.push(obj)
            })

            setpastData(data);
        };

        fetchHistoricalData();

        ws.current.onmessage = (e) => {
            let data = JSON.parse(e.data);
            if (data.type !== "ticker") {
                return;
            }

            if (data.product_id === pair) {
                setprice(data.price);
            }
        };
    }, [pair]);

    const handleSelect = (e) => {
        let unsubMsg = {
            type: "unsubscribe",
            product_ids: [pair],
            channels: ["ticker"]
        };
        let unsub = JSON.stringify(unsubMsg);

        ws.current.send(unsub);

        setpair(e.target.value);
    };

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
                <select name="currency" value={pair} onChange={handleSelect}>
                    {currencies.map((cur, idx) => {
                        return (
                            <option key={idx} value={cur.id}>
                                {cur.display_name}
                            </option>
                        );
                    })}
                </select>

                {pastData && <Graph data={pastData} />}

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
                <select name="currency" value={pair} onChange={handleSelect}>
                    {currencies.map((cur, idx) => {
                        return (
                            <option key={idx} value={cur.id}>
                                {cur.display_name}
                            </option>
                        );
                    })}
                </select>
                {console.log(pastData)}
                {/* <Graph data={{ value: price, date: pastData }} /> */}
            </article>
        </section >
    )
}

export default Dashboard
