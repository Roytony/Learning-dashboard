import Image from 'next/image'

const Avatar = ({ src, size }: { src: string; size: number }) => {
  return (
    <div className="grid place-items-center rounded-[18px] border-2 border-gray-300 p-1">
      <Image src={src} width={size} height={size} className=" rounded-[18px]" />
    </div>
  )
}

export default Avatar
