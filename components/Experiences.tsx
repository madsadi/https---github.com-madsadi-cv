import Image from "next/image";
import Link from "next/link";

var Carousel = require('react-responsive-carousel').Carousel;

export default function Experiences() {

    const Projects = [
        {
            company: 'Rahnama Co.',
            icon: '/icon/niazmandiha.svg',
            description: 'The most comprehensive Iranian requirements. Free ad registration. Recruitment. Car sales. Buying and selling and renting housing. Services.',
            date: '7/2021-4/2022',
            role: 'Front-end developer',
            link: 'https://rahnama.com/'
        }, {
            company: 'The Cosmetic Factory',
            icon: '/icon/thecosmeticfactory.png',
            description: 'The Cosmetic Factory has over 15 years of experience in formulating and manufacturing cosmetics, so we know how to get the best ingredients to formulate incredible products for your personal care, without compromising your budget.\n' +
                '\n' +
                'We call ourselves pioneers — in product formulation, honesty culture, and affordable premium cosmetics.\n' +
                '\n' +
                'The Cosmetic Factory is here to change Australia’s cosmetics scene',
            date: '11/2021-2/2022',
            role: 'Front-end developer(Project)',
            link: 'https://www.thecosmeticfactory.com.au/'
        }, {
            company: 'Bacoina Exchange',
            icon: '/icon/BacoinaEnglish.svg',
            description: 'Bacoina operates in the field of digital currency market and blockchain, which have been produced by using science and technology in order to invest and introduce Iranian users to the global digital currency market, a platform with practical capabilities through They create efficient and professional yet simple financial tools.A major platform to trade crypto currencies.',
            date: '4/2022-9/2022',
            role: 'Front-end developer',
            link: 'https://bacoina.com/'
        }, {
            company: 'Tech1a (Tavana Co.)',
            icon: '/icon/BacoinaEnglish.svg',
            description: 'stock brokerage',
            date: '9/2022-current',
            role: 'Front-end developer',
        },
    ]

    return (
        <section className='bg-sky-50 pt-[120px] pb-5'>
            <div className='container mx-auto flex'>
                <div className='md:w-[70%] w-full mx-auto py-4'>
                    <Carousel autoPlay showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} interval={10000}>
                        <div>
                            <h1 className="text-2xl font-bold border-b-2 border-rose-600 mb-3">Projects</h1>
                            <div className="grid grid-cols-2 gap-4">
                            {
                                Projects.map((project: any) => {
                                    return (
                                        <Link href={project?.link || '#'} className='shadow-sm hover:shadow-md transition-all rounded p-1 bg-gray-50 border border-gray-50' key={project.company}>
                                            <div>
                                                <img src={project.icon} className={'h-12 w-12 bg-contain'} alt={project.company} />
                                            </div>
                                            <div className="text-left mt-3">
                                                <div className="text-xl">
                                                    {project.company}
                                                </div>
                                                <div className="text-sm">
                                                    {project.description}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold border-b-2 border-rose-600 mb-3">Education</h1>
                            <div className='flex shadow-sm hover:shadow-md transition-all rounded p-1 bg-gray-50 border border-gray-50'>
                                <div>
                                    <img src="images.jpeg" className='h-12 w-12' alt="uni" />
                                </div>
                                <div className="ml-2">
                                    <div>
                                        Frederick University 2016-2019
                                    </div>
                                    <div>
                                        Mechanical Engineering
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}