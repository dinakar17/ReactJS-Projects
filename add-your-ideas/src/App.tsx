import { TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  collection,
  addDoc,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "./firebase";

import CardDesign from "./components/Card";
import SlideShow from "./components/SlideShow";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [idea, setIdea] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [ideas, setIdeas] = useState<{ id: string; data: DocumentData }[]>([]);

  // Array that is going to be passed to Card as a prop
  const states = [setIdea, setTags, setDescription, idea, tags, description];

  // Note: READ in CRUD
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "ideas"), (querySnapShot) => {
      // console.log(querySnapShot);
      // console.log(ideas);
      setIdeas(
        querySnapShot.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }))
      );
      // console.log doesn't work here
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "idea") setIdea(e.target.value);
    if (e.target.name === "tags") setTags(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    // console.log(`${idea} ${tags} ${description}`)
  };

  // Note: CREATE in CRUD
  const submit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (idea && tags && description) {
      try {
        const docRef = await addDoc(collection(db, "ideas"), {
          idea: idea,
          tags: tags,
          description: description,
        });
        // console.log("Document written with Id: ", docRef.id);
        setIdea("");
        setTags("");
        setDescription("");
        // console.log(`${idea} ${tags} ${description}`);
        window.scrollTo(0, document.body.scrollHeight);
      } catch (e) {
        console.log("Error adding document: ", e);
      }
    } else {
      alert("Please fill out all the fields!");
    }
  };

  return (
    <>
      <Header />
      <section id="home">
        <div className="container">
          <div className="slideshow">
            <SlideShow />
          </div>
          <div className="inputFields">
            <TextField
              id="filled-textarea"
              label="Have an idea?"
              placeholder="Write down your idea here..."
              multiline
              variant="filled"
              name="idea"
              value={idea}
              onChange={handleChange}
              sx={{ width: 300 }}
            />
            <TextField
              id="outlined-basic"
              label="#Tag your inspiration"
              variant="outlined"
              name="tags"
              value={tags}
              onChange={handleChange}
              sx={{ width: 300 }}
            />
            <TextField
              id="standard-multiline-static"
              placeholder="Describe it's impact on the world..."
              multiline
              rows={4}
              name="description"
              value={description}
              variant="standard"
              onChange={handleChange}
              sx={{ width: 300 }}
            />
            <Button variant="warning" onClick={submit}>
              Let's Go!
            </Button>
          </div>
        </div>
      </section>
      <section id="cards" className="container">
        <h2>Oohooh! You've got some Ideas</h2>
        <div className="cards">
          {ideas.map((idea) => (
            <CardDesign
              key={idea.id}
              id={idea.id}
              data={idea.data}
              states={states}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
