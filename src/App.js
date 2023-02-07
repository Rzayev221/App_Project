function App(){

    const title = 'My Application'
    const body = "message"
    const comments = [
    {id: 1 , text: 'blabla'},
    {id: 2 , text : 'blabal2'},
    {id: 3 , text: 'blalaae21'}
    ]

    const showcomments =  true
    const commentblock = <div className="comments">
    <p>Comments ({comments.length})</p>
    <ul>{comments.map((comment, index)=> 
    <li key={index}>{comment.text}</li>
    )}
    
    </ul>

</div>;


  

    return (
       <div className ='first class'>

            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

            {showcomments && commentblock }
       
     </div>
    )
    }
export default App