import React, { Component } from 'react';
class InputField extends Component {
   
    render() { 
        return (
            <div className="col-md-6">
                {this.props.type === 'textarea' ? 
               
                    <div className="form-group">
                        <textarea 
                            className="form-control" 
                            id="message" 
                            placeholder="Your Message *" 
                            onChange ={this.props.onChange}
                            name = {this.props.name}
                            />
                        <p className="help-block text-danger"></p>
                    </div>
                 :
                    <div className="form-group">
                        <input 
                            className="form-control" 
                            id={this.props.id}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            onChange ={this.props.onChange}
                            name = {this.props.name}
                            />
                        <p className="help-block text-danger"></p>
                    </div>
                 }
            </div>
         );
    }
}
 
export default InputField;