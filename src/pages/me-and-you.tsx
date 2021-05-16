import { StaticImage } from "gatsby-plugin-image"
import React, { useEffect, useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../song.mp3'
import PhotoAlbum from "$components/PhotoAlbum";
import Countdown from "$components/Countdown"
import SimpleReactLightbox from 'simple-react-lightbox'
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import QRCode from "react-qr-code";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MeAndYou = (props) => {
  const [show, setShow] = useState(false)
  const [customerName, setCustomerName] = useState("")

  const controls = useAnimation();
  const { ref, inView } = useInView();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  function enter() {
    setShow(!show)
    setCustomerName(props.location.search ? props.location.search.split('=')[1] : '')
  }
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <SimpleReactLightbox>
      <div className="text-xl">
        {show ? (
          <div className="flex flex-col justify-center text-center w-screen fixed h-screen bg-white z-0">
            <div>
              <h1 className="font-greatVibe text-3xl mb-3">Welcome</h1>
            </div>
            <div>
              <h1 className="font-greatVibe text-6xl">{props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}</h1>
              <button onClick={enter} className="bg-red-500 p-4">Enter</button>
            </div>
            <div className="place-self-center mt-8">
              {
                props.location.search ? (
                  <QRCode size={128} value={props.location.search ? window.decodeURIComponent(props.location.search.split('=')[1]) : ''}></QRCode>
                ) : ('')
              }
            </div>

          </div>
        ) : (<>
          <div className="flex flex-col justify-center text-center h-screen" style={{ backgroundColor: '#e8e8e8' }}>
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
          </div>
          <div className="bg-gray-200 p-4 mb-4 font-gab">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 2 }}
            >
              <div className="flex justify-center mb-4">
                <h2 className="border-b border-black font-bold">Protokol Covid</h2>
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
          </div>
          <div>
            <p className="text-center px-4 font-gab">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
              >
                "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
            </motion.div>
              <br></br>
            Matius 19:6 TB
            <br></br>
            Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih, indah saat Dia mempersatukan putra-putri kami dalam suatu ikatan pernikahan.
            <br></br><br></br>
            Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia Tuhan, kami mengundang Bapak/ Ibu/ Saudara/ i untuk menghadiri Resepsi Pernikahan putra-putri kami yang akan diselenggarakan pada :			</p>
          </div>
          <div className="flex justify-center mt-4">
            <div style={{ backgroundColor: '#e7e5d7' }} className="text-center w-screen">
              <StaticImage src="../images/floral+7+top-right.png"
                width={150}
                height={150}
                className="float-right"
                alt="top"
              ></StaticImage>
              <p className="text-center" style={{ marginTop: '150px' }} >Sabtu, 6 Oktober 2021 </p>
              <p className="text-center text-md">1.00 Wita - Selesai</p>
              <p className="text-center text-md font-gab">The Apurva Kempinski Bali</p>
              <a href="https://www.google.com/maps/place/The+Apurva+Kempinski+Bali/@-8.8285465,115.2133893,17z/data=!3m1!4b1!4m8!3m7!1s0x2dd25cc0e01a2dfb:0x486d1b655b87ed9c!5m2!4m1!1i2!8m2!3d-8.8285465!4d115.2155844?hl=en-US">
                <div className="m-auto flex bg-gray-200 border-2 rounded-xl text-white text-sm w-max" style={{ backgroundColor: '#b89768', padding: '10px 10px 5px 10px' }}>
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
              <StaticImage className="float-left" src="../images/floral+7+bot-left.png"
                width={150}
                height={150}
                alt="bottom"></StaticImage>
            </div>
          </div>
          <div className="bg-gray-200 p-4 mb-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 2 }}
            >
              <div className="flex justify-center mb-4">
                <h2 className="border-b border-black font-bold">Kirim Dana</h2>
              </div>
              <div className="flex justify-center mb-4 ">
                <span className="text-center text-xs">Sebelumnya, terimakasih atas perhatian dan bentuk tanda kasih Bapak/Ibu/Saudara/i untuk kami. Silahkan kirimkan dana melalui transfer rekening berikut :</span>
              </div>
              <div className="flex justify-center mb-4 ">
                <StaticImage className="float-left" src="../images/qr-dummy.jpeg"
                  width={150}
                  height={150}
                  alt="bottom"></StaticImage>
              </div>
            </motion.div>
          </div>
            <Countdown></Countdown>



          <Slider dots="true"
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
          </Slider>
          {/* <PhotoAlbum></PhotoAlbum> */}
          {/* <AudioPlayer
            autoPlay
            src={song}
            onPlay={e => console.log("onPlay")}
          /> */}
        </>)
        }</div>
    </SimpleReactLightbox>
  )
}

export default MeAndYou
