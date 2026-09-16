import { useState } from "react";

type CounterDisplayProps = {
    count: number;
}

type IncrementButtonProps = {
    event: () => void;
}

function CounterDisplay({ count }: CounterDisplayProps) {
    return <p>Count: {count}</p>;
}


function IncrementButton({ event }: IncrementButtonProps) {
    return (
        <button onClick={event}>
            Increment
        </button>
    );
}

function Header() {
    return <h2>Frontend Mastery</h2>;
}

export default function RenderingLab() {
    const [count, setCount] = useState<number>(0);
    const incrCount = () => {
        setCount(count + 1);
    }

    return (
        <main>
            <Header />

            <CounterDisplay count={count} />
            <br></br>
            <IncrementButton event={incrCount} />
        </main>
    );
}
