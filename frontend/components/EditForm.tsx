import { UploadFile } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  FormControl,
  Grid,
  Input,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import useStyles from "../styles/styles";


const EditForm = () => {

  const classes = useStyles();
  return (
      <Box
        component="form"
        sx={{
          display: "flex",
          "& .MuiTextField-root": { m: 0, width: "60ch", height: "9ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container direction="column">
          <input
            accept="/home/jero/Documentos/abuela-viandas/abuela-viandas/frontend/public/images/comida-rapida-casera.jpg"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <Card
          
          className={classes.editFormImg}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                width="100"
                image="http://viandasmardelplata.com./uploads/762/full_370x200.jpg"
                alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage.shutterstock.com%2Fimage-vector%2Fpicture-vector-icon-no-image-260nw-1732584341.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fpicture%2Bnot%2Bfound&tbnid=AXK1OmDRv7BqKM&vet=12ahUKEwiexYCCvL_2AhVPOLkGHbkrAqEQMygCegUIARC6AQ..i&docid=VxQKe9kuShLPUM&w=260&h=280&q=image%20not%20found&ved=2ahUKEwiexYCCvL_2AhVPOLkGHbkrAqEQMygCegUIARC6AQ"
              />
            </CardActionArea>
          </Card>
            <List>
              <ListItem>
                <TextField
                  required
                  fullWidth
                  id=""
                  color="success"
                  variant="standard"
                  label="Descripcion"
                />
              </ListItem>
              <ListItem>
                <TextField
                  required
                  id=""
                  color="success"
                  variant="standard"
                  label="Categoria"
                />
              </ListItem>
              <ListItem>
                <TextField
                  required
                  id=""
                  color="success"
                  variant="standard"
                  label="Precio"
                />
              </ListItem>
            </List>
        </Grid>
      </Box>
  );
};

export default EditForm;
