import React from 'react'
import moment from 'moment'
import Loading from './loading'
import Fade from 'react-reveal/Fade';
import NetworkError from './errorMsg'
export default function mainSec(props) {

    const { loading, status, items, norepo} = props.data;

    let subtext = (text) =>{

if(text.length > 120){

  return  text.substring(0, 160) + `.....` 
}

return text

    }

if(loading === true){

return <Loading/>
} else if(status === true){

return <NetworkError/>
}

else if(norepo === true) {

    return <h1 className="text-warning">oops no repositories...</h1>
}
else if(loading === false && status === false){

    return (
        <>
 
         {

items.map((item, index)=>{

  

    return(<>


<Fade bottom>



        <div className="col-sm-4" key={index}>
        
        <div className="card text-white bg-dark mb-3" >
        
         
            
              <div className="card-header"><img className="mx-4" style={{borderRadius:"50%"}} src="https://pbs.twimg.com/profile_images/1157035760085684224/iuxTnT5g_400x400.jpg" width="50px"/> 
        {item.name}</div>
        
          <div className="card-body">
    <small className="card-text d-block">{

(item.description === null) ? "No description in this repository" :  subtext(item.description) 
    }</small>
        
        <small style={{opacity:"0.8"}}><span className="p-0 ml-0 text-warning" style={{marginRight:"8px"}}>last update :</span>{moment(item.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</small>
          </div>
        
        </div>
        </div>
        
        </Fade >
        
        </>)



}) 
         }
                

        </>
    )
}





    
}

  


