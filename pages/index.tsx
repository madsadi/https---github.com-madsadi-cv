import Head from 'next/head'
import Image from 'next/image'
import Experiences from '../components/Experiences';
import Navbar from '../components/layout/Navbar'
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className='relative bg-developer bg-cover h-[300px] bg-no-repeat bg-center'>
        <div className='absolute h-full w-full backdrop-blur-sm' />
      </section>
      <section className='relative bg-white'>
        <div className={'rounded-full bg-[url(/profile.jpeg)] bg-cover bg-no-repeat shadow-xl h-[200px] w-[200px] absolute -top-[100px] left-[50%] -translate-x-[50%] border-2 border-white'} />
      </section>
      <Experiences />
      <Skills />
    </>
  )
}
