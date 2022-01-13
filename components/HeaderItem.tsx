type HeaderProps = {
    title: string,
    Icon: any,
}

function HeaderItem({title, Icon}: HeaderProps ) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Icon className='h-8 mb-1 group-hover:animate-bounce '/>
            <text className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</text>
        </div>
    )
}

export default HeaderItem
