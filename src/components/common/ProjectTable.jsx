import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {  StyledTableRow, StyledTableCell } from "../../style/styledComponents";
import ProjectTableCell from "./ProjectTableCell";


export default function ProjectTable(props) {

    const { 
        data,
        attributes, 
        setSelectedId, 
        setEditMode, 
        handleDelete,
        handleSave
    } = props;
    return (
        <TableContainer sx={{ marginTop: "1rem"}} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {attributes.map((attribute) => (
                <StyledTableCell align="center">{attribute.toUpperCase()}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data != null && data.map((elem) => (
              <StyledTableRow key={elem.id}>
                { attributes.map((attribute) => (
                  <ProjectTableCell
                    key={elem.id + attribute}
                    setSelectedId={setSelectedId}
                    id={elem.id}
                    value={elem[attribute]} 
                    ident={attribute} 
                    setEditMode={setEditMode}
                    handleDelete={handleDelete}
                    handleSave={handleSave}
                    user={elem["user"]}
                />))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}