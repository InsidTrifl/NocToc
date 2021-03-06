import Image from 'next/image'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Avatar from './Avatar'
import BasicMenu from './BasicMenu'
import toast, { Toaster } from 'react-hot-toast'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const toastStyle = {
    background: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '15px',
    borderRadius: '9999px',
    maxWidth: '1000px'
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`${isScrolled && 'bg-[#141414]'
        } transition duration-500 ease-in`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Image
          src="/logo.svg"
          width={120}
          height={120}
          className="cursor-pointer object-contain"
          onClick={() => scrollTop()}
        />

        <BasicMenu />

        <Toaster position='bottom-center' />

        <ul className="hidden space-x-4 md:flex"  >
          <li className="headerLink link-underline link-underline-black" onClick={() => scrollTop()}>
            Home
          </li>
          <li className="headerLink link-underline link-underline-black" onClick={() => toast('Functionality Under Construction', { duration: 4000, style: toastStyle })}>
            TV Shows
          </li>
          <li className="headerLink link-underline link-underline-black" onClick={() => toast('Functionality Under Construction', { duration: 4000, style: toastStyle })}>
            Movies
          </li>
          <li className="headerLink link-underline link-underline-black" onClick={() => toast('Functionality Under Construction', { duration: 4000, style: toastStyle })}>
            New & Popular
          </li>
          <li className="headerLink link-underline link-underline-black" onClick={() => toast('Functionality Under Construction', { duration: 4000, style: toastStyle })}>
            My List
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline cursor-progress">Kids</p>
        <BellIcon className="h-6 w-6 cursor-pointer" />
        {/* <Link href="/account"> */}
        <div className=" h-12 w-12 relative right-0 mr-6 lg:mr-8 border-[#ec8200] border-2 rounded-full">
          <Avatar logoutOnPress />
        </div>
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
