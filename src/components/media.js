import React from "react"
import { Box, Image, Video } from "grommet"
import ReactPlayer from "react-player"

/**
 * @author
 * @function Media
 **/

const Media = ({ type, url }) => {
  return type === "image" ? (
    <Box fill={true}>
      <Image fit="contain" src={url} fill={true} />
    </Box>
  ) : (
    <Box fill={true}>
      <ReactPlayer url={url} controls={true} width={"100%"} height={"100%"} />
    </Box>
  )
}

export default Media
