import { useState } from "react";

function ProfileCard(props ){

   const [count, setCount ] = useState(0);
   



    let {titulo, arroba, img} = props;

    function handleClick(){
        console.log("se clickeo el boton")
        setCount(count + 1)
    }

    function handleClick2(){
        if(count>0){
            setCount(count - 1)
        }
        
    }


    return (
        <div className="card">
            <div class="card-img">
             <figure class="image is-1by1">
               <img src={img} alt="logo"/>
             </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                   <p className="title is-4">{titulo}</p>
                   <p className="subtitle is-6">{arroba}</p>
                </div>
                <div className= "columns ">
                    <div className="column is-4">
                
                     <button onClick={handleClick} className="button is-danger is-fullwidth">+</button>
                    </div>
                    <div className="column is-4">
                      <span>Likes: {count}</span>
                    </div>
                    <div className="column is-4">
                      <button onClick={handleClick2} className="button is-primary is-fullwidth">+</button>
                    </div>
                   

                </div>


            </div>
           
        
        
        
        </div>
    )
}

export default ProfileCard;