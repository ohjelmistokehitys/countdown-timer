/**
 * This timer component displays a countdown timer. At this point, the
 * timer does not yet do anything.
 */
export default function Timer() {

    const minutes = 15;
    const seconds = 0;
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
 * Adds leading characters to the given number to make it the desired length.
 */
function leftPad(num: number, size: number = 2, char: string = '0') {
    return String(num).padStart(size, char);
}
