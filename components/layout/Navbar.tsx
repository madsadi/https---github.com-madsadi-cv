import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PhoneIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    return (
        <div className="fixed flex bg-transparent backdrop-blur-sm top-0 py-2 w-full border-b border-gray-300 justify-between z-10 px-10">
            <button className="rounded text-sm p-1 bg-sky-200" onClick={() => setOpen(true)}>Contact</button>
            <a href='/anvari-cv.pdf' className="rounded text-sm p-1 bg-sky-200">Download Full CV</a>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 space-y-4">
                                        <div className='flex items-center'>
                                            <PhoneIcon className='h-4 w-4 mr-2' />
                                            <span>phone: +98 905 534 7703</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <AtSymbolIcon className='h-4 w-4 mr-2' />
                                            <a href='mailto:sadixus@gmail.com'>email: sadixus@gmail.com</a>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-4 mr-2'>
                                                <Image src={'/icon/github-fill.svg'} height={16} width={16} alt={'git'} />
                                            </span>
                                            <a href='https://github.com/madsadi'>Github: madsadi</a>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='h-4 mr-2'>
                                                <Image src={'/icon/linkedin-icon.svg'} height={16} width={16} alt={'linkedin'} />
                                            </span>
                                            <a href='https://www.linkedin.com/in/saeed-anvari-aa314916a/'>linkedin: saeed anvari</a>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}