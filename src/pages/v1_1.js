import React, { useState } from "react"
import { Grommet, Box } from "grommet"
// import { CSVReader } from "react-papaparse"
import Posts from "../components/posts"
import Theme from "../components/theme"
import JsonUploader from "../components/json-uploader"
import AppLogo from "@bit/tattle-tech.core-ui.app-logo"

const IndexPage = () => {
  console.log("v 0.2")

  const [input, setInput] = useState({})

  const onFileLoad = json => {
    console.log("ithe")
    console.log(json)
    setInput(json)
  }

  return (
    <Grommet theme={Theme} full>
      <Box pad={"medium"} gap={"small"}>
        {/* <Heading level={1}>Annotation Sheet v1 </Heading> */}
        <AppLogo name={"Annotation Sheet v1.1"} />
        <JsonUploader onFileLoad={onFileLoad} />
        {Object.keys(input).length !== 0 && (
          <Posts posts={input} count={Object.keys(input).length - 1} />
        )}
      </Box>
    </Grommet>
  )
}

export default IndexPage
