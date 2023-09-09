function CommentCard(props){
    return(
      
       <div>
           {props.comment.map(val =>{
            return <div key={val.id}> 
                <h6>{val.id} - {val.name}</h6>
                <h6>{val.email}</h6>
                <h6>{val.body}</h6>
            </div>
           })}
       </div>
    )
}


export default CommentCard