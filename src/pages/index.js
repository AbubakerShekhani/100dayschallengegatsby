import * as React from "react"
import HomePage from "./home"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <HomePage />      
    </main>
  )
}

export default IndexPage
