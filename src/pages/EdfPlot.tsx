import axios from "axios";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export function EdfPlot() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/get-edf-file/")
            .then(response => {
                setData(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Plot 
                data={[
                    {
                        x: data.map((item) => item.x),
                        y: data.map((item) => item.y),
                        type: 'scatter',
                        mode: 'lines+markers',
                    },
                ]}
                layout={{ width: 580, height: 300, title: 'EDF Data Plot' }}
            />
        </>
    );
}