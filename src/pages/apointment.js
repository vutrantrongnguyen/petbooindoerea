import React from "react"
import {Table, Form} from "react-bootstrap"
class SignUp extends React.Component {
  state = {
    username: "", email: "", password: "", phone: "",
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h4>Pet medical history</h4>
        <hr/>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <Table striped bordered hover style={{display:this.state.table}}>
              <thead>
              <tr>
                {/*<th>#</th>*/}
                <th>Name</th>
                <th>Time</th>
                <th>Detail</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Duc</td>
                <td>Husky</td>
                <td>22</td>
              </tr>
              <tr>
                <td>La</td>
                <td>poodle</td>
                <td>22</td>
              </tr>
              </tbody>
            </Table>

            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Preslyyyyy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp