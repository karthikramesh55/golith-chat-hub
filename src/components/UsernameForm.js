import React, {Component} from 'react'

class UsernameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    onChange(e) {
        this.setState({username: e.target.value})
    }

    render() {

        const styles ={
            ConUsername: {
                /*display: 'flex',
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,*/
                paddingTop: 250,
                paddingBottom: 30,
                paddingLeft: 500
            },

            usernameHeader: {
                paddingBottom: 50,
                paddingLeft: 110
            },

            formUsername: {
                paddingRight: 500,
                alignItems: 'center',
                paddingLeft: 140
            },

            titleClass: {
                paddingBottom: 50,
                paddingLeft: 10,
                paddingRight: 400,
                fontSize: 50
            },

            footerClass: {
                paddingTop: 50,
                paddingLeft: 0,
                paddingRight: 300
            },

            textClass: {
                borderColor: 'black',
                height: 32,
                margin: 20
            },

            submitButton: {
                borderColor: 'black'
            }
            
        }

        return (
            <div>
                <div style={styles.ConUsername}>
                    <h1 style={styles.titleClass}>
                        &#9881;  Golith Chat Hub  &#9881;
                    </h1>

                    <h2 style={styles.usernameHeader}>
                        Chat With Your Fellow Artists
                    </h2>

                    <form style={styles.formUsername} onSubmit={this.onSubmit}>
                        <input type="text" placeholder="  Type Thy Name" onChange={this.onChange}>
                        </input>
                        
                        <input round class="btn" type="submit">
                        </input>
                    </form>

                    <h4 style={styles.footerClass}>
                        Made by Engineering Team @ Golith Republic | Co-Founder: Karthik | &copy; Copyrights - 2018
                    </h4>
                </div>
            </div>
        )
    }
}

export default UsernameForm