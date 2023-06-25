import Image from "./Image";

// In this example, React will call `Gallery()` and `Image()` several times.
export default function Gallery() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    )
}