import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import WrapperComponent from "../../components/Wrapper";
import profile_image from "../../media/imgs/profile_photo.png";
import * as emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDribbble,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      email: "",
      subject: "",
      message: "",
      notification: "",
      mailSent: false,
      error: null
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { fname, email, message, subject } = this.state;

    if (fname === "" || email === "" || message === "") {
      this.setState({
        notification: "Please enter your name, email and message."
      });
    } else if (message.length < 20) {
      this.setState({ notification: "Please provide more information :)" });
    } else {
      // this.resetForm();
      const params = {
        from_name: `${fname} (${email})`,
        to_name: "shirley.xiao1996@gmail.com",
        subject: subject,
        message_html: message
      };

      emailjs
        .send(
          "gmail",
          "template_1lmaf88P",
          params,
          "user_KR8ZB8faeOR2mUvgy5haL"
        )
        .then(
          response => {
            this.resetForm();
          },
          error => {
            console.log(error);
            this.setState({ error: error });
          }
        );
    }
  }

  handleTextChange(event) {
    // temp solution for uglifyjs error with es6 version
    const eventObject = {notification: ""};
    eventObject[event.target.name] = event.target.value;
    this.setState(eventObject);
    // this.setState({
    //   [event.target.name]: event.target.value,
    //   notification: ""
    // });
  }

  resetForm() {
    console.log("reset form");
    this.setState({
      fname: "",
      email: "",
      message: "",
      subject: "",
      mailSent: true,
      notification: ""
    });

    this.setState({
      mailSent: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <WrapperComponent
        mailSent={this.state.mailSent}
        mailSentError={this.state.error}
        notification={this.state.notification}
      >
        <div className="about">
          <div className="about__container">
            <img
              className="about__profilephoto"
              src={profile_image}
              alt="profile"
              width="200px"
              height="200px"
            />
            <div className="about__content">
              <div className="about__content--center">
                <h1>Hi there!</h1>
                <p>
                  My name is Shirley Xiao. I am a multi-disiplined developer with
                  skills ranging from design to front-end development.
                </p>
              </div>
              <div className="about__links">
                <div className="about__buttons">
                  {/* <Button
                    variant="outlined"
                    href="https://github.com/XXiao12"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    className={classes.button}>
                    Github
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit" className={classes.button}>
                    LinkedIn
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://dribbble.com/shirley_x"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    className={classes.button}>
                    Dribbble
                  </Button> */}
                  <IconButton
                    variant="outlined"
                    href="https://github.com/XXiao12"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    className={classes.button}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    href="https://www.linkedin.com/in/shirley-xiao-b72335a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    className={classes.button}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                  <IconButton
                    variant="outlined"
                    href="https://dribbble.com/shirley_x"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    className={classes.button}
                  >
                    <FontAwesomeIcon icon={faDribbble} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          <div className="about__container">
            <h2>I am always open to feedback!</h2>
            <p>
              Let me know what I am doing wrong or what I am doing right.
              <br />
              Feel free to also use this form for other inquiries as well.
            </p>
            <div>
              <form
                id="contact-form"
                onSubmit={this.handleFormSubmit}
                method="POST"
              >
                <label>Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your name.."
                  value={this.state.fname}
                  onChange={this.handleTextChange}
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={this.handleTextChange}
                />

                <label>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                  value={this.state.subject}
                  onChange={this.handleTextChange}
                />

                <label>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write something.."
                  value={this.state.message}
                  onChange={this.handleTextChange}
                ></textarea>
                <button id="submit" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </WrapperComponent>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
