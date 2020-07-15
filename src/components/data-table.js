import React from "react"
import {
  Box,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from "grommet"
/**
 * @author
 * @function DataTable
 **/

const DataTable = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Key
          </TableCell>
          <TableCell scope="col" border="bottom">
            Value
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">
            <strong>URL</strong>
          </TableCell>
          <TableCell>
            <a href={data.permalink}> {data.permalink} </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Tag</strong>
          </TableCell>
          <TableCell>{data.tagName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Timestamp</strong>
          </TableCell>
          <TableCell>{data.timestamp}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">
            <strong>Caption</strong>
          </TableCell>
          <TableCell>
            <Box width={"medium"}>{data.caption}</Box>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default DataTable
