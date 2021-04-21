import SEO from "$components/SEO"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/eb-garamond/400.css"
import "@fontsource/eb-garamond/700.css"
import dayjs, { Dayjs } from "dayjs"
import useCountdown from "../useCountdown"

const dueDate = dayjs("2021-12-12:09:00")

const RomeoAndJuliet = () => {
  const countdown = useCountdown(dueDate)

  return (
    <div className={"bg-romeo-background relative xl:px-28"}>
      <SEO title={"Romeo and Juliet"} />

      <p className="text-xl text-romeo-text font-bold font-romeo text-center mx-auto px-8 pt-8 block md:hidden opacity-70">
        Pernikahan
      </p>
      <h1 className="text-4xl text-romeo-text font-bold font-romeo text-center mx-auto px-8 block md:hidden">
        Romeo & Juliet
      </h1>

      <div className="fixed right-0 top-0 flex-col items-center p-16 font-romeo hidden xl:flex">
        <p>{dueDate.month()}</p>
        <p>/</p>
        <p>{dueDate.date()}</p>
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
        <div className={"md:flex items-center"}>
          <div className={`relative p-8 md:pt-16`}>
            <StaticImage
              src="../images/photo-1.jpg"
              alt={""}
              placeholder="blurred"
              layout={"constrained"}
              width={700}
            />
          </div>

          <div className="flex flex-col items-center px-16 mx-auto hidden md:flex">
            <p className="pb-4 text-2xl font-romeo text-romeo-text">
              Pernikahan
            </p>

            <h1 className="text-7xl text-romeo-text font-bold font-romeo text-center hidden md:block">
              Romeo <br />&<br /> Juliet
            </h1>
          </div>
        </div>
      </div>

      <div className={"max-w-7xl mx-auto px-8 pt-8 pb-4 font-bold mt-16"}>
        Akad Nikah
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("dddd")}
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("DD MMMM ")}
      </div>
      <div className="max-w-7xl mx-auto px-8 font-bold text-4xl font-romeo text-romeo-text">
        {dueDate.format("YYYY")}
      </div>
    </div>
  )
}

export default RomeoAndJuliet
