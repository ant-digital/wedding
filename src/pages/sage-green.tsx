import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../beautiful-in-white.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import SimpleReactLightbox from 'simple-react-lightbox'
import QRCode from "react-qr-code";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import MusicPlayer from "$components/MusicPlayer";
import MotionBox from "$components/MotionBox";
import { motion } from 'framer-motion'

const SageGreen = (props) => {

  const [showWelcomePopUp, setShowWelcomePopUp] = useState(true)
  const [customerName, setCustomerName] = useState("")
  const { inboxes, isLoading, isError } = useInboxes(props.location.pathname)
  const [senderName, setSenderName] = useState("")
  const [message, setMessage] = useState("")
  const [eventName, setEventName] = useState("")
  const [attend, setAttend] = useState(false)

  const closeWelcomePopUp = () => {
    setShowWelcomePopUp(!showWelcomePopUp)
  }

  useEffect(() => {
    setCustomerName(props.location.search ? props.location.search.split('=')[1] : 'Guest')
    setEventName(props.location.pathname.replace(/[/]/ig, ''))
  }, []);


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
        name: senderName.trim(),
        message: message.trim(),
        eventName,
        attend
      }),
    })
    mutate(`${process.env.BACKEND_URL}/inbox?eventName=${eventName}`)
    setSenderName("")
    setMessage("")
  }

  return (
    <SimpleReactLightbox>

      {showWelcomePopUp ? (
        /**
         * Welcome Popup ( 1st Screen )
        */

        <div style={{ display: "grid" }} className="h-screen">
          {/* You can use a GatsbyImage component if the image is dynamic */}
          <StaticImage
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              // maxHeight: 600,
            }}
            // layout="constrained"
            // You can optionally force an aspect ratio for the generated image
            // aspectRatio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src="../images/sageGreen/welcome-bg.jpg"
            formats={["auto", "webp", "avif"]}
            objectFit="cover"
          />
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: "1/1",
              position: "relative",
              // This centers the other elements inside the hero component
              placeItems: "center",
              display: "grid",
            }}
          >
            <div className="flex w-screen justify-center font-sansNarrow">
              <MotionBox
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}>
                <div className="text-center">
                  {/* <h1 className="text-3xl">Dear, {props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}</h1> */}
                  <h2 className="text-2xl md:text-5xl mb-4 font-bold" >You are invited to the wedding of</h2>
                </div>
                <div className="text-left pt-4 pl-4">
                  <h1 className="font-greatVibe text-5xl md:text-8xl text-sageGreen">Tommy</h1>
                </div>
                <div className="text-center">
                  <StaticImage src="../images/sageGreen/frame-foto-pengantin.png"
                    alt="bunga" height={320}
                  ></StaticImage>
                </div>
                <div className="text-right pr-4">
                  <h1 className="font-greatVibe text-5xl md:text-8xl text-sageGreen">Cindy</h1>
                </div>
                <div className="text-center">
                  <StaticImage src="../images/sageGreen/ornament.png"
                    alt="bunga"
                  ></StaticImage>
                  <h1 className="text-xl md:text-3xl">To : {decodeURI(customerName)}</h1>
                </div>
                <div className="mt-6 text-center">
                  <button onClick={closeWelcomePopUp} className="rounded-xl font-bold p-2  w-3/4 md:w-1/2 text-white bg-green-700">Open Invitation</button>
                </div>
              </MotionBox>
            </div>
          </div>
        </div>
      ) : (
        /**
        * Main Screen
        */
        <div className="text-sm md:text-xl font-sansNarrow overflow-hidden bg-bodyGreen bg-cover">
          <MusicPlayer song={song}></MusicPlayer>
          <div className="grid grid-cols-1 text-center md:h-screen">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { x: 0, transition: { when: 'beforeChildren', delay: 0.5, type: 'tween', duration: 3 } },
                hidden: { x: '100vw' }
              }}
              className="text-center p-8 text-black md:col-span-3 self-center text-xl md:text-3xl"
            >
              "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
              <motion.div
                variants={{
                  visible: { opacity: 1, transition: { duration: 2, delay: 0.2, type: "tween" } },
                  hidden: { opacity: 0 }
                }}
                className="flex flex-col md:flex-row justify-center gap-10 relative">
                <StaticImage src="../images/sageGreen/ornament1-kiri.png"
                  alt="bunga" width={120}
                  style={{ position: 'absolute', left: '-30px', top: '200px' }}
                ></StaticImage>
                <StaticImage src="../images/sageGreen/ornament1-kanan.png"
                  alt="bunga" width={120}
                  style={{ position: 'absolute', right: '-30px', bottom: 0 }}
                ></StaticImage>
                <div
                  className="flex flex-col">
                  <StaticImage src="../images/sageGreen/bride.webp" objectFit="contain"
                    alt="bride" className="my-4"
                  ></StaticImage>
                  <h1 className="font-greatVibe text-5xl md:text-8xl text-sageGreen">Tommy</h1>
                  <span className="text-xl md:text-3xl">
                    <h3>Putra ketiga dari <br></br>Bapak & Ibu Hock</h3>
                  </span>
                </div>
                <div className="flex flex-col md:pt-32">
                  <h1 className="text-5xl md:text-8xl font-greatVibe text-sageGreen">&</h1>
                </div>
                <div
                  // variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                  className="flex flex-col">
                  <StaticImage src="../images/sageGreen/groom.webp"
                    alt="groom" className="my-4" objectFit="contain"
                  ></StaticImage>
                  <h1 className="font-greatVibe text-5xl md:text-8xl text-sageGreen">Cindy</h1>
                  <span className="text-xl md:text-3xl">
                    <h3>Putri ketiga dari <br></br>Bapak & Ibu Seng</h3>
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
          <MotionBox
            variants={{ visible: { x: 0 }, hidden: { x: '100vw' } }}
            className="flex flex-col mt-8 bg-white bg-opacity-40 p-8 relative">
            <StaticImage src="../images/sageGreen/ornament2-kiri.png"
              alt="bunga" width={120} height={200}
              style={{ position: 'absolute', left: 0, top: 0 }}
            ></StaticImage>
            <StaticImage src="../images/sageGreen/ornament2-kanan.png"
              alt="bunga" width={150} height={200}
              style={{ position: 'absolute', right: 0, bottom: 0 }}
            ></StaticImage>
            <div className="text-center mb-4">
              <h1 className="font-greatVibe text-5xl md:text-8xl text-sageGreen">Save the Date</h1>
            </div>
            <div id="frame" className="flex flex-col md:flex-row justify-evenly space-y-10 md:space-y-0">
              <div className="text-center space-y-5">
                <h1 className="text-sageGreen font-bold text-xl md:text-4xl">Wedding Ceremony</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
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
              </div>
              <div className="text-center space-y-5">
                <h1 className="text-sageGreen font-bold text-xl md:text-4xl">Wedding Reception</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
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
              </div>
            </div>

          </MotionBox>

          <MotionBox
            className="p-4 mt-8"
            variants={{ visible: { x: 0 }, hidden: { x: '-100vw' } }}
          >

            <div className="flex justify-center mb-4">
              <h2 className="font-bold text-sageGreen text-xl md:text-4xl">Protokol Covid-19</h2>
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
          </MotionBox>


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
          <div className="p-4">
            {/* <motion.div
                initial="hidden"
                animate={controls2}
                variants={variants}
                transition={{ duration: 3 }}
              >
                <div className="flex justify-center mb-4">
                  <h2 className="font-bold text-sageGreen text-xl md:text-4xl">Kirim Dana</h2>
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
              </motion.div> */}
          </div>
          <div className="">
            <h1 className="font-bold text-sageGreen text-xl md:text-4xl text-center">Countdown</h1>
            <Countdown setReminder='' color='sageGreen'></Countdown>
          </div>
          <div className="p-8 mb-4">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold text-sageGreen text-xl md:text-4xl">Wishes Box</h2>
            </div>
            <div className="w-full max-w-sm m-auto" >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name</label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" name="name" onChange={handleInputChange} value={senderName}
                    className="appearance-none border-2 border-sageGreen rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gold"></input>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Wishes</label>
                </div>
                <div className="md:w-2/3">
                  <input type="textarea" name="message" onChange={handleInputChange} value={message}
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
                  Send Wishes</button>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto my-4 border-2 overflow-y-scroll bg-white bg-opacity-40" style={{ height: '300px', borderColor: '#047857' }}>
            {
              inboxes.map((inbox, index) => {
                return (<div key={inbox.name} className="p-2 mb-2">
                  <span className="font-black">{inbox.message}</span>
                  <br></br>
                  <span className="text-sm">{inbox.name}</span>
                </div>)
              })
            }
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-4xl text-sageGreen mb-4 text-center">Gallery</h1>
            <PhotoAlbum color='green'></PhotoAlbum>
          </div>
          <Footer color="black"></Footer>
        </div>)
      }
      {/* </div> */}
    </SimpleReactLightbox>
  )
}

export default SageGreen
