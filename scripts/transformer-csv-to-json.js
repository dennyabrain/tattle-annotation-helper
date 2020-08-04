"use strict"

const csv = require("csv-parser")
const fs = require("fs")
const writeJsonFile = require("write-json-file")

const results = []
const output = []

fs.createReadStream("input.csv")
  .pipe(csv())
  .on("data", data => results.push(data))
  .on("end", () => {
    //console.log(results);
    results.map(result => {
      output.push({
        metadata: result,
        annotation: {
          _id: result._id,
          "field-one": "",
          "field-two": "",
          "field-three": "",
          "field-four": "",
          "field-five": "",
          "field-six": "",
          "field-seven": "",
          annotator_notes: "",
        },
      })

      writeJsonFile("output.json", output)
        .then(output => console.log("output ", output))
        .catch(err => console.log("error ", err))
    })
  })
