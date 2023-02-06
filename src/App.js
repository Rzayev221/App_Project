function App(){

    const title = 'My Application'
    const body = "message"


    const comments = [
        {id:1 , text: "comment 1"},
        {id: 2, text: "comment 2"}
    ]

    return (
       <div className ='first class'>

            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

        <div className="Comments">
            <h3>Comments {comments.length}</h3>
            <ul>
                {comments.map((comment, index) =>
                  <li>{comment.text}</li>
                
                )}
              
            </ul>


        </div>


     </div>


    )
}

export default App