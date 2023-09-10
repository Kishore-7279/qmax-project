import ReactDOM from "react-dom"

function CommentCard({commentData, handleShow}){
    return ReactDOM.createPortal(
    <div className = 'comment-card'>
    {commentData.map(val =>{
      return <div className = "comment-body">
        <h2>{val.id} - {val.name}</h2>
        <h2>{val.email}</h2>
        <h2> {val.body}</h2>
      </div>
    })}
    <button onClick = {()=>{handleShow()}}>Hide Comments</button>
    </div>,
    document.getElementById('portal')
  )
}

export default CommentCard
