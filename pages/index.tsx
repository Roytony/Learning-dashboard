import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/Main'
import SideBar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="relative  flex min-h-screen flex-col">
      <Head>
        <title>Learning-Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Rectangle Box */}
      <img
        src="/Rectangle.png"
        className="absolute -z-10"
        width={1200}
        height={1200}
      />

      <main className="flex h-screen  w-full py-10 px-20">
        <SideBar />
        <Main />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
