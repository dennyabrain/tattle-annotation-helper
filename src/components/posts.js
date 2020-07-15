import React, { useState, useEffect } from "react"
import { Box, CheckBoxGroup, Heading, Button, TextArea, Text } from "grommet"
import { Table, TableRow, TableBody, TableCell, TableHeader } from "grommet"
import Media from "./media"
import PostNavigation from "./post-navigation"
import DataTable from "./data-table"
/**
 * @author
 * @function Posts
 **/

const annotationOptions = [
  "Any video/image of a seemingly real place/event",
  "statistical claim",
  "Descriptions of a real world events/place about noteworthy individuals.",
  "Quote attributed to a noteworthy individual",
  "Any 'non mainstream news' person/post debunking some content",
  "Government authority/ Public institutions",
  "Multilateral Organizations: WHO, UN, World Bank…",
  "Content attributed to global brands such as McKinsey, Google that put out reports.",
  "Newspaper clips (local or national) or edited recordings from a TV channel",
  "Any on ground video reportage from news outlets (TV/Digital only)",
  "Any content that comes from social media handle of a government authority",
  "Text, Image, Screenshots, Video/Image Montage, Studio reporting from Digital Outlets of Print/TV Media",
  "Text, Image, Screenshots, Montage, Studio reporting from Digital Only News Outlets  - Print, Quint, Wire, EditorJi, Inshort, Lalantop)",
  "Text, Image, Screenshots, Montage, Studio from Facebook pages or social media handles of content platform (bharat positive, logical Indian, The Better India)",
  "Predominantly text- containg verifiable news details coming from platform users or anonymous source (not opioninated). Could be accompanied by image but not focus",
  "Text, Image, Video listing suggested actions for self-improvement",
  "Text, Image, Video making a factual claim and advising/recommending action based on it.",
  "Selfie images with non-text filter",
  "Good morning messages",
  "Everyday Motivational Posts",
  "Festival wishes",
  "Romantic shayari and memes",
  "stock footage without context (must include watermark)",
  "Birthday or Wedding Wishes",
  "People speaking into the camera talking about some incident (without adding personal reflection)",
  "Generic joke not referencing an individual or community",
  "Any link that redirects to another website",
  "memes associated with security forces, modi, religious pride, national pride, political party representatives, reverential posts about a profession election campaigneering related, current national news",
  "Solicitations to subscribe/call. Or only asking to like without any factual content",
  "Religious Posts not covered in previous categories",
  "Poetry not covered in previous categories",
  "Selfie Video- People staring into the camera giving opinions about current affairs",
  "gendered memes, jokes",
  "Ambivalent- Other",
]

const POST_ID = 0
const MEDIA_TYPE = 1
const PERMALINK = 2
const TAG_NAME = 3
const MEDIA_URL = 4
const SCRAPE_TIMESTAMP = 5
const CAPTION = 6

const Posts = ({ posts }) => {
  const [output, setOutput] = useState([])
  const [currentPost, setCurrentPost] = useState(0)
  const [annotatorNotes, setAnnotatorNotes] = useState("")

  const valueChanged = (id, value) => {
    setOutput({
      ...output,
      [id]: value,
    })
  }

  const onSave = () => {
    console.log(output)
  }

  const setUserInput = (inputType, value) => {
    if (inputType === "annotator_notes") {
      setAnnotatorNotes(value)
    }
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
          <PostNavigation
            incrementPage={incrementPage}
            decrementPage={decrementPage}
            postId={posts[currentPost].data[POST_ID]}
          />

          <Box
            key={posts[currentPost].data[0]}
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
                <CheckBoxGroup
                  options={annotationOptions}
                  value={output[currentPost]}
                  onChange={e => {
                    valueChanged(posts[currentPost].data[POST_ID], e.value)
                  }}
                />

                <TextArea
                  placeholder="Additional Notes"
                  value={annotatorNotes}
                  size={"small"}
                  onChange={event =>
                    setUserInput("annotator_notes", event.target.value)
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
