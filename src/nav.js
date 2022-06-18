import React from 'react'
import './nav.css'
import LoginComponent from './components/loginComponent'

class Nav extends React.Component{
    constructor () {
        super()
        this.state = {
          isHidden: true
        }
    }

    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
    }

    render(){
        return(
            <div className='navbar'>
                <div className='nav'>
                    <div className='left'>
                        <h1 className='logo leftbtn'>Golululu</h1>
                    </div>
                    <div className='right'>
                        <a className='menu rightbtn' id='menu-btn' onClick={this.toggleHidden.bind(this)}>Catalogue</a>
                        <LoginComponent />
                        <img src='https://game-icons.net/icons/ffffff/000000/1x1/delapouite/shopping-cart.png' alt='' className='cart rightbtn' />
                    </div>
                </div>
                {
                    !this.state.isHidden 
                    &&
                    <div id='catalogue'>
                        <div id='cata-left'>
                            <p>French</p>
                            <p>Italian</p>
                            <p>Chineese</p>
                            <p>Japaneese</p>
                            <p>Continental</p>
                        </div>
                        <div id='division'></div>
                        <div id='cata-right'>
                            <div className='indian'>
                                <p className='indian-btn'>North Indian</p>
                                <p className='indian-btn'>South Indian</p>
                            </div>
                            <i onClick={()=>{
                                let catagory = document.getElementById('catagory')
                                if(catagory.style.visibility === 'visible'){
                                    catagory.style.opacity = '0'
                                    catagory.style.visibility = 'hidden'
                                }else{
                                    catagory.style.visibility = 'visible'
                                    catagory.style.opacity = '1'
                                }
                            }}>See Catagory-Wise<img src='https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png' id='arrow' /></i>
                            <div id='catagory'>
                                <b>Punjabi</b>
                                <b>Marathi</b>
                                <b>Gujarati</b>
                                <b>Rajasthani</b>
                                <b>Bengali</b>
                                <b>Delhi Spl. Street Food</b>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    } 
}

export default Nav
