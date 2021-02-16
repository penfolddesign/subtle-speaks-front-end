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

        addToMailchimp(this.state.email, this.state)
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
            <div>
                
            </div>
        )
    }
}

export default MailchimpComponent
