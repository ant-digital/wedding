import SEO from "$components/SEO"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const RomeoAndJuliet = () => {
  return (
    <div>
      <SEO title={"Romeo and Juliet"} />
      <StaticImage src="../images/photo-1.jpg" alt={""} className={"w-4"} />
    </div>
  )
}

export default RomeoAndJuliet
