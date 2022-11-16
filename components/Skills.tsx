import Image from "next/image"

export default function Skills() {
    const items = [
        {
            title: 'ReactJs',
            icon: '/icon/react.svg'
        },{
            title: 'NextJs',
            icon: '/icon/next.svg'
        },{
            title: 'Html',
            icon: '/icon/html-5.svg'
        },{
            title: 'css',
            icon: '/icon/css-3.svg'
        },{
            title: 'Typescript',
            icon: '/icon/typescript-icon.svg'
        },{
            title: 'Redux',
            icon: '/icon/redux.svg'
        },{
            title: 'Socket',
            icon: '/icon/socket-io.svg'
        },{
            title: 'PWA',
            icon: '/icon/pwa.svg'
        },{
            title: 'Tailwind',
            icon: '/icon/tailwind-css-icon.svg'
        },{
            title: 'Bootstrap',
            icon: '/icon/bootstrap.svg'
        },{
            title: 'Styled-Component',
            icon: '/icon/styled-component.svg'
        },{
            title: 'Styled-System',
            icon: '/icon/styled-system.svg'
        },{
            title: 'React-Strap',
            icon: '/icon/react-strap.png'
        },{
            title: 'Ag-Grid',
            icon: '/icon/ag-grid.svg'
        },{
            title: 'SWR',
            icon: '/icon/swr.png'
        },{
            title: 'Axios',
            icon: '/icon/axios.svg'
        },{
            title: 'React-Query  (Familiar)',
            icon: '/icon/react-query-icon.svg'
        },{
            title: 'GraphQl  (Familiar)',
            icon: '/icon/graphql.svg'
        },
    ]

    return (
        <section className='relative bg-code bg-cover h-[500px] bg-top'>
            <div className='absolute h-full w-full backdrop-blur-sm' />
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-3/5 grid grid-cols-3 gap-4'>
                {items.map((skill:{title:string,icon:string})=>{
                    return(
                        <div key={skill.title} className={'p-2 flex items-center space-x-2 bg-white rounded'}>
                                <div>
                                    <Image src={skill.icon} height={32} width={32} alt={skill.title}/>
                                </div>
                                <div>
                                    {skill.title}
                                </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}