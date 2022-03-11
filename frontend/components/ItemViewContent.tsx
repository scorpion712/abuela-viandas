import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { Food } from "../utils/interfaces";
import { Box, CardMedia, Typography } from "@mui/material";

interface ItemViewContentProps {
  selectedItem?: Food;
}

export default function ItemViewContent(props: ItemViewContentProps) {
  const { selectedItem } = props;

  return (
    <Box>
      <CardMedia
        component="img"
        height="340"
        image={selectedItem?.mainImage}
        alt="Image Not Found"
      />
      <Typography
        gutterBottom
        variant="h5"
        style={{
          marginTop: "1rem",
          marginBottom: "0",
          fontSize: "1.7rem",
          fontFamily: "Roboto",
        }}
      >
        {selectedItem?.description}
      </Typography>
      <Accordion defaultExpanded>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography style={{ fontSize: "1.3rem" }}>
            {selectedItem?.longDescriptionTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{selectedItem?.longDescription}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
