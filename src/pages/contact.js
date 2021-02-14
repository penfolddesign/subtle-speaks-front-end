import React from 'react'
import OtherLayout from '../components/otherLayout'
import SEO from '../components/seo'

import axios from 'axios'
import * as qs from 'query-string'

class Contact extends React.Component {
    constructor(props){
        super(props)
        this.domRef = React.createRef()
        this.state = { feedbackMsg: null }
    }

    handleSubmit(event){
        event.preventDefault()
        const formData = {}
        Object.keys(this.refs).map(key => (formData[key] = this.refs[key].value))

        const axiosOptions = {
            url: "https://subtle-speaks-front-end-netlify.app",
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(formData),
          }

          axios(axiosOptions)
    .then(response => {
      this.setState({
        feedbackMsg: "Great! Your request submitted successfully! 😁 ",
      })
      this.domRef.current.reset()
    })
    .catch(err =>
      this.setState({
        feedbackMsg: "Hmm...your request could not be submitted. 🤨",
      })
    )
    }



    render(){
    return (
     <OtherLayout>
         <SEO title="Contact"/>
        
        <section className="contact-section">

            <div className="contact-image" style={{backgroundImage: 'url(https://res.cloudinary.com/dhh2ejp7p/image/upload/v1613313057/contact_image_21cf797f64.jpg)'}}></div>
            <div className="contact-form">
            <h1>GET IN TOUCH<span style={{color: '#2BB2FF'}}>.</span> </h1>
            <p>We'd love to hear from you and know what you think about our projects, or if you have any questions in general. Please use the contact form below or get in touch via our socials.</p>
           <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" ref={this.domRef} onSubmit={event => this.handleSubmit(event)} >
               <input type="hidden" name="bot-field" />
                <input type="hidden" name="contact-form" value="contact" />

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    
                    <button type="submit">Submit</button>
                    <div className="success">
                        {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
                    </div>
                </form>
            </div>
        
        </section>

     </OtherLayout>
    )
}
}

export default Contact
