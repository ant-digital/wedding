
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import 'react-h5-audio-player/lib/styles.css';
import song from '../marry-your-daughter.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"

import { motion } from "framer-motion"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import MusicPlayer from "$components/MusicPlayer";
import MotionBox from "$components/MotionBox";


const BlackGold = (props) => {

  const [showWelcomePopUp, setShowWelcomePopUp] = useState(true)
  const [customerName, setCustomerName] = useState("Guest")
  const { inboxes, isLoading, isError } = useInboxes(props.location.pathname)
  const [senderName, setSenderName] = useState("")
  const [message, setMessage] = useState("")
  const [attend, setAttend] = useState(false)
  const [eventName, setEventName] = useState("")

  const closeWelcomePopUp = () => {
    setShowWelcomePopUp(!showWelcomePopUp)
    // setCustomerName(props.location.search ? props.location.search.split('=')[1] : 'Guest')
  }

  useEffect(() => {
    setEventName(props.location.pathname.replace(/[/]/ig, ''))
    console.log('p', props.location.search)
    setCustomerName(props.location.search ? props.location.search.split('=')[1] : 'Guest')
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
    <>
      {showWelcomePopUp ? (
        /**
         * Welcome Popup ( 1st Screen )
        */
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, transition: { when: 'beforeChildren', delay: 0.2, type: 'tween', duration: 2 } },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 justify-center h-screen bg-bodyBlack p-4 md:p-10 font-sansNarrow text-gold"
        >
          <div className="place-self-center">
            {/* <h1 className="text-3xl">Dear, {customerName}</h1> */}
            <StaticImage
              // layout="fullWidth"
              src="../images/blackGold/coupleImg.jpg"
              alt="coupleImg"
            // width={320}
            ></StaticImage>
          </div>
          <motion.div
            variants={{
              visible: { opacity: 1, transition: { type: 'tween', duration: 2 } },
              hidden: { opacity: 0 },
            }}
            className="flex flex-col justify-evenly"
          >
            <div className="text-center">
              <h1 className="font-greatVibe text-5xl">Tommy</h1>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-greatVibe">&</h1>
            </div>
            <div className="text-center">
              <h1 className="font-greatVibe text-5xl">Cindy</h1>
            </div>
            <div className="text-center">
              <StaticImage src="../images/blackGold/ornament-small.png"
                alt="bunga"
              ></StaticImage>
              <h1 className="text-xl md:text-3xl">To : {decodeURI(customerName)}</h1>
            </div>
            <div className="mt-6 text-center">
              <button onClick={closeWelcomePopUp} className="rounded-xl font-bold p-2  w-3/4 md:w-1/4 text-black" style={{ backgroundColor: '#fdbd00eb' }}>Open Invitation</button>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /**
        * Main Screen
        */
        <div className="text-gold text-sm md:text-xl font-sansNarrow bg-bodyBlack overflow-hidden">
          <MusicPlayer song={song}></MusicPlayer>
          {/* <StaticImage src="../images/blackGold/body-bg.jpg"
                alt="bunga" layout="fullWidth" className="h-full"
              ></StaticImage> */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center md:h-screen">
            <div className="grid grid-cols-2">
              <div className="col-span-2">
                <StaticImage src="../images/photo-4.jpg"
                  alt="bunga" layout="constrained"
                  // bgImageStyle={{ objectFit: 'cover' }}
                  aspectRatio={4 / 3}
                ></StaticImage>
              </div>
              <div className="">
                <StaticImage src="../images/photo-1.jpg"
                  alt="bunga" layout="constrained"
                  aspectRatio={3 / 2}
                // bgImageStyle={{ objectFit: 'cover' }}

                ></StaticImage>
              </div>
              <div className="">
                <StaticImage src="../images/photo-2.jpg"
                  alt="bunga" layout="constrained"
                  aspectRatio={3 / 2}
                // bgImageStyle={{ objectFit: 'cover' }}
                ></StaticImage>
              </div>
            </div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { opacity: 1, transition: { duration: 3, delay: 0.5, type: "tween" } },
                hidden: { opacity: 0 }
              }}
              className="flex flex-col justify-center space-y-10 mt-8 relative"
            >
              <StaticImage src="../images/blackGold/daun-emas-kanan.png"
                alt="bunga" width={100} height={100}
                style={{ position: 'absolute', left: 0, top: 0 }}
              ></StaticImage>
              <div className="flex flex-col">
                <h1 className="font-greatVibe text-5xl md:text-8xl mb-2">Tommy</h1>
                <h3 className="text-white font-bold">Putra ketiga dari <br></br>Bapak & Ibu Hock</h3>
              </div>
              <div className="flex flex-col">
                <h1 className="text-5xl font-greatVibe">&</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="font-greatVibe text-5xl md:text-8xl mb-2 ">Cindy</h1>
                <h3 className="text-white font-bold">Putri ketiga dari <br></br>Bapak & Ibu Seng</h3>
              </div>
              <StaticImage src="../images/blackGold/daun-emas-kiri.png"
                alt="bunga" width={100} height={100} layout="fixed"
                style={{ position: 'absolute', right: 0, bottom: 10 }}
              ></StaticImage>
            </motion.div>
          </div>
          <div className="text-center mb-2 md:mt-4">
            <StaticImage src="../images/blackGold/ornament-small.png"
              alt="bunga"
            ></StaticImage>
            <div className="text-center px-4 md:col-span-3 self-center">
              "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
            </div>
          </div>
          <div>
            <StaticImage src="../images/couple4.jpg"
              alt="bunga"
              layout="fullWidth"
            ></StaticImage>
          </div>

          <div className="flex flex-col mt-8 p-4">
            <div className="text-center">
              <h1 className="font-greatVibe text-5xl">Save the Date</h1>
            </div>
            <div id="frame" className="flex flex-col">
              <div className="text-center">
                <StaticImage src="../images/blackGold/ornament-top.png"
                  alt="bunga"
                ></StaticImage>
              </div>
              <MotionBox
                className=""
                variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
              >
                <div className="text-center relative">
                  <StaticImage src="../images/blackGold/daun-emas-kanan.png"
                    alt="bunga" width={75} height={75} layout="fixed"
                    style={{ position: 'absolute', left: 0, top: 0 }}
                  ></StaticImage>
                  <h1 className="font-bold text-white text-xl md:text-4xl mb-4">Wedding Ceremony</h1>
                  <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                  <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                    <div className="m-auto flex rounded-xl text-black w-max mt-2" style={{ padding: '10px 10px 5px 10px', backgroundColor: '#fdbd00eb' }}>
                      <div className="mr-2">
                        <span style={{
                          fontFamily: 'Material Icons', fontSize: '18px'
                        }}>place</span>
                      </div>
                      <div>
                        <span>Petunjuk Lokasi</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-10 relative">
                  <h1 className="font-bold text-white text-xl md:text-4xl mb-4">Wedding Reception</h1>
                  <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                  <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                    <div className="m-auto flex rounded-xl text-black w-max mt-2" style={{ padding: '10px 10px 5px 10px', backgroundColor: '#fdbd00eb' }}>
                      <div className="mr-2">
                        <span style={{
                          fontFamily: 'Material Icons', fontSize: '18px'
                        }}>place</span>
                      </div>
                      <div>
                        <span>Petunjuk Lokasi</span>

                      </div>
                    </div>
                  </a>
                  <StaticImage src="../images/blackGold/daun-emas-kiri.png"
                    alt="bunga" width={75} height={75} layout="fixed"
                    style={{ position: 'absolute', right: 0, bottom: 10 }}
                  ></StaticImage>
                </div>
              </MotionBox>

              <div className="text-center">
                <StaticImage src="../images/blackGold/ornament-bottom.png"
                  alt="bunga"
                ></StaticImage>
              </div>
            </div>
          </div>

          <MotionBox
            className="px-4"
            variants={{ visible: { x: 0 }, hidden: { x: '-100vw' } }}
          >


            <div className="flex justify-center mb-4">
              <h1 className="font-bold text-white text-xl md:text-4xl">Protokol Covid-19</h1>
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

          <div className="p-8">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold text-white text-xl md:text-4xl">Kirim Dana</h2>
            </div>
            <div className="flex justify-center mb-4 ">
              <span className="text-center">Sebelumnya, terimakasih atas perhatian dan bentuk tanda kasih Bapak/Ibu/Saudara/i untuk kami. Silahkan kirimkan dana melalui transfer rekening berikut :</span>
            </div>
            <div className="flex justify-center mb-4 ">
              <StaticImage className="float-left" src="../images/qr-dummy.jpeg"
                width={150}
                height={150}
                alt="bottom"></StaticImage>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white text-xl md:text-4xl text-center">Countdown</h1>
            <Countdown setReminder='' color='gold'></Countdown>

          </div>
          <div className="p-8 mb-4">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold text-white text-xl md:text-4xl">Wishes Box</h2>
            </div>
            <div className="w-full max-w-sm m-auto" >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name</label>
                </div>
                <div className="md:w-2/3">
                  <input type="text" name="name" onChange={handleInputChange} value={senderName}
                    className="appearance-none border-2 border-gold rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gold"></input>
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Wishes</label>
                </div>
                <div className="md:w-2/3">
                  <input type="textarea" name="message" onChange={handleInputChange} value={message}
                    className="appearance-none border-2 border-gold rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gold0"
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
                  className="shadow hover:bg-white text-black focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
                  type="button"
                  style={{ backgroundColor: '#fdbd00eb' }}
                  onClick={sendWishes} >
                  Send Wishes</button>
              </div>
            </div>
          </div>
          <div className="w-3/4 mx-auto my-4 border-2 overflow-y-scroll bg-white bg-opacity-40" style={{ height: '300px', borderColor: '#ffdc73' }}>
            {
              inboxes.map((inbox, index) => {
                return (<div key={inbox.name} className="p-2 mb-2">
                  <span className="font-black">{inbox.message}</span>
                  <br></br>
                  <span className="font-bold text-sm">{inbox.name}</span>
                </div>)
              })
            }
          </div>
          <div>
            <h1 className="font-bold text-xl md:text-4xl text-white mb-4 text-center">Gallery</h1>
            <PhotoAlbum color="black"></PhotoAlbum>

          </div>
          <Footer color="white"></Footer>
        </div>)
      }
    </>
  )
}

export default BlackGold
