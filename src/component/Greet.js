import React from 'react'

//with Jsx

//function Greet(){
//    return <h1>Hello Satyaki</h1>
//}

//jsx with Arrow

//export const Greet = () => <h1>Hello Satyaki</h1>

//const Greet = () => <h1>Hello Satyaki</h1>

//without JSX

/*const Greet = () => {return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'},
    React.createElement('h1',null,'Hello Vishwas')

    )
}*/

//props
const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
        {props.children}
        </div>
    )
} 

export default Greet