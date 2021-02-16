import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'


export class MailchimpComponent extends Component {

    state = {
        email: null,
        name: null,
        feedbackMsg: null
    }



    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state.name, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                
                this.setState({
                    feedbackMsg: "Great! You've been added to our mailing list. 😁 ",
                  })

                // alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                this.setState({
                    feedbackMsg: "Hmm...your request could not be submitted.🤨",
                  })
            })
    }

    render() {
        return (



            <form onSubmit={this._handleSubmit}>

            <div className="form-container">

             <div className="form-group">
                     <label htmlFor="name">Name</label>
                     <input
            type="text"
            onChange={this._handleChange}
            placeholder="name"
            name="name"
        />
                 </div>

                 <div className="form-group">
                     <label htmlFor="email">Email</label>
                       
        <input
            type="email"
            onChange={this._handleChange}
            placeholder="email"
            name="email"
        />
                 </div>

            </div>
            <div className="success" style={{marginTop: '10px', textAlign: 'center'}}>
                                {this.state.feedbackMsg && <span>{this.state.feedbackMsg}</span>}
                            </div>
            <button type="submit">Sign Up</button>
        </form>
        )
    }
}

export default MailchimpComponent
