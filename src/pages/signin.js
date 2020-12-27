import React from 'react'
import SignUp from '../components/formComponents/SignUp'
import ConfirmSignUp from '../components/formComponents/ConfirmSignUp'
import SignIn from '../components/formComponents/SignIn'
import Inventory from '../templates/Inventory'
import CategoryView from "../templates/CategoryView"
import inventory from "../../providers/inventory"

const pageContext = {
  'title':"pet",
  'content':{
    'items':inventory
  }
}


class Admin extends React.Component {
  state = { formState: 'signUp', isAdmin: false }
  toggleFormState = (formState) => {
    this.setState(() => ({ formState }))
  }
  async componentDidMount() {
    // check and update signed in state
  }
  signUp = async (form) => {
    const { username, email, password } = form
    // sign up
    this.setState({ formState: 'confirmSignUp' })
    localStorage.setItem("formState", "confirmSignUp")
  }
  confirmSignUp = async (form) => {
    const { username, authcode } = form
    // confirm sign up
    this.setState({ formState: 'signIn' })
    localStorage.setItem("formState","signIn")
  }
  signIn = async (form) => {
    const { username, password } = form
    // signIn
    this.setState({ formState: 'signedIn', isAdmin: true })
    localStorage.setItem("isAdmin","true");
    localStorage.setItem("formState", "signedIn")
  }
  signOut = async() => {
    // sign out
    this.setState({ formState: 'signUp' })
    localStorage.setItem("formState", "signUp");
  }

  render() {
    const { formState, isAdmin } = this.state
    const renderForm = (formState, state) => {
      switch(formState) {
        case 'signUp':
          return <SignUp {...state} signUp={this.signUp} toggleFormState={this.toggleFormState} />
        case 'confirmSignUp':
          return <ConfirmSignUp {...state} confirmSignUp={this.confirmSignUp} />
        case 'signIn':
          return <SignIn {...state} signIn={this.signIn} toggleFormState={this.toggleFormState} />
        case 'signedIn':
          // return isAdmin ? <Inventory {...state} signOut={this.signOut} /> : <h3>Not an admin</h3>
          return isAdmin ? <CategoryView {...state} pageContext={pageContext} signOut={this.signOut} /> : <h3>Not an admisn</h3>
        default:
          return null
      }
    }
    
    return (
      <div className="flex flex-col">
        <div className="max-w-fw flex flex-col">

          {
            renderForm(formState)
          }
        </div>
      </div>
    )
  }
}

export default Admin