import React, { useState, useEffect, useRef } from "react"
import { Box, Heading, Button } from "grommet"
import PostNavigation from "./post-navigation"
import Post from "./post"
import { save } from "save-file"
/**
 * @author
 * @function Posts
 **/

const Posts = ({ posts, count }) => {
  const [postNum, setCurrentPostNum] = useState(0)
  const [activePosts, setActivePosts] = useState(posts)

  const onSave = () => {
    // console.log(activePosts)
    console.log(JSON.stringify(activePosts))
    // console.log(unescape(encodeURIComponent(JSON.stringify(activePosts))))
    save(JSON.stringify(activePosts), "output.json")
  }

  const updateAnnotation = (postIndex, inputType, value) => {
    console.log("changed", { postIndex, inputType, value })
    setActivePosts({
      ...activePosts,
      [postIndex]: {
        ...activePosts[postIndex],
        annotation: {
          ...activePosts[postIndex]["annotation"],
          [inputType]: value,
        },
      },
    })
  }

  const nextPressed = () => {
    const newNum = postNum === count ? count : postNum + 1
    setCurrentPostNum(newNum)
  }

  const prevPressed = () => {
    const newNum = postNum === 0 ? 0 : postNum - 1
    setCurrentPostNum(newNum)
  }
  return (
    <Box pad={"small"}>
      <Box gap={"medium"}>
        <Heading level={2}> Posts </Heading>
        <PostNavigation
          incrementPage={nextPressed}
          decrementPage={prevPressed}
          postId={activePosts[postNum]["metadata"]["_id"]}
          statusLabel={`${postNum}/${count}`}
        />

        <Post
          postIndex={postNum}
          metadata={activePosts[postNum].metadata}
          annotation={activePosts[postNum].annotation}
          updateAnnotation={updateAnnotation}
        />
        <PostNavigation
          incrementPage={nextPressed}
          decrementPage={prevPressed}
          postId={activePosts[postNum]["metadata"]["_id"]}
          statusLabel={`${postNum}/${count}`}
        />
        <Button primary label="Save" onClick={onSave} fill={false} />
      </Box>
    </Box>
  )
}

export default Posts
