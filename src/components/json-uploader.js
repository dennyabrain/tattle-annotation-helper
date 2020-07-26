import React, { useCallback } from "react"
import Dropzone from "react-dropzone"
import { Box } from "grommet"
/**
 * @author
 * @function JsonUploader
 **/

const JsonUploader = () => {
  const fileHandler = acceptedFiles => {
    console.log("here")
    console.log(acceptedFiles)
    const reader = new FileReader()

    reader.onabort = () => console.log("file reading was aborted")
    reader.onerror = () => console.log("file reading has failed")
    reader.onload = () => {
      // Do whatever you want with the file contents
      const string = reader.result
      const jsonObj = JSON.parse(string)
      console.log(jsonObj)
    }
    reader.readAsText(acceptedFiles[0])
  }

  return (
    <Dropzone onDrop={fileHandler}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  )
}

export default JsonUploader
