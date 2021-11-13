import React, {Component} from 'react'
import SingleService from './singleService'
//import Header from './Header'
//import Image from '../assets//imgs/services.png'


const ourServices = [
    {title :  'E-Commerce ', icon: 'fa-laptop', details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
    {title : 'Responsive Design', icon: 'fa-lock', details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'},
    {title : 'Web Security' , icon: 'fa-shopping-cart', details : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.'}
]

export default class Services extends Component {

    render() {
        return (
            <div>
                <section className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Services</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                       {ourServices.map((Service, i)=>{
                           return (
                               <SingleService key = {i} {...Service}/>
                           )
                       }

                       )}
                    </div>
                </div>
            </section>
            </div>
        )

    }
}