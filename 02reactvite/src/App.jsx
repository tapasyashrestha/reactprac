import { useState } from "react";
function App(){
  const [likes,setlikes]=useState(0);
  function Handlelike(){
    setlikes(likes+1);
  }
  function lowLikes(){
    if(likes>0){
    setlikes(likes-1);
    }
  }
  return(
    <>
    <h2>{likes} likes </h2>
    <button onClick={Handlelike}>LIKE</button>
    <button onClick={lowLikes}>DISLIKE</button>
    </>

  );
}
export default App