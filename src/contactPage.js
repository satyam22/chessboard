import React from 'react';
import ContactForm from './contactForm'

class ContactPage extends React.Component{
constructor(props){
    super(props);
    this.submit=this.submit.bind(this);
}
    submit=(values)=>{
        console.log(values);
    }
    render(){
        return(
        <ContactForm onSubmit={this.submit} />
        );
    }
}
export default ContactPage;