import React, { useState } from "react"
import { Link } from "gatsby"
import { CSVReader } from "react-papaparse"
import Posts from "../components/posts"

const IndexPage = () => {
  const [input, setInput] = useState([])

  const handleOnDrop = data => {
    setInput(data)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = data => {}

  return (
    <div>
      <h1>Annotation Sheet</h1>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        noDrag
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Click to upload.</span>
      </CSVReader>
      <Posts posts={input} />
    </div>
  )
}

export default IndexPage
