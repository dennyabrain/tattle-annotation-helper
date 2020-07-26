import React, { useState, useEffect } from "react"
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
import DataTable from "./data-table"

const annotationFieldOne = [
  "No ",
  "Yes, Statistical Claim",
  "Yes, Descriptions of a real world events/place about noteworthy individuals.",
  "Yes, other",
]

const annotationFieldTwo = [
  "No  ",
  "Yes, person is performing for camera",
  "Yes, contains violent incident",
  "Other",
]

const annotationFieldThree = [
  "No, does not contain images",
  "Contains human",
  "Does no contain human(s)",
]

const annotationFieldFour = [
  "Print/TV Media",
  "Digital Only News Outlets",
  "Digital Content Providers",
  "Anonymous/User Generated",
  "Government/Public Authority",
  "Other ",
]
const annotationFieldFive = ["Yes", "No   "]
const annotationFieldSix = ["Yes ", "No    "]
const annotationFieldSeven = ["Yes  ", "No     "]

/**
 * @author
 * @function Post
 **/

const Post = ({ metadata, annotation }) => {
  const [liveAnnotation, setLiveAnnotation] = useState(annotation)

  const setUserInput = (inputType, value) => {
    // console.log({ inputType, id, value, output })
    setLiveAnnotation({
      ...liveAnnotation,
      [inputType]: value,
    })
  }

  const reset = () => {
    // setLiveAnnotation(annotation)
  }

  return (
    <Box
      pad={"medium"}
      background="light-1"
      direction={"column"}
      margin={{ top: "small", bottom: "small" }}
    >
      <Box direction={"row"}>
        <Box overflow={"hidden"}>
          <Box width={"medium"} height={"medium"}>
            <Media type={metadata.media_type} url={metadata.s3_url} />
          </Box>
          <Box fill={true}>
            <DataTable
              data={{
                permalink: metadata.post_permalink,
                tagName: metadata.tag_name,
                timestamp: metadata.timestamp,
                caption: metadata.caption,
                text: metadata.text,
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
            value={liveAnnotation["field-one"]}
            onChange={e => {
              setUserInput("field-one", e.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            Post contains unidentified videos
          </Heading>
          <RadioButtonGroup
            name="unidentified videos"
            options={annotationFieldTwo}
            value={liveAnnotation["field-two"]}
            onChange={e => {
              setUserInput("field-two", e.target.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            Post contains unidentified images
          </Heading>
          <RadioButtonGroup
            name="memes"
            options={annotationFieldThree}
            value={liveAnnotation["field-three"]}
            onChange={e => {
              setUserInput("field-three", e.target.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            The visible source is
          </Heading>
          <RadioButtonGroup
            name="visible_source"
            options={annotationFieldFour}
            value={liveAnnotation["field-four"]}
            onChange={e => {
              setUserInput("field-four", e.target.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            Memes
          </Heading>
          <Paragraph>
            {" "}
            ( featuring security forces, modi, religious pride, national pride,
            political party representatives, reverential posts about a
            profession election campaigneering related, current national news ){" "}
          </Paragraph>
          <RadioButtonGroup
            name="memes"
            options={annotationFieldFive}
            value={liveAnnotation["field-five"]}
            onChange={e => {
              setUserInput("field-five", e.target.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            Solicitation to call/ WhatsApp/ send money
          </Heading>
          <RadioButtonGroup
            name="solicitation"
            options={annotationFieldSix}
            value={liveAnnotation["field-six"]}
            onChange={e => {
              setUserInput("field-six", e.target.value)
            }}
          />
          <Heading level={3} margin={"none"}>
            Worth Archiving
          </Heading>
          <RadioButtonGroup
            name="solicitation"
            options={annotationFieldSeven}
            value={liveAnnotation["field-seven"]}
            onChange={e => {
              setUserInput("field-seven", e.target.value)
            }}
          />
          <TextArea
            placeholder="Additional Notes"
            value={liveAnnotation["annotator_notes"]}
            size={"small"}
            onChange={event =>
              setUserInput("annotator_notes", event.target.value)
            }
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Post
