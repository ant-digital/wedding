import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import song from '../song.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"

import { motion, useAnimation } from "framer-motion"
import { InView } from 'react-intersection-observer';
import QRCode from "react-qr-code";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import MusicPlayer from "$components/MusicPlayer";
import { Parallax } from 'react-parallax';
import coupleImg from "../images/couple3.jpg"

const MeAndYou = (props) => {

  const [show, setShow] = useState(true)
  const [customerName, setCustomerName] = useState("")
  const { inboxes, isLoading, isError } = useInboxes(props.location.pathname)
  const [senderName, setSenderName] = useState("")
  const [message, setMessage] = useState("")
  const [eventName, setEventName] = useState("")

  const controls = useAnimation();
  const controls2 = useAnimation();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const enter = () => {
    setShow(!show)
    setCustomerName(props.location.search ? props.location.search.split('=')[1] : 'Guest')
  }

  useEffect(() => {
    setEventName(props.location.pathname.replace(/[/]/ig, ''))
  }, [controls]);


  const handleInputChange = (e) => {
    if (e.target.name === 'name') {
      setSenderName(e.target.value.trim())
    } else {
      setMessage(e.target.value.trim())
    }
  }

  const sendWishes = async () => {
    mutate(`${process.env.BACKEND_URL}/inbox?eventName=${eventName}`, [...inboxes, {
      name: senderName,
      message: message
    }], false)
    await fetch(`${process.env.BACKEND_URL}/inbox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: senderName,
        message: message,
        eventName: eventName
      }),
    })
    mutate(`${process.env.BACKEND_URL}/inbox?eventName=${eventName}`)
    setSenderName("")
    setMessage("")
  }

  return (
    <>
      <div className="text-xl font-romeo" style={{ backgroundColor: '#e8e8e8' }} >
        {show ? (
          <div className="w-screen h-screen" style={{ backgroundColor: '#e8e8e8' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <div className="flex flex-col justify-center text-center w-screen fixed h-screen z-0 bg-foto bg-center text-white bg-opacity-20">
                <div className="mt-8">
                  <h1 className="text-3xl">Dear, {customerName}</h1>
                  <h2 className="text-2xl" >You are invited to the wedding of</h2>
                </div>
                <div className="mt-6 mb-4">
                  <h1 className="font-greatVibe text-5xl sm:text-8xl mb-8 font-bold">Romeo & Juliet</h1>
                  <button onClick={enter} className="bg-white font-bold p-4 text-black w-3/4 md:w-1/4 rounded">Open Invitation</button>
                </div>
                {/* <div className="md:w-1/5 mx-auto">
              <StaticImage src="../images/bunga-transparent.png"
                alt="bunga"></StaticImage>
            </div> */}
                {/* <div className="place-self-center mt-8">
                {
                  props.location.search ? (
                    <QRCode size={128} value={props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}></QRCode>
                  ) : ('')
                }
              </div>*/}
              </div>
            </motion.div>
          </div>
        ) : (<>
          {/* <div className="flex flex-col justify-center text-center h-screen" style={{ backgroundColor: '#e8e8e8' }}>
            <StaticImage src="../images/flower-top.png"
              alt="Picture of the author"
              width={40}
              height={40}></StaticImage>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 2 }}
              style={{ backgroundColor: '#f4f1ec', margin: '40px' }}
              className="flex flex-col justify-center p-8 border-4 border-white"
            >
              <div>
                <h1 className="font-greatVibe text-3xl mb-3">The wedding of</h1>
              </div>
              <div>
                <h1 className="font-greatVibe text-6xl">Me</h1>
              </div>
              <div>
                <h1>&</h1>
              </div>
              <div>
                <h1 className="font-greatVibe text-6xl">You</h1>
              </div>
            </motion.div>
            <StaticImage src="../images/flower-bottom.png"
              alt="Picture of the author"
              width={500}
              height={323}
              layout="constrained"
            ></StaticImage>
          </div> */}
          {/* <MusicPlayer song={song}></MusicPlayer> */}
          <div className="grid grid-cols-1 text-center md:h-screen overflow-visible" >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
              className="text-center p-4 font-gab md:col-span-3 self-center"
              style={{ backgroundColor: '#e8e8e8' }}
            >
              "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." <br></br><br></br> <span className="text-4xl md:text-6xl mt-4 font-bold">WE ARE GETTING MARRIED</span>
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="flex flex-col">
                <h1>The groom</h1>
                <StaticImage src="../images/bride.jpg" objectFit="contain"
                  alt="bunga" width={236} height={353} className="my-4"
                ></StaticImage>
                <h2>Anindyo baskoro</h2>
                <h3>Putri dari bapak & ibu AAA</h3>
              </div>
              <div className="flex flex-col md:pt-32">
                <h1 className="text-5xl">&</h1>
              </div>
              <div className="flex flex-col">
                <h1>The bride</h1>
                <StaticImage src="../images/groom.jpg"
                  alt="bunga" width={236} height={353} className="my-4" objectFit="contain"
                ></StaticImage>
                <h2>Cynthia Angelin</h2>
                <h3>Putri dari bapak & ibu zzz</h3>
              </div>
            </div>

          </div>

          <div className="p-4 mb-4 mt-2 border-t-2 border-white">
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

                <div className="flex justify-center mb-4">
                  <h2 className="font-bold">Protokol Covid</h2>
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
                      <span className="ml-2 text-xl">Saling Menjaga Jarak di Dalam Acara</span>
                    </div>
                    <div className="flex items-center">
                      <StaticImage src="../images/masker.png"
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      ></StaticImage>
                      <span className="ml-2 text-xl">Wajib Menggunakan Masker</span>
                    </div>
                    <div className="flex items-center">
                      <StaticImage src="../images/namaste.png"
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      ></StaticImage>
                      <span className="ml-2 text-xl" style={{ fontFamily: 'Gabriola' }}>Menggunakan Salam Namaste</span>
                    </div>
                    <div className="flex items-center">
                      <StaticImage src="../images/wash.png"
                        alt="Picture of the author"
                        width={40}
                        height={40}
                      ></StaticImage>
                      <span className="ml-2 text-lg">Mencuci Tangan dan Menggunakan Hand Sanitizer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </InView>

          </div>
          <div className="text-center px-4 font-gab">
            {/* <p > */}

            <br></br>
            Matius 19:6 TB
            <br></br>
            Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih, indah saat Dia mempersatukan putra-putri kami dalam suatu ikatan pernikahan.
            <br></br><br></br>
            Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia Tuhan, kami mengundang Bapak/ Ibu/ Saudara/ i untuk menghadiri Resepsi Pernikahan putra-putri kami yang akan diselenggarakan pada :
            {/* </p> */}
          </div>
          <Parallax blur={1} bgImage={coupleImg} bgImageAlt="the cat" strength={300} bgImageStyle={{ objectFit: 'cover' }}>

            <div className="flex justify-center mt-4">
              <div className="text-center w-screen text-white p-2 md:p-10" >
                {/* <StaticImage src="../images/floral+7+top-right.png"
                width={150}
                height={150}
                className="float-right"
                alt="top"
              ></StaticImage> */}
                <p className="text-center">Sabtu, 6 Oktober 2021 </p>
                <p className="text-center text-md">1.00 Wita - Selesai</p>
                <p className="text-center text-md font-gab">The Apurva Kempinski Bali</p>
                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                  <div className="m-auto flex bg-gray-200 border-2 rounded-xl text-white text-sm w-max" style={{ backgroundColor: '#000000', padding: '10px 10px 5px 10px' }}>
                    <div className="mr-2">
                      <span style={{
                        fontFamily: 'Material Icons', fontSize: '24px'
                      }}>place</span>
                    </div>
                    <div>
                      <span>Petunjuk Lokasi</span>

                    </div>
                  </div>
                </a>
                {/* <StaticImage className="float-left" src="../images/floral+7+bot-left.png"
                width={150}
                height={150}
                alt="bottom"></StaticImage> */}
              </div>
            </div>
          </Parallax>
          <div className="bg-gray-200 p-4 mb-4 border-t-2 border-white">
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
                  <h2 className="font-bold">Kirim Dana</h2>
                </div>
                <div className="flex justify-center mb-4 ">
                  <span className="text-center text-sm">Sebelumnya, terimakasih atas perhatian dan bentuk tanda kasih Bapak/Ibu/Saudara/i untuk kami. Silahkan kirimkan dana melalui transfer rekening berikut :</span>
                </div>
                <div className="flex justify-center mb-4 ">
                  <StaticImage className="float-left" src="../images/qr-dummy.jpeg"
                    width={150}
                    height={150}
                    alt="bottom"></StaticImage>
                </div>
              </motion.div>
            </InView>
          </div>
          <Countdown></Countdown>
          <div className="bg-gray-200 p-4 mb-4 border-t-2 border-white">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold">Wishes Box</h2>
            </div>
            <div className="w-full max-w-sm m-auto" >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name</label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" name="name" onChange={handleInputChange} value={senderName}
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></input>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Wishes</label>
                </div>
                <div className="md:w-2/3">
                  <input type="textarea" name="message" onChange={handleInputChange} value={message}
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  ></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="shadow bg-black hover:bg-white  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm"
                  type="button"
                  onClick={sendWishes} >
                  Send Wishes</button>
              </div>
              <div className="w-full mt-4">
                {
                  inboxes.map((inbox, index) => {
                    return (<div key={inbox.name} className="p-2 mb-2">
                      <span>{inbox.message}</span>
                      <br></br>
                      <span className="text-sm font-bold">{inbox.name}</span>
                    </div>)
                  })
                }
              </div>

            </div>

          </div>



          {/* <Slider dots="true"
            infinite="true"
            speed="500"
            slidesToShow={1}
            slidesToScroll={1}
          >
            <div>
              <h3>story 1</h3>
            </div>
            <div>
              <h3> story 2</h3>
            </div>
            <div>
              <h3>story 3</h3>
            </div>
            <div>
              <h3>story 4</h3>
            </div>
            <div>
              <h3>story 5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider> */}
          <PhotoAlbum></PhotoAlbum>
          {/* <AudioPlayer
            autoPlay
            src={song}
            onPlay={e => console.log("onPlay")}
          /> */}
          <Footer></Footer>
        </>)
        }</div>
    </>
  )
}

export default MeAndYou
