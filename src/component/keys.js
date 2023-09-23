import React from 'react'

function List1() {

const Bikes = [
{id:1,name:'Yamaha R15'},
{id:2,name:'Yamaha MT15'},
{id:3,name:'KTM RC'},
{id:4,name:'KTM DUKE'},
{id:5,name:'Bajaj Ns200'},
{id:6,name:'Bajaj Rs200'},
{id:7,name:'Nenja'}


];

  return (
    <div>
        <h1>React JS List and Keys</h1>
        <ul>
          {
            Bikes.map(data =>(
              <li key ={data.id} >{data.name}</li>
            ))
          }
        </ul>

    </div>
  
  )
}

export default List1;