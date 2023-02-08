function App(){


    const title = "My APp"
    const body  = "my messages"

    const comments = [{id : 1 , text: "blavblas"},
    {id: 2, text : "blöavlösa"} 
    ]

    const showComments = true;
    const commentblock = <div className="COMMENTS">
        <p>Comments ({comments.length})</p>
        <ul>{comments.map((comment,index)=>
        <li key ={index}> {comment.text}</li>)}
        </ul>
    </div>

    return (
        <div className="myclass">
            <h>{title.toUpperCase()}</h>
            <p>{body}</p>
            
            <p>{showComments&&commentblock}</p>
            </div>
    )
}

export default App