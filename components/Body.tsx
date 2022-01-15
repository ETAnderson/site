type BodyProps = {
    display: any,
}

function Body({ display }: BodyProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="rounded-full mb-10" 
                src={display.image} alt="" />
           <p className="text-white mx-10">{display.text}</p>
        </div>
    )
}

export

default Body
