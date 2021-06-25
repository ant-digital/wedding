import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../song.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import SimpleReactLightbox from 'simple-react-lightbox'
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
import bg from '../images/sageGreen/body-bg.jpg'


const SerenityBlue = (props) => {

  const [showWelcomePopUp, setShowWelcomePopUp] = useState(false)
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

  const closeWelcomePopUp = () => {
    setShowWelcomePopUp(!showWelcomePopUp)
    setCustomerName(props.location.search ? props.location.search.split('=')[1] : '')
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
    // <SimpleReactLightbox>
    <>

      {showWelcomePopUp ? (
        /**
         * Welcome Popup ( 1st Screen )
        */

        <div style={{ display: "grid" }} className="h-screen text-blue">
          <StaticImage
            style={{
              gridArea: "1/1",
            }}
            alt=""
            src="../images/photo-1-dark.jpg"
            formats={["auto", "webp", "avif"]}
            objectFit="cover"
          />
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              display: "grid"
            }}
            className="max-w-screen"
          >
            <div className="flex w-11/12 mx-auto my-6 justify-center font-sansNarrow bg-white bg-opacity-80 items-center relative">
              <StaticImage src="../images/serenityBlue/ornament-bunga.png"
                alt="bunga" width={100} height={100}
                style={{ position: 'absolute', left: 0, top: 50, transform: 'rotate(90deg)' }}
              ></StaticImage>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className="flex flex-col"
              >

                <div className="text-center">
                  <h1 className="text-3xl md:text-6xl">Dear,
                    {/* {props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''} */}
                    Guest
                  </h1>
                  <h2 className="text-2xl md:text-5xl mb-4 mt-4" >You are invited to the wedding of</h2>
                </div>
                <div className="text-center">
                  <h1 className="font-bold text-5xl md:text-8xl ">SUTONO & SHELLA</h1>
                </div>
                <div className="text-center">
                  <StaticImage src="../images/serenityBlue/ornament-love.png"
                    alt="bunga"
                  ></StaticImage>
                  <h1 className="text-xl md:text-3xl">To : Mr Hock and Family</h1>
                </div>
                <div className="mt-6 text-center">
                  <div onClick={closeWelcomePopUp}
                    className="mx-auto mt-4 flex font-bold rounded-xl text-white w-max cursor-pointer md:text-2xl" style={{ padding: '10px 10px 5px 10px', backgroundColor: '#0045ac' }}>
                    <div className="mr-2">
                      <span style={{
                        fontFamily: 'Material Icons', fontSize: '18px'
                      }}>drafts</span>
                    </div>
                    <div>
                      <span>Open Invitation</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        /**
        * Main Screen
        */
        <div className="text-xl md:text-2xl w-screen font-sansNarrow text-blue bg-blue bg-cover">
          {/* <MusicPlayer song={song}></MusicPlayer> */}
          {/* <div className="grid grid-cols-1 text-center md:h-screen">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7 }}
              className="text-center p-8 text-black md:col-span-3 self-center text-xl md:text-3xl"
            >
              "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="flex flex-col">
                <StaticImage src="../images/sageGreen/bride.webp" objectFit="contain"
                  alt="bride" className="my-4"
                ></StaticImage>
                <h1 className="font-greatVibe text-5xl md:text-8xl ">Tommy</h1>
                <span className="text-xl md:text-3xl">
                  <h3>Putra ketiga dari <br></br>Bapak & Ibu Hock</h3>
                </span>
              </div>
              <div className="flex flex-col md:pt-32">
                <h1 className="text-5xl md:text-8xl font-greatVibe ">&</h1>
              </div>
              <div className="flex flex-col">
                <StaticImage src="../images/sageGreen/groom.webp"
                  alt="groom" className="my-4" objectFit="contain"
                ></StaticImage>
                <h1 className="font-greatVibe text-5xl md:text-8xl ">Cindy</h1>
                <span className="text-xl md:text-3xl">
                  <h3>Putri ketiga dari <br></br>Bapak & Ibu Seng</h3>
                </span>
              </div>
            </div>
          </div> */}

          <div style={{ display: "grid" }} className="h-screen text-blue">
            <StaticImage
              style={{
                gridArea: "1/1",
              }}
              alt=""
              src="../images/photo-1-dark.jpg"
              formats={["auto", "webp", "avif"]}
              objectFit="cover"
            />
            <div
              style={{
                gridArea: "1/1",
                position: "relative",
                display: "grid"
              }}
              className="max-w-screen"
            >
              <div className="flex flex-col font-sansNarrow bg-white bg-opacity-80 relative">
                <StaticImage src="../images/serenityBlue/ornament-bunga.png"
                  alt="bunga" width={150} height={150}
                  style={{ position: 'absolute', left: 0, top: '150px', transform: 'rotate(90deg)' }}
                ></StaticImage>
                <StaticImage src="../images/serenityBlue/ornament-padi.png"
                  alt="bunga" width={150} height={150}
                  style={{ position: 'absolute', right: 0, bottom: 0, transform: 'rotate(90deg)' }}
                ></StaticImage>
                {/* 
                <StaticImage src="../images/serenityBlue/awan.png"
                  alt="bunga" width={300} height={300} layout="constrained"
                  style={{ position: 'absolute', left: 0, bottom: 10}}
                ></StaticImage> */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 7 }}
                  className="text-center p-8 text-black text-xl md:text-3xl"
                >
                  "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
                </motion.div>
                <div className="flex flex-col my-auto space-y-5">
                  <div className="text-center">
                    <h1 className="text-5xl md:text-8xl font-bold">SUTONO</h1>
                    <span className="text-xl md:text-3xl">
                      <h3>Putra ketiga dari <br></br>Bapak & Ibu Hock</h3>
                    </span>
                  </div>
                  <div className="text-center">
                    <h1 className="text-5xl md:text-8xl font-bold">&</h1>
                  </div>
                  <div className="text-center">
                    <h1 className="text-5xl md:text-8xl font-bold">SHELLA</h1>
                    <span className="text-xl md:text-3xl">
                      <h3>Putri ketiga dari <br></br>Bapak & Ibu Seng</h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <StaticImage src="../images/couple4.jpg"
              alt="bunga"
              layout="fullWidth"
            ></StaticImage>
          </div>
          <div className="flex flex-col p-8 bg-blue bg-cover relative">
          <StaticImage src="../images/serenityBlue/ornament-bunga.png"
                  alt="bunga" width={100} height={100}
                  style={{ position: 'absolute', left: 0, top: '150px', transform: 'rotate(90deg)' }}
                ></StaticImage>
                <StaticImage src="../images/serenityBlue/ornament-padi.png"
                  alt="bunga" width={100} height={100}
                  style={{ position: 'absolute', right: 0, bottom: 0, transform: 'rotate(90deg)' }}
                ></StaticImage>
            <div className="text-center mb-4">
              <h1 className="font-greatVibe text-5xl md:text-8xl ">Save the Date</h1>
            </div>
            <div id="frame" className="flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0">
              <div className="text-center text-xl md:text-3xl space-y-5">
                <h1 className=" font-bold text-3xl md:text-5xl">Wedding Ceremony</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                  <div className="mx-auto mt-4 flex border-2 rounded-xl text-white w-max" style={{ padding: '10px 10px 5px 10px', backgroundColor: '#0045ac' }}>
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
              </div>
              <div className="text-center text-xl md:text-3xl space-y-5">
                <h1 className=" font-bold text-3xl md:text-5xl">Wedding Reception</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                  <div className="mx-auto mt-4 flex border-2 rounded-xl text-white w-max" style={{ padding: '10px 10px 5px 10px', backgroundColor: '#0045ac' }}>
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
              </div>
            </div>

          </div>
          <div className="p-4 mt-4 text-xl md:text-2xl">
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
                </div>
              </motion.div>
            </InView>

          </div>

          {/* <Parallax blur={1} bgImage={coupleImg} bgImageAlt="the cat" strength={300} bgImageStyle={{ objectFit: 'cover' }}>
              <div className="flex justify-center mt-4">
                <div className="text-center w-screen text-white p-2 md:p-10" >
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
                </div>
              </div>
            </Parallax> */}
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
          <div className="p-4">
            <h1 className="font-bold  text-2xl md:text-5xl text-center">Countdown</h1>
            <Countdown setReminder='' color='sageGreen'></Countdown>
          </div>
          <div className="p-8 mb-4 text-xl md:text-2xl">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold  text-2xl md:text-5xl">Wishes Box</h2>
            </div>
            <div className="w-full md:max-w-xl m-auto" >
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
                  <textarea name="message" onChange={handleInputChange} value={message}
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="shadow bg-green-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
                      <span className="font-bold">{inbox.name}</span>
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
          {/* <PhotoAlbum></PhotoAlbum> */}
          {/* <AudioPlayer
            autoPlay
            src={song}
            onPlay={e => console.log("onPlay")}
          /> */}
          <Footer></Footer>
        </div>)
      }
      {/* </div> */}
      {/* </SimpleReactLightbox> */}
    </>
  )
}

export default SerenityBlue
