import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../beautiful-in-white.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import QRCode from "react-qr-code";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useInboxes from "src/useInboxes";
import { mutate } from "swr";
import Footer from "$components/Footer";
import MusicPlayer from "$components/MusicPlayer";
import { motion, useAnimation } from 'framer-motion'
import { InView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const controls2 = useAnimation();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(props.location.search)
    const guest = queryParams.get("u")
    setCustomerName(guest ? guest.replace(/[_]/ig, ' ') : 'Guest')
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
    mutate(`https://us-central1-bidding-mobil.cloudfunctions.net/function-1/wishes`, [...inboxes, {
      name: customerName,
      message: message
    }], false)
    await saveAttendance()
    mutate(`https://us-central1-bidding-mobil.cloudfunctions.net/function-1/wishes`)
    setSenderName("")
    setMessage("")
  }

  return (
    <>

      {showWelcomePopUp ? (
        /**
         * Welcome Popup ( 1st Screen )
        */

        <div className="max-h-screen">

          <StaticImage
            style={{
              width: '100vw',
              height: 'auto', position: 'fixed', top: 0,
              zIndex: 1
            }}
            src="../images/hanging-flower.png"
            formats={["auto", "webp", "avif"]}
            objectFit='cover'
            alt=''
          />
          <div
            style={{
              placeItems: "center",
              display: "flex",
              position: 'fixed',
              top: '16%',
              zIndex: 1
            }}
          >
            <div className="flex w-screen justify-center font-sansNarrow">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}>
                <div className="text-center">
                  {/* <h1 className="text-3xl">Dear, {props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}</h1> */}
                  <h2 className="text-base md:text-5xl mb-4 font-bold" >Dear {customerName} , You are invited to the wedding of</h2>
                </div>
                <div className="text-left pt-4 pl-6">
                  <h1 className="font-greatVibe text-3xl md:text-8xl text-sageGreen">Christianto</h1>
                </div>
                <div className="text-center">
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
                </div>
                <div className="text-right pr-6">
                  <h1 className="font-greatVibe text-3xl md:text-8xl text-sageGreen">Kezia</h1>
                </div>
                <div className="text-center">
                  <StaticImage src="../images/sageGreen/ornament.png"
                    alt="bunga"
                  ></StaticImage>
                </div>
                <div className="mt-4 text-center">
                  <button onClick={closeWelcomePopUp} className="rounded-xl font-bold p-2  w-3/4 md:w-1/2 text-white bg-green-700">Open Invitation</button>
                </div>
              </motion.div>
            </div>
          </div>
          <StaticImage
            style={{
              width: '100vw',
              height: 'auto', position: 'fixed', bottom: 0,
            }}
            alt=""
            src="../images/forest.png"
            formats={["auto", "webp", "avif"]}
            objectFit='cover'
          />

        </div >
      ) : (
        /**
        * Main Screen
        */
        <div className="text-sm md:text-xl font-sansNarrow overflow-hidden bg-bodyGreen bg-cover">
          {/* <MusicPlayer song={song}></MusicPlayer> */}
          <div className="grid grid-cols-1 text-center md:h-screen">
            <div className="mt-4">
              <h1 className="font-romeo text-sageGreen text-3xl md:text-4xl text-center mb-2">COUNTING DOWN TO THE BIG DAY</h1>
              <h2 className="text-sageGreen text-md md:text-4xl text-center">The clock was ticking so fast, between thrilling moments that we had never felt before. We look forward to welcoming family and friends to witness our blessing vows on a happy day.</h2>

              <Countdown setReminder='' color='sageGreen'></Countdown>
            </div>
            <div className="p-8 mb-4">
              <div className="flex justify-center mb-4">
                <h2 className="font-bold text-sageGreen text-xl md:text-4xl">Wishes Box</h2>
              </div>
              <div className="w-full max-w-sm m-auto" >

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
                    Save</button>
                </div>
              </div>
            </div>
            {/* <motion.div
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
            </motion.div> */}

          </div>
          <motion.div
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
                <p>Saturday, 18 November 2023 <br></br>08:00 WIB - end <br></br>Hotel Episode Gading Serpong</p>
                <a href="https://www.google.com/maps/dir/-6.2062592,106.8531712/hotel+episode+gading+serpong/@-6.1883929,106.6131143,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69fd94da2847cd:0xa1421103e3d49919!2m2!1d106.6202915!2d-6.2563993?hl=en-US">
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

          </motion.div>
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
          {/* <div className="p-4">
            <motion.div
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
              </motion.div> 
          </div> */}
          {/* <div className="">
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
          </div> */}
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
              inboxes.map((inbox, index) => {
                return (<div key={inbox.name} className="p-2 mb-2">
                  <span className="font-black">{inbox.message}</span>
                  <br></br>
                  <span className="text-sm">{inbox.name}</span>
                </div>)
              })
            }
          </div>
          {/* <div>
            <h1 className="font-bold text-xl md:text-4xl text-sageGreen mb-4 text-center">Gallery</h1>
            <PhotoAlbum color='green'></PhotoAlbum>
          </div> */}
          <Footer color="black"></Footer>
        </div>)
      }
    </>
  )
}

export default SageGreen
