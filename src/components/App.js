import React, { Component } from 'react';
import "../styles/App.css";
class App extends Component{
    constructor(props){
        super(props)
        this.state={
            items:[],
            loading: false,
            button: true
            
        }
        this.handleClick = this.handleClick.bind(this);

    }

    


    componentDidMount(){
        fetch('https://randomuser.me/api/?results=50')
        .then((Response)=> Response.json())
        .then ((Response)=>{
            this.setState({
                items:Response.results,
                loading:true,
               
            })
        })

    }
    handleClick(){
        this.setState({
          button:!this.state.button
        })
      }

   

    render(){

        var {items, loading}=this.state
        if(!loading){
            return(<div>loading</div>)
        }

        else{
            return(
                <div className='container'>
                    {items.map((item)=>(
                        <div className='users'>
                    
                             <img src={item.picture.medium} alt=''/>
                             <div className='info'>
                                <h3>{item.name.last} {item.name.first}</h3>
                                <p>{item.email}</p>
                                </div>
                                {/* <button className='btn' onClick={this.handleClick}>Follow</button> */}
                              
                                <button key={item.id} className={this.state.button ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
                                Follow</button> 
                            </div>
                            
                       
                    ))}
                </div>
            )
        }


        
    }
}

export default App;