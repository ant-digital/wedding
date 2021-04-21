import { StaticImage } from "gatsby-plugin-image"
import React from "react"
const MeAndYou = () => {
  return <div className="text-2xl">
    <div className="flex flex-col justify-center text-center h-screen bg-banner-flower bg-repeat-round">
      <div>
      <h1>The wedding of</h1>
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
    </div>
    <div className="bg-gray-200 p-4 mb-4 font-gab">
      <div className="flex justify-center mb-4">
        <h2 className="border-b border-black font-bold">Protokol Covid</h2>
      </div>
      <div className="flex justify-center mb-4 ">
        <h4 className="w-500px text-center">Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami harapkan kedatangan para tamu undangan agar menjalankan protokol yang berlaku.</h4>
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
            <span className="ml-2 text-xl" style={{fontFamily:'Gabriola'}}>Menggunakan Salam Namaste</span>
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
    </div>
    <div>
      <p className="text-center px-4 font-gab">"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."<br></br> Matius 19:6 TB<br></br> Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih, indah saat Dia mempersatukan putra-putri kami dalam suatu ikatan pernikahan.<br></br><br></br> Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia Tuhan, kami mengundang Bapak/ Ibu/ Saudara/ i untuk menghadiri Resepsi Pernikahan putra-putri kami yang akan diselenggarakan pada :			</p>
    </div>
    <div className="flex justify-center mt-4">
      <div style={{ backgroundColor: '#e7e5d7' }} className="text-center w-screen">
        {/* <div className="absolute top-0 border-2 border-black"> */}
        <StaticImage src="../images/floral+7+top-right.png"
          width={150}
          height={150}
          className="float-right"
          alt="top"
        ></StaticImage>
        <h2 style={{ 'fontSize': '32px', marginTop: '130px' }}>
          Sabtu, 6 Oktober 2021<br></br>
      11.00 Wita - Selesai
      </h2>
        <p className="text-center">The Apurva Kempinski Bali</p>
        <StaticImage className="float-left" src="../images/floral+7+bot-left.png"
          width={150}
          height={150}
          alt="bottom"></StaticImage>
        {/* </div> */}
      </div>



    </div>
  </div>
}

export default MeAndYou
