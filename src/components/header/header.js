import './header.css';
import React , {Component , useState ,  useEffect} from 'react';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullTime : [],
      fullDate : []
    }
  }
  componentDidMount(){
    setInterval(() => {      
      fetch('https://api.keybit.ir/time/').
      then(res => res.json()).
      then(
        (result)=>{
          this.setState({
            fullTime : result.time24.full.en,
            fullDate : result.date.full.official.usual.en
          })
        }
      )
    }, 1000);
  }
  render(){
    const {fullTime , fullDate} = this.state;
    return <div className="main-header">
        <header className='header'>
            <nav className='header-menu'>
                <ul className='list'>
                    <li className='list-item'>خانه</li>
                    <li className='list-item'>نمونه کار</li>
                    <li className='list-item'>تماس با من</li>
                    <li className='list-item'>
                      <span>ساعت به وقت تهران :</span>
                      <span className='time'>{fullTime}</span>
                    </li>
                    <li className='list-item'>
                      <span>تاریخ:</span>
                      <span className='time'>{fullDate}</span>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  }
}

export default Header;
