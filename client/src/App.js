import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js';
import Navigation from './Navbar/Navigation.js';
import VHSForm from './Form/VHSForm.js';
import Posts from './Posts/VHSPosts.js';
import './index.css';

const App = () => {
  //state of current id set to 0 unless entry is updated
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

return(
 <div>
   <Container id="form" className="form-container">
   <Navigation/>
   <VHSForm currentId={currentId} setCurrentId={setCurrentId}/>
   </Container>
   <Container id="entries" className="post-container">
   <Posts setCurrentId={setCurrentId}/>
   </Container>
    
 </div>
);
}
export default App;