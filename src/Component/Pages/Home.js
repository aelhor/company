import React, {Component} from 'react'
import Header from '../Common/Header'
import Image from '../assets/imgs/header-bg.jpg'
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Team from '../Common/Team'
import Contact from '../Common/Contact'

 
class Home extends Component {
    render(){
        return (
            <div >
                <Header  
                    title = 'Welcome To Our Studio!'
                    subTitle = 'Its Nice To Meet You '
                    btnText ='Tell Me More'
                    link ='/about'
                    showBtn = {true}
                    img = {Image}
                />
                <Services />
                <Portfolio />
                <Team />
                <Contact />
             </div>
        )
    }
}
export default Home;