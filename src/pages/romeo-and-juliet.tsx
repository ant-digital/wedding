import SEO from "$components/SEO"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import dayjs from "dayjs"

const dueDate = dayjs("2021-11-12:09:00")

const RomeoAndJuliet = () => (
  <div className={"relative bg-romeo-background"}>
    <img
      className={"absolute top-96 right-0 left-0 bottom-0 w-full"}
      src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3cpath d='M -945.8968927247779%2c278 C -849.9%2c312.6 -657.9%2c455.2 -465.89689272477796%2c451 C -273.9%2c446.8 -177.9%2c251.8 14.103107275222044%2c257 C 206.1%2c262.2 302.1%2c495.4 494.10310727522204%2c477 C 686.1%2c458.6 784.92%2c180 974.1031072752221%2c165 C 1163.28%2c150 1346.82%2c354.6 1440%2c402' stroke='rgba(205%2c 201%2c 197%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -537.4188180458387%2c318 C -441.42%2c291.4 -249.42%2c179.2 -57.41881804583873%2c185 C 134.58%2c190.8 230.58%2c355.2 422.58118195416125%2c347 C 614.58%2c338.8 710.58%2c151.4 902.5811819541613%2c144 C 1094.58%2c136.6 1275.1%2c289.2 1382.5811819541614%2c310 C 1490.06%2c330.8 1428.52%2c260.4 1440%2c248' stroke='rgba(205%2c 201%2c 197%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -125.28081539758534%2c192 C -29.28%2c233.2 162.72%2c391.6 354.71918460241466%2c398 C 546.72%2c404.4 642.72%2c236.4 834.7191846024147%2c224 C 1026.72%2c211.6 1122.72%2c349.6 1314.7191846024148%2c336 C 1506.72%2c322.4 1769.66%2c145.2 1794.7191846024148%2c156 C 1819.78%2c166.8 1510.94%2c343.2 1440%2c390' stroke='rgba(205%2c 201%2c 197%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M -351.9561101655452%2c91 C -255.96%2c170 -63.96%2c489.8 128.04388983445477%2c486 C 320.04%2c482.2 416.04%2c81.8 608.0438898344548%2c72 C 800.04%2c62.2 896.04%2c396.2 1088.0438898344548%2c437 C 1280.04%2c477.8 1497.65%2c306 1568.0438898344548%2c276 C 1638.44%2c246 1465.61%2c284.8 1440%2c287' stroke='rgba(205%2c 201%2c 197%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"
      alt={""}
    />

    <main className={"relative xl:px-28"}>
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
        <div className={"md:flex md:flex-row-reverse"}>
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
            <p className="pb-4 text-2xl font-romeo text-romeo-text">
              Pernikahan
            </p>

            <h1 className="text-7xl text-romeo-text font-bold font-romeo text-center hidden md:block">
              Romeo <br />&<br /> Juliet
            </h1>
          </div>
        </div>
      </div>

      <div className={"flex flex-col md:flex-row max-w-7xl mx-auto p-8"}>
        <div className={"prose max-w-md"}>
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
            Dengan segala kerendahan hati dan dengan ungkapan syukur atas
            karunia Tuhan, kami mengundang Bapak/ Ibu/ Saudara/ i untuk
            menghadiri Resepsi Pernikahan putra-putri kami yang akan
            diselenggarakan pada:
          </p>
        </div>

        <div className={"pb-8 ml-auto mt-16 md:mt-64"}>
          <div>
            <div className={"pb-4 text-romeo-text"}>Tanggal</div>
            <div className="font-bold text-4xl font-romeo text-romeo-text">
              {dueDate.format("HH.mm, dddd")}
            </div>
            <div className="font-bold text-4xl font-romeo text-romeo-text">
              {dueDate.format("DD MMMM ")}
            </div>
            <div className="font-bold text-4xl font-romeo text-romeo-text">
              {dueDate.format("YYYY")}
            </div>
          </div>

          <div className={"mt-16"}>
            <div className={"pb-4 text-romeo-text"}>Lokasi</div>
            <div className="font-bold text-4xl font-romeo text-romeo-text ">
              The Apurva Kempinski
            </div>
            <div className="font-bold text-4xl font-romeo text-romeo-text">
              Denpasar, Bali
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 flex flex-col-reverse md:flex-row md:mt-16">
        <section className="prose max-w-sm mt-16 md:mt-32">
          <h2 className={"font-romeo"}>Protokol Covid</h2>

          <p>
            Dalam upaya mengurangi penyebaran Covid 19 pada masa pandemi, kami
            harapkan kedatangan para tamu undangan agar menjalankan protokol
            yang berlaku.
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
          className={"lg:ml-32"}
        />
      </div>

      <div className={"max-w-7xl mx-auto p-8 py-32 "}>
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
  </div>
)

export default RomeoAndJuliet
