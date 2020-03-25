import React, { Component } from 'react'

export default class Task extends Component {


state = {

items: [{
    title:"Room",
    room:1
},
{
    title:"Adult",
    Adult:1
},{
    title:"children",
    children:0
}] 
}


    render() {
    
       
    
        return (
            <div>
                

<div>
                <div className="row">
    {
        this.state.items.map((item, index)=>{


            return(<>
            <div className="col-sm-6">{item.title}</div>

              <div className="col-sm-6">

<span id="minus">-</span>
<span id="status"></span>
<span id="plus">+</span>

              </div>
            
            </>) 
         })

       
    }

    </div>
        </div>

            </div>
        )
    }
}
