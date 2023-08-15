export default function SectionText(props) {
    const { text, style } = props;

    return (
        <p className={`${style}`}>
            {text}
        </p>
    )
}