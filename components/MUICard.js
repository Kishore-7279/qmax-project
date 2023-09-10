import {useState} from "react";
import CommentCard from "./CommentCard";

function MIUICard() {
  const [commentData, setCommentData] = useState([])
  const [postData, setPostData] = useState([])
  const [show, setShow] = useState({isShow : false})

      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => data.json())
        .then(result => setPostData(result))

    function handleShow(postId){
      setShow({isShow : !show.isShow})
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(data => data.json())
      .then(result => setCommentData(result))
    }

    function handleDelete(title){
        document.getElementById(title).style.display = "none"
    }
    return (
        <div className="card">
      {postData.map((val) => {
        return <div className = "post-body" id={val.title} name={val.title} >
          <h2>{val.id} - {val.title}</h2>
          <h2>{val.body}</h2>
          <button onClick = {()=>{handleShow(val.id)}}>Comment</button>
          <button onClick={()=>{handleDelete(val.title)}}>Delete</button>
        </div>
      })}
      {show.isShow ? <CommentCard handleShow = {handleShow} commentData = {commentData}/> : null}
    </div>
  );
    }


export default MIUICard;
