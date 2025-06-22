import Image from "next/image";


interface ImageTextCardProps {
    title?: string;
    text: string;
    imageUrl: string; // Optional image URL
    backcolor?: string; // Optional background color
    link?: string; // Optional link for the button
    buttonText?: string; // Optional button text
    cardTitle?: string; // Optional title for the card
    action?: () => void; // Optional action function for the button
}

function ImageTextCard({ title, text, imageUrl, backcolor = "bg-backsection", buttonText, link="", cardTitle, action }: ImageTextCardProps) {
    //Simple svg image with text two text below it.
    return (
        <div className={`${backcolor} mx-auto w-full md:w-1/2 py-20 h-full min-h-[500px] cardWidth flex flex-col justify-between rounded-lg shadow-lg`}>
            <div className="flex flex-col items-center flex-1 justify-between h-full">
            {cardTitle && (
                <p className="text-3xl md:text-5xl tracking-[0.1em] text-black text-center" style={{ fontFamily: "vidaloka" }}>
                    {cardTitle}
                </p>
            )}
                <Image
                    src={imageUrl}
                    alt={title || "Image"}
                    width={120}
                    height={150}
                    style={{ width: '200px', height: '300px', objectFit: 'contain' }}
                />
                <div className="flex flex-col justify-end flex-1 w-full">
                    {title && (<p className="text-5xl my-4 tracking-[0.1em] text-center" style={{ fontFamily: "vidaloka" }}>
                        {title}
                    </p>)}
                    <p className=" text-lg md:text-3xl text-center text-gray-600 px-4">
                        {text}
                    </p>
                    {buttonText && link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block md:w-[318px] md:h-[57px] bg-[#891d35] text-white px-6 py-2 md:pt-2 md:mx-auto rounded-full font-semibold tracking-wide hover:bg-[#6d182a] transition w-7/12 mx-auto"
                        >
                            {buttonText}
                        </a>
                        )}

                          {buttonText && action && (
                        <button
                            onClick={action}
                            rel="noopener noreferrer"
                            className="mt-6 inline-block md:w-[318px] md:h-[57px] bg-[#891d35] text-white px-6 py-2 md:pt-2 md:mx-auto rounded-full font-semibold tracking-wide hover:bg-[#6d182a] transition w-7/12 mx-auto"
                        >
                            {buttonText}
                        </button>
                        )}

                </div>
            </div>
        </div>
    );
}

export default ImageTextCard;