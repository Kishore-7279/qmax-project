import { useState } from "react"
import CommentCard from "./CommentCard"

function MUICard(){
    const [cardData, setCardData] = useState([])
    const [comment, setComment] = useState([])
    const [show, setShow] = useState({isShow : false})

    fetch("https://jsonplaceholder.typicode.com/posts")

    .then(data=> data.json())
    
    .then(result=>setCardData(result))
    
    .catch(err=>console.log(err))

    function handleClick(id){
        setShow({isShow : !show})
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(data => data.json())
            .then(result => {setComment(result)
            })
            .catch(err => console.log(err))



            }
            function handleRemove(title){
                document.getElementById(title).style.display = "none";
            }
        return(
            <div className="card">
                {cardData.map(val =>{
                 return <div className="card-body" key={val.id} id={val.title}>
                        <h1>{val.id} - {val.title}</h1>
                        <h4>{val.body}</h4>

                    <CommentCard comment = {comment} handleClick = {()=>{handleClick(val.id)}}/>
                    <button onClick={()=>{handleRemove(val.title)}}>Delete Post</button>
                        </div>
                })}
            </div>
        )


}

export default MUICard