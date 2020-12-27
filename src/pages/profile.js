import React from "react"
import { Table, Form, Button, Col } from "react-bootstrap"
import { toast } from "react-toastify"

const initialState = {
  "div1": "",
  "div2": "none",
  "name": "Nguyen",
  "email": "quenmatkhaupart3@gmail.com",
  "phone": "0986074671",
  "password": "123456",
  "pet": [{
    "name": "Duc",
    "type": "Husky",
    "yob": "22",
    "weight": "60",
    "sex": "Male",
  }, {
    "name": "Duc",
    "type": "Husky",
    "yob": "22",
    "weight": "60",
    "sex": "Male",
  }],
}

class Profile extends React.Component {
  // constructor() {
  //   super()
  //
  // }

  componentDidMount() {
    if (typeof window !== "undefined") {
      console.log("ók")
      const storageState = window.localStorage.getItem("PROFILE")
      if (!storageState) {
        window.localStorage.setItem("PROFILE", JSON.stringify(initialState))
      }
      // this.state = JSON.parse(storageState)

    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  saveProfile = (e) => {
    window.localStorage.setItem("PROFILE", JSON.stringify(this.state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    this.forceUpdate()
  }

  Edit = (e) => {
    window.location.href("/editProfile")
    // this.setState({ div1: "none", div2: "" })
  }

  handleClick =(e) => {
    window.location.href = "/editProfile"
  }

  Edit2 = (e) => {
    this.setState({ div1: "", div2: "none" })
    window.localStorage.setItem("PROFILE", JSON.stringify(this.state))
    toast("Successfully update profile!", {
      position: toast.POSITION.TOP_LEFT,
    })
    this.forceUpdate()
  }

  render() {
    this.state = initialState
    if (typeof window !== "undefined") {
      const storageState = window.localStorage.getItem("PROFILE")
      if (storageState) {
        this.state = JSON.parse(storageState)
      }
    }
    return (
      <div>
        <div className="flex flex-1 justify-center">
          <div className="w-full max-w-144">
            <strong>Profile</strong>
            <hr />
            <div style={{ display: this.state.div1 }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <span>{this.state.name}</span>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <span>{this.state.email}</span>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <span>{this.state.phone}</span>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <span>***********</span>
              </div>
              <div>
                <strong>Your pets</strong>
                <hr />
                <Table striped bordered hover>
                  <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>YoB</th>
                    <th>Weight</th>
                    <th>Sex</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.pet.map((item) => {
                      return (<tr>
                          <td>{item.name}</td>
                          <td>{item.type}</td>
                          <td>{item.yob}</td>
                          <td>{item.weight}</td>
                          <td>{item.sex}</td>
                        </tr>
                      )
                    },
                  )}

                  </tbody>
                </Table>
              </div>
              <button style={{
                backgroundColor: "#85cef9",
                margin: "auto",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }} onClick={this.handleClick}>Change profile & pet
              </button>
            </div>
            <div style={{ display: this.state.div2 }}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  onChange={this.onChange} name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username" type="text" placeholder={this.state.name} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  onChange={this.onChange} name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email" placeholder={this.state.email} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  onChange={this.onChange} name="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone" type="text" placeholder={this.state.phone} />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.onChange} name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="******************" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Re-enter Password
                </label>
                <input
                  onChange={this.onChange} name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="******************" />
              </div>
              <strong>Your pets</strong>
              <hr />

              <Form>
                {this.state.pet.map((item) => {
                    return (<>
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Name</Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Type</Form.Label>
                            <Form.Control />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>YoB</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>...</option>
                            </Form.Control>
                          </Form.Group>
                        </Form.Row>
                        <Form.Row>
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="email" />
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                              <option>Choose...</option>
                              <option>...</option>
                            </Form.Control>
                          </Form.Group>

                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label></Form.Label>
                            <Button>Delete</Button>
                          </Form.Group>
                        </Form.Row>

                      </>
                    )
                  },
                )}
                <Button variant="primary" onClick={this.Edit2}>
                  Save
                </Button>
              </Form>
            </div>
          </div>

        </div>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Preslyyyyy. All rights reserved.
        </p>
      </div>
    )
  }
}

export default Profile