import Image from 'next/image'
import { AcademicCapIcon, SparklesIcon } from '@heroicons/react/outline'

//TODO: implement flexbox in aside

const SideBar = () => {
  return (
    <aside className="z-10 w-full max-w-[300px] px-5">
      <h1 className="text-2xl font-bold">Learn.io</h1>
      <p className="text-gray-600">Improved Learning</p>

      <div className="my-4 flex items-center space-x-3">
        <Image
          width={50}
          height={50}
          className="rounded-full"
          src="https://i.pravatar.cc/150?img=37"
        />
        <h2 className="text-2xl">Hi, Riya</h2>
      </div>
      <nav className="my-20 cursor-pointer space-y-5 rounded-xl bg-white py-8 px-5  shadow-xl">
        <div className="flex items-center space-x-3">
          <Image src="/icons/Discover.svg" width={30} height={30} />
          <p>Explore</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3">
          <Image src="/icons/Category.svg" width={30} height={30} />
          <p>Dashboard</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3">
          <Image src="/icons/Icon Frame.svg" width={30} height={30} />
          <p>My Settings</p>
        </div>
        <div className="flex cursor-pointer items-center space-x-3">
          <Image src="/icons/Calendar 1.svg" width={30} height={30} />

          <p>Course Calendar</p>
        </div>
      </nav>

      <div className="mt-10 flex space-x-5 rounded-xl bg-white p-4 shadow-xl">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-indigo-600 text-white">
          <SparklesIcon className="h-8" />
        </div>
        <div>
          <h2 className="font-bold">Figma Plus</h2>
          <p className="text-sm text-gray-500">By Figma love</p>
        </div>
      </div>
      {/** rocket girl */}
      <div className=" relative mt-20 w-full rounded-xl bg-[#FDF2FF] p-4 shadow-xl">
        <img src="/Rocket.svg" className="absolute top-0 right-0 -mt-20" />
        <h2 className="text-xl font-bold text-[#503094]">
          Upgrade to
          <br />
          Pro
        </h2>
        <p className="text-sm text-gray-500">
          Get 1 month free
          <br /> on annual
          <br /> subscription
        </p>
        <h4 className="mt-4 text-[#503094]">Upgrade Today</h4>
      </div>
    </aside>
  )
}

export default SideBar
