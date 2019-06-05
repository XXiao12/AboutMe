import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WrapperComponent from '../../components/Wrapper';
import profile_image from '../../img/profile_photo.png';
import * as emailjs from 'emailjs-com';

import './styles.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: this.props.fname,
      lname: this.props.lname,
      email: this.props.email,
      subject: this.props.subject,
      message: this.props.message,
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const {
      fname,
      lname,
      email,
      message,
      subject
    } = this.state;

    const params = {
      from_name: `${fname} ${lname} (${email})`,
      to_name: 'shirley.xiao1996@gmail.com',
      subject: subject,
      message_html: message
    };

    emailjs.send(
      'gmail',
      'template_1lmaf88P',
      params,
      'user_KR8ZB8faeOR2mUvgy5haL'
    ).then(response => {
      console.log(response.status, response.text);
    }, error => {
      console.log(error);
    });
    this.setState({
      fname: '',
      lname: '',
      email: '',
      message: '',
      subject: ''
    })
  }

  handleTextChange(param, event) {
    console.log(param, ": ", event.target.value)
    this.setState({ [param]: event.target.value });
  }

  resetForm() {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Message Sent'
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <WrapperComponent>
        <div className="about">
          <div className="about__container">
            <img className="about__profilephoto" src={profile_image} alt="profile" width="130px" />
            <div className="about__content">
              <div>
                <h2>Hi there!</h2>
                <p>I am a recent graduate from Queen's University with a B.A Honours in the Computing and Creative Arts Specialization. I have experience as a graphic designer and as a front-end developer. I love to build and design websites and apps with beautiful interfaces and meaningful user experiences.</p>
              </div>
            </div>

            <h2>What I am up to...</h2>
            <ul>
              <li>working part-time on contract with QoC Health Inc</li>
              <li>seeking a full-time job as a Web Designer / Developer</li>
              <li>continue to update and find ways to improve this portfolio site</li>
              <li>continue to take courses with IDF (<a href="https://www.interaction-design.org/" >Interactive Design Foundation</a>)</li>
            </ul>
          </div>
          <div className="about__container">
            <h2>I am always open to feedback!</h2>
            <p>Let me know what I am doing wrong or what I am doing right.<br />Feel free to also use this form for other inquiries as well.</p>
            <div>
              <form
                id="contact-form"
                onSubmit={e => this.handleFormSubmit(e)}
                method="POST"
              >
                <label>First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                  value={this.state.fname}
                  onChange={e => this.handleTextChange('fname', e)}
                />
                <label>Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  value={this.state.lname}
                  onChange={e => this.handleTextChange('lname', e)}
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={this.state.email}
                  onChange={e => this.handleTextChange('email', e)}
                />

                <label>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="subject"
                  value={this.state.subject}
                  onChange={e => this.handleTextChange('subject', e)}
                />

                <label>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write something.."
                  value={this.state.message}
                  onChange={e => this.handleTextChange('message', e)}
                ></textarea>
                <button id="submit" type="submit">Submit</button>
              </form>
              <p>You could also email me directly at shirley.xiao1996@gmail.com or reach out to me on social media through the links below.</p>
            </div>
          </div>
          <div className="about__links">
            <div className="about__header">
              <h2>You can also find me on</h2>
            </div>
            <div className="about__buttons">
              <Button
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
            </Button>
            </div>
          </div>
        </div>
      </WrapperComponent >
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
