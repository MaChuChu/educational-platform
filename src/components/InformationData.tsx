import Image from "next/image";


interface InformationDataProps {
    className: string;
    heading: string;
    text: string;
    img1: string;
    img2: string;
}


export default function InformationData({ className, heading, text, img1, img2 }: InformationDataProps) {
    return (
        <div className={className}>
            <div className="info-text">
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            <div className="image">
                <Image alt="img" src={img1} width={300} height={300} />
                <Image alt="img" src={img2} width={300} height={300} />
            </div>
        </div>
    );
}
