export default function SectionTitle(props) {
    const { title, className } = props;

    const purpleQuestion = title.split('')
        .map((letter, index) => letter === '?' || letter === '!'
            ? <span key={index} className="purple__question">{letter}</span>
            : <span key={index}>{letter}</span>)
    
    return (
        <h2 className={`section__title ${className}`}>
            {purpleQuestion}
        </h2>
    )
}
