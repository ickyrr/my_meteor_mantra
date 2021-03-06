import React from 'react';
import NavbarMain from '../containers/navbar_main';
import Footer from '../components/footer';
import { AppVerifiedMsg } from '/client/configs/components'
import {
  Col,
  Grid,
  Row,
} from 'react-bootstrap'

class LayoutSplit extends React.Component {
  render() {
    const { content = () => null, emailVerified, loggedIn } = this.props
    return (
      <div>
        <NavbarMain />
        <AppVerifiedMsg loggedIn={ loggedIn } emailVerified={ emailVerified }/>
        <Grid>
          <Row>
            <Col sm={6}>
              <h3>Why hello there.</h3>
            </Col>
            <Col sm={6}>
              { content() }
            </Col>
          </Row>
        </Grid>
        <hr />
        <Footer />
      </div>
    )
  }
}

export default LayoutSplit;
