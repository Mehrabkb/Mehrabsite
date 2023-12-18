import './bigimage.css';
import mehrabImage from '../../../images/mehrab.jpeg'
import React , {Component} from 'react';
class Bigimage extends Component{
    render(){
        return(
            <div className='container'>
                <h1>
                    مهراب کردبچه
                </h1>
                <img src={mehrabImage}></img>
            </div>
        ) 
    }
}

export default Bigimage;