import { BellIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const Widgets = () => {
  return (
    <div className="h-screen w-full max-w-[450px]">
      <div className="flex space-x-5">
        <UserIcon className="h-6" />
        <BellIcon className="h-6" />
      </div>
      {/** search__bar */}
      <div className="flex items-center space-x-4 py-10 ">
        <div className="flex space-x-4 rounded-xl bg-[#ECF1FC] px-10 py-4">
          <SearchIcon className="h-6 text-gray-400" />
          <input
            className="bg-[#ECF1FC] focus:outline-none"
            type="text"
            placeholder="Searh for a Course"
          />
        </div>
        <button className="rounded-xl bg-black px-8 py-2 text-white">Go</button>
      </div>
      <div className="flex space-x-8 py-4">
        <p className="cursor-pointer text-lg">New Course</p>
        <p className="cursor-pointer text-lg text-gray-400">Library</p>
        <p className="cursor-pointer text-lg text-gray-400">Categories</p>
      </div>

      <div className="flex space-x-5 py-4">
        <div className="relative inline-block w-64">
          <select className="focus:shadow-outline block w-full appearance-none rounded  border-gray-400 bg-[#ECF1FC] px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>Price</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="relative inline-block w-64">
          <select className="focus:shadow-outline block w-full appearance-none rounded  border-gray-400 bg-[#ECF1FC] px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>Duration</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-10 flex space-x-4  rounded-xl bg-[#E9FFF7] px-4 py-6">
        <div className="rounded-xl bg-white p-3 ">
          <Image src="/Other 05.png" width={80} height={80} />
        </div>
        <div>
          <div className="flex space-x-5 text-sm text-gray-500">
            <p>42 Hours</p>
            <p>$200.00</p>
          </div>
          <h2 className="text-xl font-bold">Master Web Developement</h2>
          <p className="text-gray-500">Learn Figma in 30 days</p>
          <p className="text-sm text-green-500">Enroll Today!</p>
        </div>
      </div>

      <div className="mt-8 flex space-x-8">
        <div className="grid place-items-center  rounded-xl bg-[#F1F9FF] p-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-[#D56C2B]">19</h1>
            <p className="text-sm text-gray-400">New Courses</p>
          </div>
        </div>
        <div className="grid place-items-center  rounded-xl bg-[#F1F9FF] p-4">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-[#10192D]">14</h1>
            <p className="text-sm text-gray-400">New Tutors</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex space-x-4  rounded-xl bg-[#E9FFF7] px-4 py-6">
        <div className="rounded-xl bg-white p-3 ">
          <Image src="/Other 04.svg" width={80} height={80} />
        </div>
        <div>
          <div className="flex space-x-5 text-sm text-gray-500">
            <p>42 Hours</p>
            <p>$200.00</p>
          </div>
          <h2 className="text-xl font-bold">Master Web Developement</h2>
          <p className="text-gray-500">Learn Figma in 30 days</p>
          <p className="text-sm text-green-500">Enroll Today!</p>
        </div>
      </div>
    </div>
  )
}

export default Widgets
