import { useState, useEffect } from 'react';

/**
 * This timer component displays a countdown timer. The timer starts
 * at 15 minutes and counts down to 0.
 */
export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) {
            return; // the timer is not running, do nothing
        }

        const intervalId = setInterval(() => {
            setTimeLeft(time => Math.max(time - 1, 0));
        }, 1_000);

        // return cleanup function to remove the interval
        return () => clearInterval(intervalId);
    }, [running]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const timeString = `${leftPad(minutes)}:${leftPad(seconds)}`;

    return (
        <div>
            <section>
                <time>{timeString}</time>
            </section>
            <section>
                <button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button>
            </section>
        </div>
    );
}


/**
 * Adds leading characters to the given number to make it the desired length.
 */
function leftPad(num: number, size: number = 2, char: string = '0') {
    return String(num).padStart(size, char);
}
