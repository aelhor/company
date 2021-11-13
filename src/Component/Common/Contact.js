import React, {Component} from 'react'
import InputField from "./InputField";
import {withFormik, Field} from 'formik'
 
const feilds = [
    {type : 'text',      id : 'name',    placeholder : 'Your Name...'},
    {type : 'email',     id : 'email',   placeholder : 'Your email...'},
    {type : 'tel',       id : 'phone',   placeholder : 'Your phone...'},
    {type : 'textarea',  id : 'msg',     placeholder : 'Your message...'},


]

class Contact extends Component {
    /*
    handleChange=(e)=>{
        const {value, id} = e.target
        this.setState({[id] :value })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        alert('Form Submited')
    }*/
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <form id="contactForm" name="sentMessage" noValidate="novalidate">
                            <div className="row">
                            {feilds.map((feild, i)=>{
                                return <InputField
                                            key={i} 
                                            {...feild}
                                            value = {this.props.values[Field.name]}
                                            name = {feild.id}
                                            onchange = {this.props.handleChange}
                                              />
                            })}
                           
                                    
                            <div className="clearfix"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <button 
                                    id="sendMessageButton" 
                                    className="btn btn-primary btn-xl text-uppercase" 
                                    
                                    type="submit">Send Message</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default withFormik({
    mapPropsToValues : ()=>({
        name : '',
        email: '',
        phone :'',
        message : ''
    }),
    validate : values => {
        const errors = {}
        Object.keys(values).map(v=>{
            if(!values[v] ) //&& values[email].indexOf('@') >-1
                errors[v] = 'Required !'
        })
        return errors 

    },
    handleSubmit : (values, {setSubmitting})=>{
        alert('Form Submited')
    }
}) (Contact) ;