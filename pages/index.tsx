import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/layout/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <section className='relative bg-developer bg-cover h-[500px] bg-no-repeat bg-center'>
        <div className='absolute h-full w-full  backdrop-blur-sm' />
      </section>
      <section className='relative h-[500px] bg-white hi'>
        <div className={'rounded-full bg-[url(/profile.jpeg)] bg-cover bg-no-repeat overflow-hidden h-[200px] w-[200px] absolute -top-[100px] left-[50%] -translate-x-[50%] border-2 border-white'} />
      </section>
    </>
  )
}
