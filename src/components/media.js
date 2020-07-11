import React from "react"
import { Image, Video } from "grommet"

/**
 * @author
 * @function Media
 **/

const Media = ({ type, url }) => {
  return type === "image" ? (
    <Image fit="contain" src={url} fill={true} />
  ) : (
    <Video controls="over" fit="contain">
      <source key="video" src={url} type="video/mp4" />
    </Video>
  )
}

export default Media
