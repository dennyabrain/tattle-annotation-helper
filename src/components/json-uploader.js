import React, { useCallback } from "react"
import Dropzone from "react-dropzone"
import { Box } from "grommet"
/**
 * @author
 * @function JsonUploader
 **/

const JsonUploader = ({ onFileLoad }) => {
  const fileHandler = acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log("file reading was aborted")
    reader.onerror = () => console.log("file reading has failed")
    reader.onload = () => {
      // Do whatever you want with the file contents
      const string = reader.result
      const jsonObj = JSON.parse(string)
      // console.log(jsonObj)
      onFileLoad(jsonObj)
    }
    reader.readAsText(acceptedFiles[0])
  }

  return (
    <Dropzone onDrop={fileHandler}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <Box
            {...getRootProps()}
            border={{ style: "dashed", size: "small" }}
            round={"small"}
            pad={"medium"}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop or click to select annotation file</p>
          </Box>
        </section>
      )}
    </Dropzone>
  )
}

export default JsonUploader
