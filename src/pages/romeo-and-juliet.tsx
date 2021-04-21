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
    <div className={"max-w-7xl mx-auto"}>
      <SEO title={"Romeo and Juliet"} />

      <div className={"md:flex"}>
        <div className={`relative p-8`}>
          <StaticImage
            src="../images/photo-1.jpg"
            alt={""}
            placeholder="blurred"
            layout={"constrained"}
            width={700}
            className={"rounded-3xl shadow"}
          />
        </div>

        <div className="prose prose-2xl font-romeo text-center mx-auto p-8 md:pt-64">
          <p className={"!my-4"}>Pernikahan</p>

          <h1>
            Romeo <br />&<br /> Juliet
          </h1>

          <p className={"!my-0"}>
            {dueDate.format("YYYY MMMM DD")} <br />
            {dueDate.format("HH:mm")}
          </p>

          <div className={"flex justify-center"}>
            <p className={"mr-4"}>{countdown.days} Hari</p>
            <p>{countdown.hours} Jam</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RomeoAndJuliet
