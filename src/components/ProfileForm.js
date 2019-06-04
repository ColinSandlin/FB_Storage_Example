import React from 'react';
import { Header, Form, Grid, Button, Ref } from 'semantic-ui-react';
import { saveProfile } from "../APIManager/profiles"
import * as firebase from "firebase/app";
import 'firebase/storage';



class ProfileForm extends React.Component {
  storageRef = firebase.storage().ref('profiles')

  state = {
    username: '',
    aboutMe: '',
    photoUrl: null
  };

  saveProfile = () => {
    const ref = this.storageRef.child(`${Date.now()}`)
    ref.put(this.state.photo)
      .then(data => data.ref.getDownloadURL())
      .then(url => {
        saveProfile({
          username: this.state.username,
          aboutMe: this.state.aboutMe,
          photoUrl: url
        });
      })
      .then(() => this.props.history.push("/profiles"))
  }

  render() {
    return (
      <div className="image-form--container">
        <Header>
          Add a Profile
        </Header>
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={4} computer={6} tablet={8} mobile={12}>
              <Form onSubmit={this.saveProfile}>
                <Form.Field
                  control="input"
                  type="text"
                  label="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  placeholder="Username" />
                <Form.Field
                  control="input"
                  type="text"
                  label="About"
                  onChange={(e) => this.setState({ aboutMe: e.target.value })}
                  placeholder="About me" />
                <Form.Field
                  control="input"
                  type="file"
                  label="ProfPic"
                  onChange={(e) => this.setState({ photo: e.target.files[0] })}
                  placeholder="About me" />
                <Button type="submit" content="Save" color="purple" />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProfileForm;