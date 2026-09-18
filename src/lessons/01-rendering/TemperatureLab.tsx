// reqs: 
// parent: TemperatureLab; children: TemperatureDisplay, Increase Button, Reset Button
import { useState } from "react";

type TemperatureDisplayProps = {
    temp: number;
    gauge: string;
}

type ButtonProps = {
    onChangeTemp: () => void;
    buttonDisplay: string;
}

function TemperatureButton({ onChangeTemp, buttonDisplay }: ButtonProps) {
    return (
        <button onClick={onChangeTemp}>
            {buttonDisplay}
        </button>
    )
}

function TemperatureDisplay({ temp, gauge}: TemperatureDisplayProps) {
    return (
    <>
        <br />
        <p>Temperature: {temp}°F</p>
        <p>{gauge}</p>
        <br />
    </>
    );
}



export default function TemperatureLab() {
    const [temperature, setTemperature] = useState(72);
    const incrTemp = () => {
        setTemperature(t => t + 1);
    }
    const resetTemp = () => {
        setTemperature(72);
    }
    const decrTemp = () => {
        setTemperature(t => t -1);
    }

    const gauge = temperature < 65 
                    ? "Cold"
                    : temperature <= 75 
                        ? "Comfortable"
                        : "Hot";

    return (
        <>
            <h1>Temperature Lab</h1>
            <TemperatureDisplay temp={temperature} gauge={gauge}/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <TemperatureButton onChangeTemp={decrTemp} buttonDisplay="-1°" />
                <TemperatureButton onChangeTemp={incrTemp} buttonDisplay="+1°" />
                <TemperatureButton onChangeTemp={resetTemp} buttonDisplay="Reset" />
            </div>
        </>
    );
}