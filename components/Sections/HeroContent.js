import { PlayButton } from "@/components/index";

export default function HeroContent({ bgImage, title, contentClass, titleClass }) {
    return (
        <section
            className={`hero ${bgImage}`}
        >
            <div className={`hero__content ${contentClass}`}>
                <h1 className={titleClass}>
                    {title.toUpperCase()}
                </h1>
                <div className="hero__play">
                    <PlayButton
                        white=''
                        className=''
                    />
                    <span className="main__text-5">Discover for a 30 seconds</span>
                </div>
            </div>

        </section>
    )
}