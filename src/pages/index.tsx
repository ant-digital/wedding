import { Link } from "gatsby"
import React from "react"
import "@fontsource/great-vibes"
import "@fontsource/pt-sans-narrow"

const IndexPage = () => {
  return (
    <main className={"prose p-8"}>
      wedding
      <ul>
        <li>
          <Link to={"/romeo-and-juliet"}>Romeo & Juliet</Link>
        </li>
        <li>
        <Link to={"/me-and-you"}>Me & You</Link>
        </li>
        <li>
        <Link to={"/sage-green"}>Sage Green</Link>
        </li>
        <li>
        <Link to={"/black-gold"}>Black Gold</Link>
        </li>
        <li>
        <Link to={"/link-generator"}>Link Generator</Link>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage
