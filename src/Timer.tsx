import { useEffect, useState } from "react";

/**
 * This timer component displays a countdown timer. At this point, the
 * timer does not yet do anything.
 */
export default function Timer() {
    const { minutes, seconds } = useTimer();

    const timeString = `${leftPad(minutes)}:${leftPad(seconds)}`;

    return (
        <div>
            <section>
                <time>{timeString}</time>
            </section>
        </div>
    );
}


/**
 * A custom React hook that implements the timing logic and returns
 * the current minutes and seconds left in the countdown.
 */
function useTimer() {
    const [timeLeft, setTimeLeft] = useState(15 * 60);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(time => Math.max(time - 1, 0));
        }, 1_000);

        return () => clearInterval(intervalId);
    }, []);

    return {
        minutes: Math.floor(timeLeft / 60),
        seconds: timeLeft % 60
    };
}


/**
 * Adds leading characters to the given number to make it the desired length.
 * See the famous left pad incident: https://en.wikipedia.org/wiki/Npm_left-pad_incident
 */
function leftPad(num: number, size: number = 2, char: string = '0') {
    return String(num).padStart(size, char);
}
