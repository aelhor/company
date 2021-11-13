import React,{Component} from 'react'
import SinglePortfolio from './SinglePortfolio'
import image1 from '../assets/imgs/portfolio/01-full.jpg'
import image2 from '../assets/imgs/portfolio/02-full.jpg'
import image3 from '../assets/imgs/portfolio/03-full.jpg'
import image4 from '../assets/imgs/portfolio/04-full.jpg'
import image5 from '../assets/imgs/portfolio/05-full.jpg'
import image6 from '../assets/imgs/portfolio/06-full.jpg'


const OurPortfolio = [
    {title :'Threads' ,subtitle : 'Illustration',          img : image1},
    {title : 'Explore',subtitle : 'Graphic Design',        img : image2},
    {title :'Finish' ,subtitle :'identity' ,               img : image3},
    {title : 'Lines',subtitle :'Branding' ,                img : image4},
    {title : 'Southwest',subtitle : 'Website Design',      img : image5},
    {title : 'Window',subtitle :'Photography' ,            img : image6}
]

export default class Portfolio extends Component {
    render(){
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                       {OurPortfolio.map((Port, i)=> {
                           return <SinglePortfolio key={i} {...Port} />
                       })}
                    </div>
                </div>
            </section>
        )
    }
}








