import { ChevronRightIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Avatar from './Avatar'

const Main = () => {
  const Avatar_Data = [
    { id: 0, src: 'https://i.pravatar.cc/150?img=7' },
    { id: 1, src: 'https://i.pravatar.cc/150?img=49' },
    { id: 2, src: 'https://i.pravatar.cc/150?img=37' },
    {
      id: 3,
      src: 'https://i.pravatar.cc/150?img=68',
    },
    {
      id: 4,
      src: 'https://i.pravatar.cc/150?img=14',
    },
    {
      id: 5,
      src: 'https://i.pravatar.cc/150?img=48',
    },
    {
      id: 6,
      src: 'https://i.pravatar.cc/150?img=59',
    },
    {
      id: 7,
      src: 'https://i.pravatar.cc/150?img=32',
    },
    {
      id: 8,
      src: 'https://i.pravatar.cc/150?img=2',
    },
  ]
  return (
    <div className="flex-1 p-5">
      <div className=" flex space-x-5">
        {Avatar_Data.map((item) => (
          <Avatar size={50} src={item.src} key={item.id} />
        ))}
      </div>
      <div className="mt-20 space-y-2">
        <h1 className="z-10 text-3xl font-bold">Your Personal Learning</h1>
        <p className="text-gray-500">Based on your preferences</p>
      </div>
      <div className="grid grid-cols-5  gap-4">
        <div className="col-span-2 grid h-[500px] grid-rows-2 gap-4 ">
          <div className=" row-span-1 rounded-xl bg-[#FDF2FF] p-5">
            <h2 className="text-3xl text-gray-500">Goal Status</h2>
            <div className="flex justify-between py-5">
              <p>Goals</p>
              <p>80%</p>
            </div>
            <div className="mx-auto h-2 w-[95%] rounded-xl bg-gray-200">
              <div className="h-full w-[80%] rounded-xl bg-[#503094]" />
            </div>
          </div>
          <div className=" row-span-1  flex flex-col justify-between rounded-xl bg-[#ECF9FF] py-4">
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-4">
                <Image src="/crosshairs.svg" width={40} height={40} />
                <p>Goals</p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <ChevronRightIcon className="h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-4">
                <Image src="/calendar.svg" width={40} height={40} />
                <p>Monthly Plans</p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <ChevronRightIcon className="h-6" />
              </div>
            </div>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-4">
                <Image src="/settings.svg" width={40} height={40} />
                <p>Settings</p>
              </div>
              <div className="rounded-lg bg-white p-2">
                <ChevronRightIcon className="h-6" />
              </div>
            </div>
          </div>
        </div>
        <div className=" relative col-span-3 flex max-w-[350px] flex-col  justify-end rounded-lg  bg-[#ECF1FC] p-4  shadow-xl">
          <img src="/Group.svg" className="absolute top-0 right-0 " />
          <div>
            <h2 className="text-2xl font-bold">
              IlluStrator Tips <br />& Trciks
            </h2>
            <p className="text-sm text-gray-700">
              Learn how to create beautiful scenes in illustrator. Tips and
              Tricks with real life projects and case studies.
            </p>
            <h3 className="py-2 text-lg">121 people enrolled so far ! </h3>
            <div className="flex space-x-2">
              <Avatar size={30} src="https://i.pravatar.cc/150?img=48" />
              <Avatar size={30} src="https://i.pravatar.cc/150?img=48" />
              <Avatar size={30} src="https://i.pravatar.cc/150?img=48" />
              <Avatar size={30} src="https://i.pravatar.cc/150?img=48" />
              <Avatar size={30} src="https://i.pravatar.cc/150?img=48" />
              <p className="text-sm text-gray-600">+116 more</p>
            </div>
            <p className="py-2 text-xl">Enroll Today</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
