import React from "react"
import { Box, Heading, Button, Text } from "grommet"

const PostNavigation = ({
  decrementPage,
  incrementPage,
  postId,
  statusLabel,
}) => (
  <Box direction={"row"} gap={"medium"} align={"center"}>
    <Button label="previous" onClick={decrementPage} />
    <Heading level={3} margin={"none"}>
      {postId}
    </Heading>

    <Button label="next" onClick={incrementPage} />
    <Text color={"neutral-3"}>{statusLabel}</Text>
  </Box>
)

export default PostNavigation
