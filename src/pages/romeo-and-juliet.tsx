import SEO from "$components/SEO"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import dayjs from "dayjs"

const dueDate = dayjs("2021-11-12:09:00")

const RomeoAndJuliet = () => (
  <main className={"bg-romeo-background relative xl:px-28"}>
    <SEO title={"Romeo and Juliet"}>
      <link
        rel="preload"
        href="/fonts/files/eb-garamond-latin-400-normal.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/files/eb-garamond-latin-700-normal.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </SEO>
    <p className="text-xl text-romeo-text font-bold font-romeo text-center mx-auto px-8 pt-8 block md:hidden opacity-70">
      Pernikahan
    </p>
    <h1 className="text-4xl text-romeo-text font-bold font-romeo text-center mx-auto px-8 block md:hidden">
      Romeo & Juliet
    </h1>
    <div className="fixed right-0 top-0 flex-col items-center p-16 font-romeo hidden xl:flex">
      <p>{dueDate.date()}</p>
      <p>/</p>
      <p>{dueDate.month() + 1}</p>
    </div>
    <div className="fixed left-0 top-0 flex-col items-center p-16 font-romeo hidden xl:flex">
      <p>R</p>
      <p>/</p>
      <p>J</p>
    </div>
    <div className="fixed text-md origin-top-left transform -rotate-90 left-0 bottom-0 flex-col items-center m-16 font-romeo hidden xl:flex">
      Denpasar, Bali
    </div>
    <div className={"max-w-7xl mx-auto"}>
      <div className={"md:flex"}>
        <div className={`relative p-8 md:pt-16`}>
          <StaticImage
            src="../images/photo-1.jpg"
            alt={""}
            placeholder="blurred"
            layout={"constrained"}
            width={700}
          />
        </div>

        <div className="flex flex-col items-center px-16 mx-auto hidden md:flex md:mt-64">
          <p className="pb-4 text-2xl font-romeo text-romeo-text">Pernikahan</p>

          <h1 className="text-7xl text-romeo-text font-bold font-romeo text-center hidden md:block">
            Romeo <br />&<br /> Juliet
          </h1>
        </div>
      </div>
    </div>

    <div>
      <div className={"max-w-7xl mx-auto px-8 pt-8 pb-4 text-romeo-text"}>
        Tanggal
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("HH.mm, dddd")}
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("DD MMMM ")}
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("YYYY")}
      </div>
    </div>

    <div className={"flex flex-col md:flex-row max-w-7xl mx-auto p-8 mt-16"}>
      <div className={"pb-8 pr-8"}>
        <div className={"pb-4 text-romeo-text"}>Lokasi</div>
        <div className="font-bold text-4xl font-romeo text-romeo-text ">
          The Apurva Kempinski
        </div>
        <div className="font-bold text-4xl font-romeo text-romeo-text">
          Denpasar, Bali
        </div>
      </div>

      <div className={"prose max-w-sm ml-auto"}>
        <p className={"text-xl font-romeo"}>
          "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa
          yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
        </p>
        <p className={"font-romeo opacity-80"}>Matius 19:6 TB</p>
        <p>
          Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia
          mempertemukan, indah saat Dia menumbuhkan kasih, indah saat Dia
          mempersatukan putra-putri kami dalam suatu ikatan pernikahan.
        </p>

        <p>
          Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
          Tuhan, kami mengundang Bapak/ Ibu/ Saudara/ i untuk menghadiri Resepsi
          Pernikahan putra-putri kami yang akan diselenggarakan pada :
        </p>
      </div>
    </div>

    <div
      className={
        "max-w-7xl mx-auto p-8 flex flex-col-reverse md:flex-row mt-16"
      }
    >
      <section className="prose max-w-md mt-16 md:mt-32">
        <h2 className={"font-romeo"}>Protokol Covid</h2>

        <p>
          Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami
          harapkan kedatangan para tamu undangan agar menjalankan protokol yang
          berlaku.
        </p>

        <div className="flex items-center">
          <StaticImage
            src="../images/distance.png"
            alt="Picture of the author"
            width={40}
            height={40}
            className={"mr-2"}
          />
          <p>Saling Menjaga Jarak di Dalam Acara</p>
        </div>

        <div className="flex items-center">
          <StaticImage
            src="../images/masker.png"
            alt="Picture of the author"
            width={40}
            height={40}
            className={"mr-2"}
          />
          <p>Wajib Menggunakan Masker</p>
        </div>

        <div className="flex items-center">
          <StaticImage
            src="../images/namaste.png"
            alt="Picture of the author"
            width={40}
            height={40}
            className={"mr-2"}
          />
          <p>Menggunakan Salam Namaste</p>
        </div>

        <div className="flex items-center">
          <StaticImage
            src="../images/wash.png"
            alt="Picture of the author"
            width={40}
            height={40}
            className={"mr-2"}
          />
          <p>Mencuci Tangan dan Menggunakan Hand Sanitizer</p>
        </div>
      </section>

      <StaticImage
        src="../images/photo-2.jpg"
        alt={""}
        placeholder="blurred"
        layout={"constrained"}
        width={700}
        className={"md:ml-32"}
      />
    </div>

    <div className={"max-w-7xl mx-auto p-8 mt-32 "}>
      <h2 className={"font-romeo text-7xl mb-16"}>Gallery</h2>

      <div className={"flex flex-wrap justify-between"}>
        <StaticImage
          src="../../static/A001.jpg"
          alt="Beach and waves"
          className={"mb-8 md:mb-0 md:w-1/4"}
        />
        <StaticImage
          src="../../static/A002.jpg"
          alt="Waves"
          className={"mb-8 md:mb-0 md:w-1/4"}
        />
        <StaticImage
          src="../../static/A003.jpg"
          alt="Under the water"
          className={"mb-8 md:mb-0 md:w-1/4"}
        />
        <StaticImage
          src="../../static/A004.jpg"
          alt="Canyon night"
          className={"mb-8 md:mb-0 md:w-1/4"}
        />
        <StaticImage
          src="../../static/A005.jpg"
          alt="Valley"
          className={"mb-8 md:mb-0 md:w-1/4"}
        />
      </div>
    </div>
  </main>
)

export default RomeoAndJuliet
