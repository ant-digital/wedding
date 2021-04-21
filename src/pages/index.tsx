import { Link } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <main>
      wedding
      <ul>
        <li>
          <Link to={"/romeo-and-juliet"}>Romeo & Juliet</Link>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage
