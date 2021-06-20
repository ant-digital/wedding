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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import MusicPlayer from "$components/MusicPlayer";
import { Parallax } from 'react-parallax';
import bg from '../images/sageGreen/body-bg.jpg'
import bgWelcome from '../images/sageGreen/welcome-bg.jpg'



const SageGreenV2 = (props) => {

  const [showWelcomePopUp, setShowWelcomePopUp] = useState(true)
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
    <SimpleReactLightbox>

      {showWelcomePopUp ? (
        /**
         * Welcome Popup ( 1st Screen )
        */
        <div className="flex flex-col w-screen justify-center h-screen bg-cover p-14 font-sansNarrow" style={{backgroundImage:`url(${bgWelcome})`}}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className=""
          >
            <div className="text-center">
              {/* <h1 className="text-3xl">Dear, {props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}</h1> */}
              <h2 className="text-2xl" >You are invited to the wedding of</h2>
            </div>
            <div className="text-left pt-4">
              <h1 className="font-greatVibe text-5xl text-sageGreen">Tommy</h1>
            </div>
            <div className="text-center">
              <StaticImage src="../images/sageGreen/frame-foto-pengantin.webp"
                alt="bunga" height={320}
              ></StaticImage>
            </div>
            <div className="text-right">
              <h1 className="font-greatVibe text-5xl text-sageGreen">Cindy</h1>
            </div>
            <div className="text-center">
              <StaticImage src="../images/sageGreen/ornament.png"
                alt="bunga"
              ></StaticImage>
              <h1 className="">To : Mr Hock and Family</h1>
            </div>
            <div className="mt-6 text-center">
              <button onClick={closeWelcomePopUp} className="rounded-xl font-bold p-2 w-3/4 md:w-1/4 text-white bg-green-700">Open Invitation</button>
            </div>
          </motion.div>
        </div>
      ) : (
        /**
        * Main Screen
        */
        <div className="text-sm w-screen h-full bg-contain font-sansNarrow" style={{backgroundImage:`url(${bg})`}}>
          {/* <MusicPlayer song={song}></MusicPlayer> */}
          <div className="grid grid-cols-1 text-center" >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 7 }}
              className="text-center p-8 text-black md:col-span-3 self-center text-sm"
            >
              "Demikianlah mereka bukan lagi dua, melainkan satu. <br></br>Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
            </motion.div>
            <div className="flex flex-col md:flex-row justify-center gap-10">
              <div className="flex flex-col">
                <StaticImage src="../images/sageGreen/bride.webp" objectFit="contain"
                  alt="bride" className="my-4"
                ></StaticImage>
                <h1 className="font-greatVibe text-5xl text-sageGreen">Tommy</h1>
                <h3>Putra ketiga dari <br></br>Bapak & Ibu Hock</h3>
              </div>
              <div className="flex flex-col md:pt-32">
                <h1 className="text-5xl font-greatVibe text-sageGreen">&</h1>
              </div>
              <div className="flex flex-col">
                <StaticImage src="../images/sageGreen/groom.webp"
                  alt="groom" className="my-4" objectFit="contain"
                ></StaticImage>
                <h1 className="font-greatVibe text-5xl text-sageGreen">Cindy</h1>
                <h3>Putri ketiga dari <br></br>Bapak & Ibu Seng</h3>
              </div>
            </div>

          </div>
          <div className="flex flex-col mt-4 bg-white bg-opacity-40 mx-4 p-4">
            <div className="text-center mb-4">
              <h1 className="font-greatVibe text-5xl text-sageGreen">Save the Date</h1>
            </div>
            <div id="frame" className="bg-frameGreen flex flex-col space-y-10 bg-cover justify-center p-14">
              <div className="text-center text-sm">
                <h1 className="text-sageGreen font-bold">Wedding Ceremony</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                  <div className="m-auto flex border-2 rounded-xl text-white text-sm w-max bg-green-700" style={{ padding: '10px 10px 5px 10px' }}>
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
              <div className="text-center text-sm">
                <h1 className="text-sageGreen font-bold">Wedding Reception</h1>
                <p>Saturday, 06 May 2021 <br></br>08:00 WIB - end <br></br>JW Marriot</p>
                <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                  <div className="m-auto flex border-2 rounded-xl text-white text-sm w-max bg-green-700" style={{ padding: '10px 10px 5px 10px' }}>
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
            </div>

            {/* <div id="hello" style={{position:'absolute',top:'20px'}}>
              <StaticImage src="../images/sageGreen/frame.png"
                  alt="frame"
                >
                </StaticImage>
              </div> */}

          </div>
          <div className="p-4 mt-4">
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
                  <h2 className="font-bold text-sageGreen text-xl">Protokol Covid-19</h2>
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
                  <h2 className="font-bold text-sageGreen">Kirim Dana</h2>
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
          <div>
            <h1 className="ont-bold text-sageGreen text-xl md:text-4xl text-center">Countdown</h1>
            <Countdown setReminder='' color='sageGreen'></Countdown>
          </div>
          <div className="p-8 mb-4">
            <div className="flex justify-center mb-4">
              <h2 className="font-bold text-sageGreen">Wishes Box</h2>
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
                  className="shadow bg-green-700 hover:bg-white  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-sm"
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
        </div>)
      }
      {/* </div> */}
    </SimpleReactLightbox>
  )
}

export default SageGreenV2
