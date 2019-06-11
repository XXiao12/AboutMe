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
      fname: '',
      email: '',
      subject: '',
      message: '',
      notification: '',
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log('aaaaa: ', this.state);
    const {
      fname,
      email,
      message,
      subject
    } = this.state;

    if (fname === '' || email === '' || message === '') {
      this.setState({ notification: "Please enter your name, email and message." });
    } else if (message.length < 20) {
      this.setState({ notification: "Please provide more information :)" });
    } else {
      // this.resetForm();
      const params = {
        from_name: `${fname} (${email})`,
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
        this.resetForm();
      }, error => {
        console.log(error);
        this.setState({ error: error });
      });
    }
  }

  handleTextChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value,
      notification: '',
     });
  }

  resetForm() {
    console.log('reset form');
    this.setState({
      fname: '',
      email: '',
      message: '',
      subject: '',
      mailSent: true,
      notification: ''
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
                onSubmit={this.handleFormSubmit}
                method="POST"
              >
                <label>Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your name.."
                  defaultValue=""
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
                <button
                  id="submit"
                  type="submit"
                >
                  Submit
                </button>
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
