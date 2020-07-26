import React, { useState, useEffect, useRef } from "react"
import { Box, Heading } from "grommet"
import PostNavigation from "./post-navigation"
import Post from "./post"

/**
 * @author
 * @function Posts
 **/

const Posts = ({ posts, count }) => {
  const [postNum, setCurrentPostNum] = useState(0)
  const [posts, setPosts] = useState(posts)
  const postComponent = useRef(null)

  const onSave = () => {}

  const nextPressed = () => {
    const newNum = postNum === count ? count : postNum + 1
    setCurrentPostNum(newNum)
    // postComponent.current.reset()
  }

  const prevPressed = () => {
    const newNum = postNum === 0 ? 0 : postNum - 1
    setCurrentPostNum(newNum)
    // postComponent.current.reset()
  }
  return (
    <Box pad={"small"}>
      <Box gap={"medium"}>
        <Heading level={2}> Posts </Heading>
        <PostNavigation
          incrementPage={nextPressed}
          decrementPage={prevPressed}
          postId={posts[postNum]["metadata"]["_id"]}
          statusLabel={`${postNum}/${count}`}
        />

        <Post
          metadata={posts[postNum].metadata}
          annotation={posts[postNum].annotation}
          ref={postComponent}
        />
      </Box>
    </Box>
  )
}

export default Posts
