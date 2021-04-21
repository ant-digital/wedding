import { Link } from "gatsby"
import React from "react"

const IndexPage = () => {
  return (
    <main className={"prose p-8"}>
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
