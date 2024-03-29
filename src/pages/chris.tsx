import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment, useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../this-is-how-you-fall-in-love.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import { motion, useAnimation } from "framer-motion"
import { InView } from 'react-intersection-observer';
import QRCode from "react-qr-code";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mutate } from "swr";
import Footer from "$components/Footer";
import { Dialog, Transition } from "@headlessui/react";
import MusicPlayer from "$components/MusicPlayer";

const Chris = (props) => {
    const [open, setOpen] = useState(true)
    const [senderName, setSenderName] = useState("")
    const [message, setMessage] = useState("")
    const [attend, setAttend] = useState(false)
    const controls = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();


    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const sequence = async () => {
        await controls3.start("visible")
        await controls4.start('visible')
    }
    if (!open) {
        sequence()

    }
    const handleInputChange = (e) => {
        if (e.target.name === 'name') {
            setSenderName(e.target.value)
        } else if (e.target.name === 'message') {
            setMessage(e.target.value)
        }
        else {
            if (e.target.value === 'true') {
                setAttend(true)
            } else {
                setAttend(false)
            }
        }
    }

    const saveAttendance = async () => {
        const queryParams = new URLSearchParams(props.location.search)
        const id = queryParams.get("id")
        const raw = JSON.stringify({
            id,
            value: attend,
            content: message
        });

        const requestOptions: any = {
            method: 'POST',
            body: raw,
        };

        return fetch(`https://us-central1-bidding-mobil.cloudfunctions.net/function-1`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('saveAttendance error', error));
    }

    const sendWishes = async () => {
        mutate(`https://us-central1-bidding-mobil.cloudfunctions.net/function-1/wishes`, [{
            name: "",
            message: message
        }], false)
        await saveAttendance()
        mutate(`https://us-central1-bidding-mobil.cloudfunctions.net/function-1/wishes`)
        setSenderName("")
        setMessage("")
    }

    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex items-center justify-center text-2xl">
                                            <h2 className="font-MrsEavesRomanSmallCaps" style={{ color: '#9fa0a1', textTransform: 'capitalize' }}>Wedding Invitation</h2>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                <StaticImage src="../images/sageGreen/frame-foto-pengantin.png"
                                                    alt="bunga"
                                                    style={
                                                        {
                                                            width: "50vw",
                                                            maxWidth: '300px',
                                                            maxHeight: '300px'
                                                        }
                                                    }
                                                ></StaticImage>
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500" style={{ lineHeight: '30px' }}>
                                                    With great joy, we are pleased to cordially invite you to celebrate the marriage of
                                                    <br></br>
                                                    <span className="font-bold text-md text-black">Christianto & Kezia</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 text-center">
                                        <button
                                            type="button"
                                            style={{ letterSpacing: '3px' }}
                                            className="text-xs uppercase inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-white shadow-sm hover:bg-grey-700 focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-2 sm:text-sm"
                                            onClick={() => setOpen(false)}
                                        >
                                            Open Invitation
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div >
                {/* MAIN CONTENT */}
                <div className="text-sm md:text-xl overflow-hidden">
                    <div className="flex flex-col  justify-center text-center h-screen bg-foto bg-cover bg-center">
                        <motion.div
                            initial="hidden"
                            animate={controls3}

                            variants={{
                                visible: {
                                    x: 0,
                                    transition: {
                                        delayChildren: 0.3,
                                        staggerChildren: 0.2,
                                        type: 'tween', duration: 3
                                    }
                                },
                                hidden: { x: '100vw' }
                            }}
                            className="text-center  text-xl md:text-3xl"
                        >
                            <div style={{ letterSpacing: '0.5px' }} className="font-MrsEavesRomanSmallCaps text-white text-md md:text-4xl text-center mb-2">The wedding of</div>
                            <div className="font-MrsEavesRoman text-white text-xl uppercase md:text-4xl text-center mb-2">Christianto & Kezia Christy</div>
                            <div className="text-white text-sm md:text-xl text-center">18 • November • 2023</div>
                            <motion.div
                                className="mt-4"
                                initial="hidden"
                                animate={controls4}
                                variants={{
                                    visible: { opacity: 1, transition: { type: 'tween', duration: 5 } },
                                    hidden: { opacity: 0 }
                                }}
                            >
                                {/* <Countdown setReminder='' color='white'></Countdown> */}
                                <FlipClockCountdown
                                    style={{ justifyContent: 'center', }}
                                    labelStyle={{ fontSize: 12, color: 'white' }}

                                    digitBlockStyle={{ width: 20, height: 20, fontSize: 15, backgroundColor: 'white', color: 'black' }}
                                    dividerStyle={{ color: 'black', height: 0.5 }}
                                    to={1700240400000} />;


                            </motion.div>
                        </motion.div>


                    </div>
                    <div className="text-2xl md:text-2xl" style={{ background: "rgb(250, 250, 250)", }}>
                        <StaticImage
                            style={{
                                zIndex: 1
                            }}
                            width={100}
                            src="../images/image-top.svg"
                            formats={["auto", "webp", "avif"]}
                            objectFit='cover'
                            alt=''
                        />

                        <InView as="div" onChange={(inView, entry) => {
                            if (inView) {
                                controls.start('visible')
                            }
                        }}>

                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={variants}
                                transition={{ duration: 1 }}
                            >
                                <div style={{ letterSpacing: '0.5px' }} className="font-MrsEavesRomanSmallCaps text-gray-500 text-2xl md:text-4xl text-center mb-2 capitalize">Meet The Couple</div>

                                <div className="mt-8 flex flex-col md:flex-row justify-center gap-10 md: gap-14 text-center ">

                                    <div className="flex flex-col">
                                        <StaticImage
                                            objectFit="cover"
                                            src="../images/kezia.jpeg"
                                            height={210}
                                            width={210}
                                            className="inline-block rounded-md self-center"
                                            alt=""
                                        />
                                        <br></br>
                                        <div style={{ color: "rgb(159, 160, 161)", letterSpacing: '3px' }} className="text-2xl font-MrsEavesRomanSmallCaps uppercase">Christianto</div>
                                        <div style={{ color: "#757575", letterSpacing: '1px' }} className="text-xs">First Son of <br></br>Mr. Hengky Foe & Mrs. Wong Jaw Pee</div>
                                    </div>
                                    <div className="flex flex-col md:pt-32">
                                        <h1 className="text-5xl"></h1>
                                    </div>
                                    <div className="flex flex-col">
                                        <StaticImage
                                            height={210}
                                            width={210}
                                            className="inline-block rounded-full self-center"
                                            src="../images/kezia.jpeg"

                                            alt=""
                                        />
                                        <br></br>
                                        <div style={{ color: "rgb(159, 160, 161)", letterSpacing: '3px' }} className="text-2xl font-MrsEavesRomanSmallCaps uppercase">Kezia Christy</div>
                                        <div style={{ color: "#757575", letterSpacing: '1px' }} className="text-xs px-4">First Daughter of<br></br> Mr. Budianto Agustjik & Mrs. Khoe Ay Ling</div>

                                    </div>
                                </div>

                                {/* <div className="flex justify-center mb-4">
                                    <h2 className="font-bold  text-2xl md:text-5xl">Protokol Covid-19</h2>
                                </div>
                                <div className="flex justify-center mb-4 ">
                                    <h4 className="text-center">Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</h4>
                                </div>
                                <div className="flex justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center">
                                            <StaticImage src="../images/distance.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}></StaticImage>
                                            <span className="ml-2">Saling Menjaga Jarak di Dalam Acara</span>
                                        </div>
                                        <div className="flex items-center">
                                            <StaticImage src="../images/masker.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></StaticImage>
                                            <span className="ml-2">Wajib Menggunakan Masker</span>
                                        </div>
                                        <div className="flex items-center">
                                            <StaticImage src="../images/namaste.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></StaticImage>
                                            <span className="ml-2">Menggunakan Salam Namaste</span>
                                        </div>
                                        <div className="flex items-center">
                                            <StaticImage src="../images/wash.png"
                                                alt="Picture of the author"
                                                width={40}
                                                height={40}
                                            ></StaticImage>
                                            <span className="ml-2">Mencuci Tangan dan Menggunakan Hand Sanitizer</span>
                                        </div>
                                    </div>
                                </div> */}
                            </motion.div>
                        </InView>
                        <div className="flex">
                            <StaticImage
                                style={{
                                    zIndex: 1,
                                    marginLeft: 'auto'
                                }}
                                width={100}

                                alt=""
                                src="../images/image-bottom.svg"
                                formats={["auto", "webp", "avif"]}
                                objectFit='cover'
                            />
                        </div>

                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div>
                            <StaticImage alt=""
                                src="../images/couple.jpg"
                                formats={["auto", "webp", "avif"]}
                                objectFit='cover'
                            />
                        </div>
                        <div>
                            <StaticImage
                                alt=""
                                src="../images/couple3.jpg"
                                formats={["auto", "webp", "avif"]}
                                objectFit='cover'
                            />
                        </div>
                        <div>
                            <StaticImage
                                alt=""
                                src="../images/couple4.jpg"
                                formats={["auto", "webp", "avif"]}
                                objectFit='cover'
                            />
                        </div>
                    </div>

                    <motion.div
                        variants={{ visible: { x: 0 }, hidden: { x: '100vw' } }}
                        className="flex flex-col p-8 relative" style={{ background: "rgb(149, 150, 151)" }}>
                        <StaticImage src="../images/image2-bottom.svg"
                            alt="bunga" width={100}
                            style={{ position: 'absolute', left: 0, top: 0, opacity: 0.4 }}
                        ></StaticImage>
                        <StaticImage src="../images/image2-top.svg"
                            alt="bunga" width={100}
                            style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 0, opacity: 0.4 }}
                        ></StaticImage>
                        <div style={{ letterSpacing: '0.5px' }} className="font-MrsEavesRomanSmallCaps capitalize text-white text-4xl md:text-4xl text-center mb-2">The Wedding</div>

                        <div className="text-white text-xl text-center">18 • November • 2023</div>
                        <div id="frame" className="flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0">
                            <div className="flex flex-col text-center text-white space-y-8 border-4 border-white p-8 mt-4">
                                <div>
                                    <StaticImage src="../images/ring.svg"
                                        alt="ring"
                                    // style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 0 }}
                                    ></StaticImage>
                                </div>
                                <div style={{ letterSpacing: '0.5px' }} className="font-MrsEavesRomanSmallCaps capitalize text-white text-4xl md:text-4xl text-center mb-2">Holy Matrimony</div>

                                <div>Saturday, 11 November 2023 <br></br>09:00  <br></br>Gereja St Matia Rasul Kosambi</div>
                                <div>
                                    <a href="https://www.google.com/maps/dir/-6.2062592,106.8531712/hotel+episode+gading+serpong/@-6.1883929,106.6131143,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69fd94da2847cd:0xa1421103e3d49919!2m2!1d106.6202915!2d-6.2563993?hl=en-US">
                                        <div className="mx-auto mt-2 flex rounded-xl w-max bg-white text-center p-2">
                                            {/* <div className="mr-2">
                                                <span style={{
                                                    fontFamily: 'Material Icons', fontSize: '18px'
                                                }}>place</span>
                                            </div> */}
                                            {/* <div> */}
                                            <span className="text-gray-500">Open Maps</span>
                                            {/* </div> */}
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* <div className="text-center space-y-5">
                                <h1 className=" font-bold text-xl md:text-4xl">Wedding Reception</h1>
                                <p>Saturday, 18 November 2023 <br></br>18:00 <br></br>Hotel Episode Gading Serpong</p>
                                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                                    <div className="mx-auto mt-4 flex border-2 rounded-xl text-white w-max bg-green-700" style={{ padding: '10px 10px 5px 10px' }}>
                                        <div className="mr-2">
                                            <span style={{
                                                fontFamily: 'Material Icons', fontSize: '18px'
                                            }}>place</span>
                                        </div>
                                        <div>
                                            <span>Location</span>

                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        </div>

                    </motion.div>
                    {/* {!open ? (<MusicPlayer song={song}></MusicPlayer>) : ''} */}
                    {/* <div className="p-8 mb-4 text-white bg-white">
                        <div className="flex justify-center mb-4">
                            <h2 className="font-bold  text-xl md:text-4xl">Wishes Box</h2>
                        </div>
                        <div className="w-full max-w-sm m-auto" >

                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Wishes</label>
                                </div>
                                <div className="md:w-2/3">
                                    <input type="textarea" name="message" onChange={handleInputChange} value={""}
                                        className="appearance-none border-2 border-sageGreen rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gold0"
                                    ></input>
                                </div>
                            </div>
                            <div className="flex flex-col md:items-center mb-6">
                                <div className="mb-2">
                                    <label className="block text-gray-500 font-bold text-md md:text-2xl">Are you going to attend?</label>
                                </div>
                                <div className="">
                                    <input type="radio" style={{ width: '20px', height: '20px' }} value="true" onChange={handleInputChange} checked={attend}></input> <span className="mx-4">Yes</span>
                                    <input type="radio" style={{ width: '20px', height: '20px' }} value="false" onChange={handleInputChange} checked={!attend}></input> <span className="mx-4" >No</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-green-700 text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={sendWishes} >
                                    Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 text-xl md:text-2xl">
                        <InView as="div" onChange={(inView, entry) => {
                            if (inView) {
                                controls2.start('visible')
                            }
                        }}>
                            <motion.div
                                initial="hidden"
                                animate={controls2}
                                variants={variants}
                                transition={{ duration: 2 }}
                            >
                                <div className="flex justify-center mb-4">
                                    <h2 className="font-bold  text-2xl md:text-5xl">Kirim Dana</h2>
                                </div>
                                <div className="flex justify-center mb-4">
                                    <span className="text-center">Sebelumnya, terimakasih atas perhatian dan bentuk tanda kasih Bapak/Ibu/Saudara/i untuk kami. Silahkan kirimkan dana melalui transfer rekening berikut :</span>
                                </div>
                                <div className="flex justify-center mb-4">
                                    <StaticImage className="float-left" src="../images/qr-dummy.jpeg"
                                        width={150}
                                        height={150}
                                        alt="bottom"></StaticImage>
                                </div>
                            </motion.div>
                        </InView>
                    </div>
                    <div className="w-3/4 mx-auto my-4 border-2 overflow-y-scroll bg-white bg-opacity-40" style={{ height: '300px', borderColor: '#047857' }}>
                        {
                            [].map((inbox, index) => {
                                return (<div key={inbox.name} className="p-2 mb-2">
                                    <span className="font-black">{inbox.message}</span>
                                    <br></br>
                                    <span className="text-sm">{inbox.name}</span>
                                </div>)
                            })
                        }
                    </div> */}
                    <Footer color="black"></Footer>
                </div>
            </div >
        </>

    )
}

export default Chris
