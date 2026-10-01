'use client'

import { useEffect, useState } from "react";

const Page = () => {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (running) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 100);
        }

        return () => {
            clearInterval(interval);
        };
    }, [running]);

    const handleLap = () => {
        if (running) {
            setLaps(prev => [...prev, time]);
        }
    };

    const handleReset = () => {
        setRunning(false);
        setTime(0);
        setLaps([]);
    };

    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>

            <div>
                <h2>{time}s</h2>

                <button onClick={() => setRunning(prev => !prev)}>
                    {running ? "Stop" : "Start"}
                </button>

                <button onClick={handleLap}>
                    Lap
                </button>

                <button onClick={handleReset}>
                    Reset
                </button>

                <ul>
                    {laps.map((lap, index) => (
                        <li key={index}>
                            Lap {index + 1}: {lap}s
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Page;