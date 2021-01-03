import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import styles from "./custom.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faVenus, faMars, faTransgender } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        firstName: "",
        lastName: "",
        description: "",
        age: 0,
        gender: "genderless"
      }
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/profileApps/")
      .then(res => this.setState({ profile: res.data[0] }))
      .catch(err => console.log(err));
  };

  renderItems = () => {
    let genderIcon = faTransgender;
    if(this.state.profile.gender === "male"){
      genderIcon = faMars
    }
    if(this.state.profile.gender === "female"){
      genderIcon = faVenus
    }
    return(
      <div className={styles.profile}>
        <img src={this.state.profile.picture} className={styles.profilePicture}/>
        <div className={styles.profileInfo}>
          <button
            onClick={() => this.editItem(this.state.profile)}
            className={styles.profileButton}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <p className={styles.profileIdentity}>
            <FontAwesomeIcon icon={genderIcon} />
            {" "}
            {this.state.profile.firstName + " " + this.state.profile.lastName + ", " + this.state.profile.age}
          </p>
          <p className={styles.profileDescription}>
            {this.state.profile.description.length > 220 ? this.state.profile.description.substring(0,220) + "..." : this.state.profile.description.length}
          </p>
        </div>
      </div>);
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/profileApps/${item.id}/`, item)
        .then(res => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/profileApps/", item)
      .then(res => this.refreshList());
  };
  editItem = item => {
    this.setState({ profile: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        {this.renderItems()}
        {this.state.modal ? (
          <Modal
            profile={this.state.profile}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;