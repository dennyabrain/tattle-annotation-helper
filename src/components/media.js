import React from "react"
import { Box, Image, Video } from "grommet"

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
      <Video controls="over" fit="contain">
        <source key="video" src={url} type="video/mp4" />
      </Video>
    </Box>
  )
}

export default Media
