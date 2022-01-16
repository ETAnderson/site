import Image from 'next';

type BodyProps = {
    display: any,
}

function Body({ display }: BodyProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="rounded-full w-1/3 h-1/3 mb-10 object-contain" 
                src={display.image} alt="" />
           <p className="text-white mx-10">{display.text}</p>
        </div>
    )
}

export

default Body
