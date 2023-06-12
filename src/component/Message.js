import react, {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message:"Hi Satyaki"
        }
    }

    changeMessage(){
        if (this.state.message == "Thank you Satyaki for subscribing"){
            this.setState({
                message:"Hi Satyaki"
            })
        }
        else{
            this.setState({
                message: 'Thank you Satyaki for subscribing'
            })
        }        
    }

    render(){
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        ) 
    }

}

export default Message