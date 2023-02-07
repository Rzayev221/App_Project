function App(){

    const title = 'My Application'
    const body = "message"
    const comments = [
    {id: 1 , text: 'blabla'},
    {id: 2 , text : 'blabal2'},
    {id: 3 , text: 'blalaae21'}
    ]


  

    return (
       <div className ='first class'>

            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

        <div className="comments">
            <p>Comments ({comments.length})</p>
            <ul>{comments.map((comment, index)=> 
            <li key={index}>{comment.text}</li>
            )}
            
            </ul>

        </div>
     </div>
    )
}

export default App