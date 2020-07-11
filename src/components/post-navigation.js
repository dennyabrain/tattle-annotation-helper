import React from "react"
import { Box, Heading, Button } from "grommet"

const PostNavigation = ({ decrementPage, incrementPage, postId }) => (
  <Box direction={"row"} gap={"medium"} align={"center"}>
    <Button label="previous" onClick={decrementPage} />
    <Heading level={3} margin={"none"}>
      {postId}
    </Heading>
    <Button label="next" onClick={incrementPage} />
  </Box>
)

export default PostNavigation
