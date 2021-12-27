import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../actions/posts';

//Input from form submission to be posted to Database:

export default function VHSForm({currentId, setCurrentId}) {
// json keys and values to be collected in form:
const [values, setValues] = useState({
  title: "",
  movieYear: "",
  vhsYear: "",
  vhsCompany: "",
  genre: "",
  vhsId: "",
  clamShell: ""
});
// Form validation
const [errors, setErrors] = useState({});
const [validated, setValidated] = useState(false);

const post = useSelector((state) => currentId ? state.posts.find((movie) => movie._id === currentId) : null);

const dispatch = useDispatch();

//For updating entries:
useEffect(() => {
  if(post) setValues(post);
}, [post])

//To set form data in state:
const handleChange = (e) => {
  const {name, value} = e.target;
  setValues({
    ...values,
    [name]: value
  })
}
// Submit includes validation logic to ensure usable data is collected:

const handleSubmit = async (e) => {
  e.preventDefault();
  const errorMap = {};
  if(!values.title){
    errorMap.title = "Required";
  }
  if(values.movieYear < 1895 || values.movieYear > 2006){
    errorMap.movieYear = "Enter a valid Year";
  }
  // (VHS tapes were produced from 1976 to 2006)
  if(values.vhsYear < 1976 || values.movieYear > 2006){
    errorMap.vhsYear = "Enter a valid year";
  }
  if(!values.vhsCompany){
    errorMap.vhsCompany = "Required";
  }
  if(!values.genre){
    errorMap.genre= "Required";
  }
  if(!values.vhsId){
    errorMap.vhsId = "Required";
  }
  if(!values.clamShell){
    errorMap.clamShell = "Required";
  }
  if (Object.keys(errorMap).length !== 0) {
    setErrors(errorMap);
    setValidated(false);
  }
  else if(currentId === 0) {
    setValidated(true);
    dispatch(createPost(values));
    clear();
  }
  else {
    setValidated(true);
    dispatch(updatePost(currentId, values));
    clear();
  }
}
// To clear form input fields for button or upon successful submit:
const clear = () => {
  setCurrentId(0);
  setValues({ title: '', movieYear: '', vhsYear: '', vhsCompany: '', genre: '', vhsId: '', clamShell: '' });
};

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src="https://i.imgur.com/cXjZtki.jpg" alt="vhs-logo" id="vhs-logo"></img>
        <h4 style={{textAlign: 'center'}}>{currentId ? 'EDIT' : 'SUBMIT'} A VHS RELEASE</h4>
        <img src="https://i.imgur.com/cXjZtki.jpg" alt="vhs-logo" id="vhs-logo"></img>
        </div>
      
     <Form validated={validated} onSubmit={handleSubmit} style={{border: "1px solid black", padding: "1rem", fontSize: "0.9rem", backgroundColor: "lightgray", height: "79vh"}}>
      <Form.Group>
          <Form.Label>Movie Title:</Form.Label>
          <Form.Control className="form-label"
                        size="sm"
                        type="text"
                        name="title" 
                        placeholder="Enter full movie title"
                        value={values.title}
                        isInvalid={errors.title}
                        onChange={handleChange} />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Enter year of movie release:</Form.Label>
          <Form.Control className="form-label"
                        size="sm"
                        type="number"
                        name="movieYear"
                        min="1900"
                        max="2006" 
                        placeholder="Enter year"
                        value={values.movieYear}
                        isInvalid={errors.movieYear}
                        onChange={handleChange} />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Enter year of VHS tape release:</Form.Label>
          <Form.Control className="form-label"
                        size="sm"
                        type="number" 
                        name="vhsYear"
                        min="1976"
                        max="2006"
                        placeholder="Enter year" 
                        value={values.vhsYear}
                        isInvalid={errors.vhsYear}
                        onChange={handleChange}
                        />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Select VHS production company:</Form.Label>
          <Form.Control as="select"
                        size="sm"
                        className="form-label"
                        name="vhsCompany"
                        type="string"
                        value={values.vhsCompany}
                        isInvalid={errors.vhsCompany}
                        onChange={handleChange}
                        >
  <option>Choose VHS Prodution Company</option>
  <option value="20th Centrury Fox">20th Century Fox</option>
  <option value="Admit One">Admit One</option>
  <option value="Anchor Bay">Anchor Bay</option>
  <option value="Artisan">Artisan</option>
  <option value="Avid">Avid</option>
  <option value="Buena Vista">Buena Vista</option>
  <option value="Cannon">Cannon</option>
  <option value="Carolco">Carolco</option>
  <option value="CBS FOX">CBS FOX</option>
  <option value="Columbia/TriStar">Columbia/TriStar</option>
  <option value="Dimension">Dimension</option>
  <option value="Dreamworks">Dreamworks</option>
  <option value="Elektra">Elektra</option>
  <option value="Embassy">Embassy</option>
  <option value="Evergreen Entertainment">Evergreen Entertainment</option>
  <option value="f.h.e.">f.h.e</option>
  <option value="Feature Films For Families">Feature Films For Families</option>
  <option value="Fox Lorber">Fox Lorber</option>
  <option value="Fox Video">Fox Video</option>
  <option value="Goodtimes">Goodtimes</option>
  <option value="HBO Video">HBO Video</option>
  <option value="Hemdale">Hemdale</option>
  <option value="Hollywood Pictures">Hollywood Pictures</option>
  <option value="Key Video">Key Video</option>
  <option value="KLT-TV">KLV-TV</option>
  <option value="Lightning Video">Lightning Video</option>
  <option value="Lion's Gate">Lion's Gate</option>
  <option value="Live Entertainment">Live Entertainment</option>
  <option value="Live Home Video">Live Home Video</option>
  <option value="Magnetic Video">Magnetic Video</option>
  <option value="MCA Home Video">MCA Home Video</option>
  <option value="MCA/Universal">MCA/Universal</option>
  <option value="Media">Media</option>
  <option value="MGM">MGM</option>
  <option value="Miramax">Miramax</option>
  <option value="MTV">MTV</option>
  <option value="Nelson Entertainment">Nelson Entertainment</option>
  <option value="Nettwerk">Nettwerk</option>
  <option value="New Line">New Line</option>
  <option value="New World Video">New World Video</option>
  <option value="October Films">October Films</option>
  <option value="Orion">Orion</option>
  <option value="Paramount">Paramount</option>
  <option value="PBS Home Video">PBS Home Video</option>
  <option value="Polygram Video">Polygram Video</option>
  <option value="Prism Pictures">Prism Pictures</option>
  <option value="RCA/Columbia">RCA/Columbia</option>
  <option value="Republic Pictures">Republic Pictures</option>
  <option value="Rhino">Rhino</option>
  <option value="Sherwood Productions">Sherwood Productions</option>
  <option value="Something Weird Video">Something Weird Video</option>
  <option value="Starmaker">Starmaker</option>
  <option value="Touchstone">Touchstone</option>
  <option value="Triboro Entertainment">Triboro Entertainment</option>
  <option value="Trimark Home Video">Trimark Home Video</option>
  <option value="Troma">Troma</option>
  <option value="Universal">Universal</option>
  <option value="Vestron">Vestron</option>
  <option value="Video Treasures">Video Treasures</option>
  <option value="Vidmark">Vidmark</option>
  <option value="Walt Disney">Walt Disney</option>
  <option value="Warner Home Video">Warner Home Video</option>
  <option value="WorldVision">WorldVision</option>
  <option value="Other">Other/Not Listed</option>
          </Form.Control>
        </Form.Group>
        <br/>
        <Form.Group>
        <Form.Label>Select Movie Genre:</Form.Label>
        <Form.Control as="select"
                      className="form-label"
                      size="sm"
                      name="genre"
                      type="string"
                      value={values.genre}
                      isInvalid={errors.genre}
                      onChange={handleChange}
                      >
        <option>Choose Genre</option>
        <option value="action">Action/Adventure</option> 
        <option value="comedy">Comedy</option>
        <option value="documentary">Documentary</option>
        <option value="drama">Drama</option>
        <option value="family">Family</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
        <option value="musical">Musical</option>
        <option value="sci-fi">Science Fiction</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        </Form.Control>
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>VHS Catalog Number:</Form.Label>
          <Form.Control className="form-label"
                        size="sm"
                        type="string" 
                        name="vhsId"
                        placeholder="Enter Catalog Number"
                        value={values.vhsId}
                        isInvalid={errors.vhsId}
                        onChange={handleChange} />
        </Form.Group>
        <br/>
        <Form.Group>
          <Form.Label>Clamshell Case?</Form.Label>
          <Form.Control as="select"
                        size="sm"
                        className="form-label"
                        type="string"
                        name="clamShell"
                        value={values.clamShell}
                        isInvalid={errors.clamShell}
                        onChange={handleChange}
                        >
          <option>Choose Yes or No</option>  
          <option value="No">No</option> 
          <option value="Yes">Yes</option>
          </Form.Control>
        </Form.Group>
      <br/>
      <div className="d-flex justify-content-around">
        <Button variant="primary" type="submit" size="md">
           Submit
        </Button>
        <Button variant="dark" type="reset" size="md" onClick={clear}>
          Clear
        </Button>
        </div>
      </Form>
    </div>
  );
}
