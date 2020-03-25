import React from 'react'
import Loading from './loading'
import Fade from 'react-reveal/Fade';

export default function ownerinfo(props) {

if(props.odata === null ){
return ""

} 
const { name, location, avatar_url, public_repos, followers, following,  bio  } = props.odata.data
const {loading, status, norepo} = props.info

 if(status === true){

    return <p></p>
    }

else if(loading === false){

    return (
        <Fade center>

        <div className="container bg-dark p-4 mt-5">
            <div className="row bg-dark text-light">

                <div className="col-sm-4 text-center">
                    <img src={avatar_url} style={{borderRadius:"50%"}} width="40%" className="d-block m-auto"/>

                   <h6 className="mt-2">{name}</h6>
    <small>{location}</small>

                </div>
                <div className="col-sm-8">

<div className="row">
    <div className="col-sm-12 mb-3">
        <p>{bio}</p>
    </div>
    <div className="col-sm-4 text-warning">total repos: <span style={{borderRadius:"10px", fontWeight:"bold"}} className="bg-light text-dark px-3 py-1 mx-2">{public_repos}</span></div>
    <div className="col-sm-4 text-warning">followers: <span style={{borderRadius:"10px", fontWeight:"bold"}} className="bg-light text-dark px-3 py-1 mx-2">{followers}</span></div>
    <div className="col-sm-4 text-warning">following: <span style={{borderRadius:"10px", fontWeight:"bold"}} className="bg-light text-dark px-3 py-1 mx-2">{following}</span></div>


</div>

                </div>
              

            </div>
        </div>
        </Fade>
    )

}


else{

    return <Loading />
}

}
