import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {
    const [clock, setClock] = useState(new Date());
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        intervalRef.current = window.setInterval(() => setClock(new Date()), 1000)
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div>
            <h1>Hello {clock.toLocaleTimeString()}</h1>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop Timer</button>
        </div>
    )
}