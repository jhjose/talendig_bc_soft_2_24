import React, {useState, useEffect} from 'react';
import {fetchStockDataPolygon, fetchAlerts} from '../services/api';

const Alerts = () => {
    const [stockData, setStockData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const platform = 'polygon'; // polygon, iexexchange

    useEffect(() => {
        getStockData();
    }, []);

    const getStockData = async () => {
        try {
            let data;

            // Puedes cambiar 'AAPL' para traer la info de Apple
            switch(platform){
                case 'iexexchange':
                data = await fetchAlerts('AAPL'); 
                break;
                case 'polygon':
                data = await fetchStockDataPolygon('AAPL'); 
                break;
            }

            console.log(data)
            setStockData(data);
            setLoading(false);

            
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    if(loading){
        return <p>Loading...</p>;
    }

    if(error){
        return <p>Error: {error}</p>;
    }

    return (
        <div className="alerts-container">
            <h2>Stock Data from Polygom</h2>
            {stockData && (
                <ul>
                    <li><strong>Symbol:</strong> {stockData.ticker}</li>
                    <li>
                        <strong>Date:</strong> {new Date(stockData.results[0].t).toLocaleDateString()}
                    </li>
                    <li>
                        <strong>Open:</strong> {stockData.results[0].o}
                    </li>
                    <li>
                        <strong>High:</strong> {stockData.results[0].h}
                    </li>
                    <li>
                        <strong>Low:</strong> {stockData.results[0].l}
                    </li>
                    <li>
                        <strong>Close:</strong> {stockData.results[0].c}
                    </li>
                </ul>
            )}
        </div>
    )
};

export default Alerts;