type BodyProps = {
    image: string,
    text: string,
}

function Body({ image, text }: BodyProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="rounded-full" 
                src={image} alt="" />
           <p className="text-white mx-10">{text}</p>
        </div>
    )
}

export

default Body
