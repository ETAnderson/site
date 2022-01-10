import HeaderItem from "./HeaderItem"
import {
    UserCircleIcon,
    CollectionIcon,
    BeakerIcon,

} from '@heroicons/react/outline'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
            <h1 className="text-2xl pb-10">ERIC ANDERSON</h1>
            <div className='flex flex-row justify-evenly max-w-2xl'>
                <HeaderItem  Icon={UserCircleIcon} title='Intro' />
                <HeaderItem  Icon={BeakerIcon} title='Skills' />
                <HeaderItem  Icon={CollectionIcon} title='Eric on Github' />
            </div>
        </header>
    )
}

export default Header
