import React, { useState } from "react"
import {
  Box,
  CheckBoxGroup,
  Heading,
  Paragraph,
  Button,
  TextArea,
  RadioButtonGroup,
} from "grommet"
import Media from "./media"
import PostNavigation from "./post-navigation"
import DataTable from "./data-table"
import { save } from "save-file"
/**
 * @author
 * @function Posts
 **/

const annotationFieldOne = [
  "No",
  "Yes, Statistical Claim",
  "Yes, Descriptions of a real world events/place about noteworthy individuals.",
  "Yes, other",
]

const annotationFieldTwo = ["Yes", "No"]
const annotationFieldThree = [
  "Print/TV Media",
  "Digital Only News Outlets",
  "Digital Content Providers",
  "Anonymous/User Generated",
]
const annotationFieldFour = ["Yes ", "No "]
const annotationFieldFive = ["Yes  ", "No  "]

const POST_ID = 0
const MEDIA_TYPE = 1
const PERMALINK = 2
const TAG_NAME = 3
const MEDIA_URL = 4
const SCRAPE_TIMESTAMP = 5
const CAPTION = 6
const TEXT = 7

const Posts = ({ posts }) => {
  const [output, setOutput] = useState({})
  const [currentPost, setCurrentPost] = useState(1)

  const onSave = () => {
    console.log(output)
    save(JSON.stringify(output), "file.json")
  }

  const setUserInput = (inputType, id, value) => {
    // console.log({ inputType, id, value, output })
    setOutput({
      ...output,
      [id]: {
        ...output[id],
        [inputType]: value,
      },
    })
  }

  const incrementPage = () => {
    let newPostNum = currentPost + 1
    setCurrentPost(newPostNum)
  }

  const decrementPage = () => {
    let newPostNum = currentPost - 1
    setCurrentPost(newPostNum)
  }

  return (
    <Box pad={"small"}>
      {posts && posts[currentPost] && (
        <Box gap={"medium"}>
          <Heading level={2}> Posts </Heading>
          {/* <Button onClick={console.log({ output, posts })}> State </Button> */}
          <PostNavigation
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            postId={posts[currentPost].data[POST_ID]}
            statusLabel={`${currentPost}/${posts.length - 1}`}
          />

          <Box
            key={posts[currentPost].data[POST_ID]}
            pad={"medium"}
            background="light-1"
            direction={"column"}
            margin={{ top: "small", bottom: "small" }}
          >
            <Box direction={"row"}>
              <Box overflow={"hidden"}>
                <Box width={"medium"} height={"medium"}>
                  <Media
                    type={posts[currentPost].data[MEDIA_TYPE]}
                    url={posts[currentPost].data[MEDIA_URL]}
                  />
                </Box>
                <Box fill={true}>
                  <DataTable
                    data={{
                      permalink: posts[currentPost].data[PERMALINK],
                      tagName: posts[currentPost].data[TAG_NAME],
                      timestamp: posts[currentPost].data[SCRAPE_TIMESTAMP],
                      caption: posts[currentPost].data[CAPTION],
                      text: posts[currentPost].data[TEXT],
                    }}
                  />
                </Box>
              </Box>

              <Box
                direction={"column"}
                gap={"medium"}
                flex={true}
                margin={{ left: "small" }}
              >
                <Heading level={3} margin={"none"}>
                  Post contains a verifiable claim
                </Heading>
                <CheckBoxGroup
                  options={annotationFieldOne}
                  value={output[currentPost]}
                  onChange={e => {
                    setUserInput(
                      "field-one",
                      posts[currentPost].data[POST_ID],
                      e.value
                    )
                  }}
                />

                <Heading level={3} margin={"none"}>
                  Post contains unidentified amateur footage/photography
                </Heading>
                <RadioButtonGroup
                  name="amateur photography"
                  options={annotationFieldTwo}
                  value={output[currentPost]}
                  onChange={e => {
                    setUserInput(
                      "field-two",
                      posts[currentPost].data[POST_ID],
                      e.target.value
                    )
                  }}
                />

                <Heading level={3} margin={"none"}>
                  The visible source is
                </Heading>
                <RadioButtonGroup
                  name="visible_source"
                  options={annotationFieldThree}
                  value={output[currentPost]}
                  onChange={e => {
                    setUserInput(
                      "field-three",
                      posts[currentPost].data[POST_ID],
                      e.target.value
                    )
                  }}
                />

                <Heading level={3} margin={"none"}>
                  Memes
                </Heading>
                <Paragraph>
                  {" "}
                  ( featuring security forces, modi, religious pride, national
                  pride, political party representatives, reverential posts
                  about a profession election campaigneering related, current
                  national news ){" "}
                </Paragraph>
                <RadioButtonGroup
                  name="memes"
                  options={annotationFieldFour}
                  value={output[currentPost]}
                  onChange={e => {
                    setUserInput(
                      "field-four",
                      posts[currentPost].data[POST_ID],
                      e.target.value
                    )
                  }}
                />

                <Heading level={3} margin={"none"}>
                  Solicitation to call/ WhatsApp/ send money
                </Heading>
                <RadioButtonGroup
                  name="solicitation"
                  options={annotationFieldFive}
                  value={output[currentPost]}
                  onChange={e => {
                    setUserInput(
                      "field-five",
                      posts[currentPost].data[POST_ID],
                      e.target.value
                    )
                  }}
                />

                <TextArea
                  placeholder="Additional Notes"
                  value={output[currentPost]}
                  size={"small"}
                  onChange={event =>
                    setUserInput(
                      "annotator_notes",
                      posts[currentPost].data[POST_ID],
                      event.target.value
                    )
                  }
                />
              </Box>
            </Box>
          </Box>

          <PostNavigation
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            postId={posts[currentPost].data[POST_ID]}
          />

          <Button primary label="Save" onClick={onSave} fill={false} />
        </Box>
      )}
    </Box>
  )
}

export default Posts
