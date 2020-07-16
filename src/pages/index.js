import React, { useState } from "react"
import { Grommet, Box } from "grommet"
import { CSVReader } from "react-papaparse"
import Posts from "../components/posts"
import Theme from "../components/theme"
import AppLogo from "@bit/tattle-tech.core-ui.app-logo"

const IndexPage = () => {
  const [input, setInput] = useState([])

  const handleOnDrop = data => {
    setInput(data)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err)
  }

  const handleOnRemoveFile = data => {
    setInput([])
  }

  return (
    <Grommet theme={Theme} full>
      <Box pad={"medium"} gap={"small"}>
        {/* <Heading level={1}>Annotation Sheet v1 </Heading> */}
        <AppLogo name={"Annotation Sheet v1"} />
        <Box width={"fill"} height={"small"}>
          <CSVReader
            onDrop={handleOnDrop}
            onError={handleOnError}
            noDrag
            addRemoveButton
            onRemoveFile={handleOnRemoveFile}
          >
            <span>Click to upload.</span>
          </CSVReader>
        </Box>
        <Posts posts={input} />
      </Box>
    </Grommet>
  )
}

export default IndexPage
