import './header.css';
import React , {Component , useState ,  useEffect} from 'react';
import bmenu from '../../images/icons8-menu.svg';
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullTime : [],
      fullDate : []
    }
  }
  btnMenuClick(){
    let menu = document.querySelector('div.navigation-menu');
    menu.classList.add('show');;
  }
  closeMenu(){
    let menu = document.querySelector('div.navigation-menu');
    menu.classList.remove('show')
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
        <header className='header header-desktop'>
            <nav className='header-menu'>
                <ul className='list'>
                    <li className='list-item'>خانه</li>
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
        <div className='responsive-header'>
          <div className='main'>
            <div className='menu-button' onClick={this.btnMenuClick}>
              <button>
                <img src={bmenu} />
              </button>
            </div>
          </div>
          <div className='navigation-menu'>
            <nav>
              <ul>
                <li>
                  <a>
                    خانه
                  </a>
                </li>
                <li>
                  <span>ساعت :‌</span>
                  <span>{fullTime}</span>
                </li>
                <li>
                  <span>تاریخ :‌</span>
                  <span>{fullDate}</span>
                </li>
                <li onClick={this.closeMenu}>
                  بستن
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </div>
  }
}

export default Header;
