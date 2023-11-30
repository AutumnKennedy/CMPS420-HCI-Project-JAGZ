import axios from "axios";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export type PlotData = {
    x: number,
    y: number;
}

interface EdfPlotProps {
    selectedFile: string;
}

export const EdfPlot: React.FC<EdfPlotProps> = ({ selectedFile }) => {
    const [points, setPoints] = useState<PlotData[]>([]);

    const fetchPlotData = async () => {
         const { data } = await axios.get<PlotData[]>(`http://localhost:8000/api/get-edf-file/${selectedFile}`);

        setPoints(data.data);
    };

    useEffect(() => {
        if (!selectedFile) return;

        fetchPlotData();
    }, [selectedFile]);

    return (
        <>
            <Plot 
                data={[
                    {
                        x: points.map((item) => item.x),
                        y: points.map((item) => item.y),
                        type: 'scatter',
                        mode: 'lines+markers',
                    },
                ]}
                layout={{ width: 1600, height: 750, title: 'EDF Data Plot', xaxis: {title: 'Time (sec)'}, yaxis: {title: 'Value: (µ)'} }}
            />
        </>
    );
}