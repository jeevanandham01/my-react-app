
import React ,{useState ,useEffect} from 'react'

function Mohan() {
    const [resource,setResource] = useState ('Posts');
    useEffect(()=>{
      console.log('render')
    });
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