import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Gift extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      person: '',
      present: ''
    }
  }
  removeGift = () => this.props.removeGift(this.props.gift.id)
  render() {
    return(
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={this.removeGift}
        >
          Remove Gift
        </Button>
      </div>
    )
  }
}

export default Gift