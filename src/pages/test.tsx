
import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import 'react-h5-audio-player/lib/styles.css';
// import song from '../song.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import SimpleReactLightbox from 'simple-react-lightbox'
import { motion, useAnimation } from "framer-motion"
import { InView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import bg from '../images/blackGold/body-bg.jpg'
import back from '../images/unsplash.jpg'


const BlackGoldV2 = (props) => {

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
    /**
    * Main Screen
    */
    <div className="text-gold text-sm md:text-xl font-sansNarrow bg-contain flex flex-col" style={{backgroundImage:`url(${back})`}}>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center">
        <div className="flex flex-col justify-center space-y-10 mt-8">
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
        </div>
      </div>
      <div className="text-center">
        <StaticImage src="../images/blackGold/ornament-small.png"
          alt="bunga"
        ></StaticImage>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="text-center px-4 md:col-span-3 self-center"
        >
          "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
        </motion.div>
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
          <div className="text-center">
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
          <div className="text-center mt-10">
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
          </div>
          <div className="text-center">
            <StaticImage src="../images/blackGold/ornament-bottom.png"
              alt="bunga"
            ></StaticImage>
          </div>
        </div>
      </div>
      <div className="px-4">
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
          </motion.div>
        </InView>

      </div>

      <div className="p-4">
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
          </motion.div>
        </InView>
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
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlackGoldV2
