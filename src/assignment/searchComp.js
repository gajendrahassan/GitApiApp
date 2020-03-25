

import React, { Component } from 'react'
import axios from 'axios'
import MainSec from './mainSec'
import { FaArrowRight } from 'react-icons/fa';
import OwnerinfoSec from './ownerinfo'

export default class searchComp extends Component {

    state = {

        input: null,
        items:[],
        loading:false,
        status:false,
        norepo:false,
        ownerinfo:null

    }

    handleChange(e){


this.setState({input: e.target.value})

    }

  handleSubmit(e){
     this.setState({loading:true})

    const {input} = this.state
        e.preventDefault();
            
             axios.get(`https://api.github.com/users/${input}/repos`).then(

              (res)=>{


            const items = res.data;

            if(items.length > 0){

           return this.setState({loading:false, status:false, norepo:false, items})

            }
            
       return this.setState({loading:false, status:false, norepo:true})


              }

              ).catch(error =>{
                 this.setState({ status:true, loading:false})
                return  console.error(error, this.state);
               

              });
          
              axios.get(`https://api.github.com/users/${input}`).then((oinfo)=>{


                    return this.setState({ownerinfo:oinfo })


              }).catch((error)=>{



                    return console.log(error);


              })

          
    }




    render() {

const {loading } = this.state
        return (
            <div>
            <h4 className="text-center text-light mb-4">GITHUB USER REPO INFO APP</h4>
            <form onSubmit={(e) => this.handleSubmit(e)}>
  <div class="form-group">
    <input style={{backgroundColor:"transparent", color:"white"}} value={this.state.input} onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="git"  aria-describedby="emailHelp" placeholder="Enter github user id. ex: gajendrahassan" required/>
  </div>
 
        <button type="submit" className="btn btn-dark d-block w-25 m-auto" disabled={loading? true : false}>{loading? "Wait..." : `Submit`}{<FaArrowRight id="btnicn"/>}</button>
</form>


<OwnerinfoSec odata = {this.state.ownerinfo} info={this.state}/>
<div class="row mt-4">
<MainSec data = {this.state} />
</div>

    
        </div>

        )
    }
}
















