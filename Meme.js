/*import React from "react";
import './components/Meme.css'
import Header from "./components/Header";
import Inputs from "./components/Inputs";




export default function Meme(){
    return(
        <div>
             <Header/>
             <Inputs/>

        </div>

       
    )

}*/
/*import React from "react";
import './components/demo.css'
import Count from "./components/Count";
export default function Meme(){
   
    const [count,setCount] = React.useState("0")
    function add(){
        setCount(prevCount=> prevCount + 1)
    }
    function subtract(){
        setCount(prevCount => prevCount - 1)
    }
    function reset(){
        setCount(prevCount => prevCount * 0)
    }
    
   
    return(
        
       <div className="counter">
           <button className="counter-minus" onClick={subtract}>- </button>
            <Count number={count} />
           <button className="counter-plus" onClick={add} >+</button>
           <button onClick={reset}>Reset</button>

       </div>

    )
    }
*/

    /*import React from "react";
    export default function Meme(){
        const [isGoingOut ,setIsGoingOut] =React.useState(true)
      
       
         function changeMind(){
             setIsGoingOut(prevState => prevState ? false : true)
         }
        return(
            <div>
                <h1>Do i feel like going out today?</h1>
                <div onClick={changeMind} className="state-value" >

                    <h1 >{isGoingOut ? "Yes" :"No"}</h1>
                </div>
            </div>
        )
    }*/

   /* import React  from 'react';
     
    export default function Meme(){
        const [thingsArray, setThingsArray] = React.useState(["Thing 1","Thing 2"])

        function addItem(){
            setThingsArray(prevThingsArray =>{ return [...prevThingsArray, 'Thing ${prevThingsArray.length + 1}' ]
                
        })
           
        }
        const thingsElements = thingsArray.map(items => <p>{thingsArray}</p>)
        return(
            <div>
                <button onClick={addItem}> Add item</button>
                {thingsElements}
            </div>
        )
    } */

    //...................Object in State......................
    /*import React from "react";
    import Star from "./components/Star";
    export default function Meme(){
        const [contact , setContact] = React.useState({
            firstName : "Shae",
            lastName: "fik",
            phone: "+91 8778432004",
            email : "shaefik@gmail.com",
            isFavourite:false
        })
       

        let emailId = contact.isFavourite? "shaefik@gmail.com" : "shafeeksah1510gmail.com"
        let phoneNumber =contact.isFavourite? "474832": "9898888888888"

        function changeDetails(){
            setContact (preContact =>{
                return{
                    isFavourite:!preContact.isFavourite
                }
            })
        }
      
        return(
            <div>
                <article className="card">
                    <img  src={".../images/${starIcon}"} />
                    <div>
                        <Star isFilled={contact.isFavourite} />
                        <h1>{contact.firstName} {contact.lastName}</h1>
                        <p >{phoneNumber}</p>
                        <p>{emailId}</p>
                        <button onClick={changeDetails}>click me to change details</button>
                    </div>

                </article>

            </div>

        )
    }*/

   

    /*
       let starIcon =contact.isFavourite ? "sample1.jpg" : "sample3.jpg"
       
        function toggleFavourite(){
           setContact(prevContact => {
               return {
                   isFavourite : !prevContact.isFavourite
               }
           })
        }
       
        */
/*import React from "react";
import Top from "./components/Top";
import Bottom from "./components/Bottom";

export default function Meme(){
    const[user,setUser]=React.useState("Shafk")
    return(
        <div>
           <Top user={user} />
           <Bottom user={user} />
        </div>
    )
}*/

/*import React  from "react";
import './components/box.css'
import box from "./components/box";
import Boxe from './components/Boxe'

export default function Meme(){
    const [boxSample,setBoxSample] =React.useState(box)
    
   function toggle(id){
    setBoxSample(prevBoxSample =>{
        return prevBoxSample.map((square) =>{
            return square.id === id ? {...square, on: !square.on} :square
        })
   
       
    })
  
   }
 

    const boxElements = boxSample.map(items=>(

        <Boxe key={items.id}
         id={items.id}
        on={items.on} 
        toggle={toggle} />
    ))
  


    return(
        <div >
           {boxElements}

        </div>
    )
}*/


/*import React from 'react'
import box from './components/box'
import Boxe from './components/Boxe'
import './components/box.css'

export default function Meme(props){
    const [squares,setSquares] = React.useState(box)
  
  
   function toggle(id){
       setSquares(prevSquares =>{
          return prevSquares.map((item) =>{
               return item.id===id ?{...item ,on: !item.on} :item
          })
       })
   }
         
   
    
   const boxElements = squares.map((square =>(
      <Boxe  key={square.id}
        on ={square.on} 
        toggle ={toggle}
     />

   )))
      
        

    return(
        <div>
           {boxElements}
        </div>
    )
}*/





/*import React from 'react'
import box from './components/box'
import Boxe from './components/Boxe'
import './components/box.css'

export default function Meme(){
    const [squares,setSquares ]=React.useState(box)
     
    const squareElements = squares.map(items =>(
        <Boxe  key={items.id} on={items.on}/>

    ))
    return(
        <div>
             {squareElements}
        </div>
       

    )
}
*/

/*
import React from 'react'
import box from './components/box'
import Boxe from './components/Boxe'
import './components/box.css'

export default function Meme(){
    const [squares,setSquares] = React.useState(box)
     function toggle(id) {
         setSquares(prevSquares =>{
            return prevSquares.map((items)=>{
               return items.id===id ? {...items , on :  !items.on}:items

            })
         })
        
    }

    const squareElements  = squares.map((square =>(
       <Boxe id = {square.id}
        on = {square.on} 
        toggle={()=> toggle(square.id)} />
    
    )))

    return(
        <div>
           {squareElements}
        </div>
    )
}*/

/*import React from 'react'
import box from './components/box'
import Boxe from './components/Boxe'
import './components/box.css'

export default function Meme(){
    const [rectSample,setRectSample] =React.useState(box)
   
     function toggle(id){
         setRectSample(prevRectSample=>{
            return prevRectSample.map((element)=>{
                return element.id===id ? {...element ,on :!element.on}:element

            })

         })
     }


    const rectElem=rectSample.map(content=>(
        <Boxe
        id={content.id}
        on={content.on}
        toggle={()=>toggle(content.id)}
        />
    ))
    return(
        <div>
            {rectElem}

        </div>
    )
}*/



/*import React from "react";
import box from "./components/box";
import Boxe from "./components/Boxe";
import './components/box.css'

export default function Meme(){
    const [boxSample,setBoxSample] = React.useState(box)
    const boxElements = boxSample.map(items =>(
        <Boxe  key={items.id} on={items.on} /> 
        
      
          
       
    ))
  
    return(
        <div >
            
    {boxElements} 
        </div>
    )
}*/

/*import React from 'react'
export default function App(){
    const[starWarsData,setStarWarsData]=React.useState({})
    const[count,setCount]=React.useState(1)
    console.log("Components rendered")
    
    React.useEffect(function(){
       fetch("https://swapi.dev/api/people/${count}")
          .then(res => res.json())
          .then(data =>setStarWarsData(data))
    },[count])

    return(
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )


}
*/
/*import React  from "react";
import Inputs from "./components/Inputs";
import memeData from "./components/memeData";
import Header from "./components/Header";
import './components/Meme.css'

export default function Meme(){
    return(
        <div>
            <Header/>
            <Inputs />
        </div>
    )
}
*/

/*import React from 'react'
import WindowTracker from './components/WindowTracker'
export default function Meme(){
    const[show , setShow]=React.useState(true)
    function toggle(){
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div>
            <button onClick={toggle}>Toggle Window tracker</button>
            {show &&<WindowTracker/>}
           

        </div>
    )
}*/


/*import React from "react";
import WindowTracker from "./components/WindowTracker";

export default function Meme(){
    const[show,setShow]=React.useState(true)
    function toggle(){
        setShow((prevSetShow => !prevSetShow))
    }
    return(
        <div>
            <button onClick={toggle}>Toggle </button>
           {show && <WindowTracker/>}     
        </div>
    )
}*/

/*import React from "react";
import Navbars from "./components/Navbars";
import './components/design.css'
import Main from './components/Main'
export default function Meme(){
    const[darkMode,setDarkMode]=React.useState(true)
    return(
        <div className="container">
            <nav className="nav">
            <Navbars
            
            />
           
            </nav>
            <section className="main">
            <Main/>
            </section>
            
        </div>
    )
}*/

/*import react from "react";
import './components/Memes.css'

import Navbar from './components/Navbar'
import './components/Navbar.css'
import Banner from "./components/Banner";
import './components/Banner.css'
import RowPost from "./components/RowPost";
import './components/RowPost.css'
export default function Meme(){
    return(
        <div>
            
            <Navbar/>
            <Banner/>
            <RowPost/>
           
        </div>
    )
}*/

/*import { useState } from "react";
import axios from "axios";
export default function Meme(){
    const [state,setState] = useState([])

    return(
        <div>
            <h1>helo</h1>
            <button onClick={()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
                    setState(response.data)
                   
                })
            }}>click</button>
            
           {state.map((obj,index)=>{
               return(
                   <div>
                       <h1>{index+1}</h1>
                       <h4>{obj.body}</h4>

                   </div>
               )
           })}
        </div>
    )
}*/
import react from "react";
export default function Meme(){
    return(
        <div>
            <h1>Hello</h1>

        </div>
    )
}
