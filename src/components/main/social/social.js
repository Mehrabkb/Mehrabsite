import React , {Component} from "react";
import whatsapp from '../../../images/icons8-whatsapp.svg';
import telegram from '../../../images/icons8-telegram.svg';
import youtube from '../../../images/icons8-youtube.svg';
import aparat from '../../../images/icons8-aparat.svg';
import instagram from '../../../images/icons8-instagram.svg';
import './social.css';
class Social extends Component{
    render(){
        return (
            <div className="social-container">
                <h2>
                    شبکه های اجتماعی 
                </h2>
                <ul className="list">
                    <li>
                        <a href="http://www.instagram.com/mehrab.kordbacheh">
                            <img src={instagram} />
                        </a>
                    </li>
                    <li>
                        <a href="http://telegram.me/mehrabkb">
                            <img src={telegram} />
                        </a>
                    </li>
                    <li>
                        <a href="whatsapp://send?abid=+989369849997&text=سلام یه سوال داشتم ">
                            <img src={whatsapp} />
                        </a>
                    </li>
                    <li>
                        <a href="http://aparat.com/mehrabkb">
                            <img src={aparat} />
                        </a>
                    </li>
                    <li>
                        <a href="http://apart.com/mehrabkordbacheh2090">
                            <img src={youtube} />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}

export default Social;