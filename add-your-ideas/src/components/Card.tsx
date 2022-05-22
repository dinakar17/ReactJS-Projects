import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { exactProp } from "@mui/utils";

export default function CardDesign({
  data,
  states,
  id,
}: {
  id: any;
  states: Array<any>;
  data: any;
}) {
  const [open, setOpen] = useState(false);

  const [setIdea, setTags, setDescription, idea, tags, description] = states;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIdea("");
    setTags("");
    setDescription("");
  };

  // Note - Update in CRUD
  const handleUpdate = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    let idea1 = idea ? idea : data.idea;
    let tags1 = tags ? tags : data.tags;
    let description1 = description ? description : data.description;
    // console.log(idea1 + tags1 + description1);
    try {
      await updateDoc(doc(db, "ideas", id), {
        idea: idea1,
        tags: tags1,
        description: description1,
      });
      // console.log("Successfully updated the document with id: " + id);
      setIdea("");
      setTags("");
      setDescription("");
    } catch (e) {
      console.log("Error occurred while updating the document. Error: " + e);
    }
    setOpen(false);
  };

  // handleChange fxn only gets triggered when there is *change* in the input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "idea") setIdea(e.target.value);
    if (e.target.name === "tags") setTags(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    // console.log(`${idea} ${tags} ${description}`)
  };

  // Note - Delete in CRUD
  const delDoc = async () => {
    try {
      await deleteDoc(doc(db, "ideas", id));
      // console.log("Document deleted successfully!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/300/200"
          alt="green iguana"
        />
        <CardContent>
          <h4>{data.idea}</h4><span>#{data.tags}</span> 
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" variant="outlined" onClick={handleClickOpen}>
            Edit
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Update</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To subscribe to this website, please enter your email address
                here. We will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="idea"
                label="Idea"
                type="input"
                fullWidth
                variant="standard"
                defaultValue={data.idea}
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="tags"
                label="Tags"
                type="input"
                fullWidth
                variant="standard"
                defaultValue={data.tags}
                onChange={handleChange}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="description"
                label="Description"
                type="input"
                fullWidth
                variant="standard"
                defaultValue={data.description}
                onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleUpdate}>Update</Button>
            </DialogActions>
          </Dialog>
          <Button size="small" onClick={delDoc}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
