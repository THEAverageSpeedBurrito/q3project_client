import React from 'react';
import request from 'superagent';
import ProfileForm from '../components/UserProfileForm.js';
import { Router, browserHistory } from 'react-router'
import routes from '../router'

const DATABASE_URL = "http://localhost:5000";

var editProfileContainer = React.createClass({

  getInitialState(){
    return ({
      profileData: {},
    });
  },

  componentDidMount(){
    this.getUserProfile();
  },

  getUserProfile(){
    var userId = sessionStorage.getItem('id');
    console.log(userId);
    request
      .get(DATABASE_URL + '/api/users/' + userId)
      .end((err, res) => {
        if(err){
          console.log("error getting user info")
        } else {
          this.setState({profileData: res.body});

          console.log(this.state, "state of container after get data");
          this.render();
        }
      });
  },


  handleProfileSubmit(formState, event){
    console.log(formState);

    request
      .patch('http://localhost:5000/api/users/2')
      .send(formState)
      .end(function(err, res){
        if (err || !res.ok){
          alert("error updating user");
          console.log(err);
        } else {
          console.log(res.body);
          browserHistory.push('/feed')
        }
      });

  },


  render: function(){
    var profileForm = this.state.profileDataLoaded = (true) ?
    <ProfileForm
      profileData={this.state.profileData}
      onProfileSubmit={this.handleProfileSubmit}
      disabled={true}
      /> : null;

    return(
      <div>
        {profileForm}
      </div>
    )
  }
});

export default editProfileContainer;