import React, { useState, useEffect } from "react"
import { Box, CheckBoxGroup, Heading, Button } from "grommet"
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

const Posts = ({ posts }) => {
  const [fetching, setFetching] = useState(false)
  const [output, setOutput] = useState([])

  const valueChanged = (id, value) => {
    setOutput({
      ...output,
      [id]: value,
    })
  }

  const onSave = () => {
    console.log(output)
  }

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box pad={"small"}>
      <h2> Posts </h2>

      {posts.map(post => {
        return (
          <Box
            key={post.data[0]}
            border={true}
            direction={"column"}
            margin={{ top: "small", bottom: "small" }}
          >
            <Heading level={3}> {post.data[0]} </Heading>
            <a href={post.data[1]}> {post.data[1]} </a>
            <CheckBoxGroup
              options={annotationOptions}
              onChange={e => {
                valueChanged(post.data[0], e.value)
              }}
            />
          </Box>
        )
      })}
      <Button primary label="Save" onClick={onSave} />
    </Box>
  )
}

export default Posts
