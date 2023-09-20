
import React ,{useState} from 'react'

function Mohan() {
    const [resource,setResource] = useState ('Posts');
  return (
    <>
    <div>
        <button onClick={() =>setResource('posts')}>posts</button>
        <button onClick={() => setResource('users')}>users</button>
        <button onClick={() => setResource('comments')}>comments</button>
       </div>
        <h1>{resource}</h1>
        </>
  );
}

export default Mohan;