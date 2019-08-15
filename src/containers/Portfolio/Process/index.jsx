import React from 'react';
import { Link } from 'react-router-dom';
import WrapperComponent from '../../../components/Wrapper/index';
import './styles.css';

class Process extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({ open: !state.open }));
    }

    render() {
        return <WrapperComponent>
            <h1>Design Process</h1>
            <p>This is the workflow I try to follow when creating any design. It could change a bit depending what I am designing for (e.g., poster vs mobile app).</p>
            <div className="process__steps">
                <h2 className="process__heading">Step 1</h2>
                <div className="process__content">
                    <p>The goal of this step is to understand the problems, history, and background information of the project, product, or company. It depends on what the design is for.</p>
                    <p>Here is a list of things I would typically do:</p>
                    <ul>
                        <li>Read up on previous documentation, if it exists</li>
                        <li>Conduct surveys/questionnaires for the end users or clients of the project to empathize more with the users or who it will be targeting</li>
                        <li>Gather information and find pain points and brainstorm how it could be improved (personas, journey maps, or user workflows)</li>
                    </ul>
                </div>

                <h2 className="process__heading">Step 2</h2>
                <div className="process__content">
                    <p>The goal of this step is to get a concept of what type of design the client prefers.</p>
                    <p>Here is a list of things I would typically do:</p>
                    <ul>
                        <li>Do research</li>
                        <li>Use what I can from the first step and find inspiration through photographs or everyday interactions</li>
                        <li>Create look and feel boards or moodboards; I create up to 2 or 3 different types</li>
                    </ul>
                </div>

                <h2 className="process__heading">Step 3</h2>
                <div className="process__content">
                    <p>The goal of this step is the low + medium fidelity mockups. It is to help plan where the information would go, the flow of the app, and how some features would be displayed on a certain type of platform.</p>
                    <p>Here is a list of things I would typically do:</p>
                    <ul>
                        <li>Use paper for low fidelity mockups and then I would move to a software such as Sketch or Adobe XD to create the medium fidelity</li>
                        <li>Get feedback from peers of the designs</li>
                        <li>Think about as a developer what designs as feasible and ask fellow developers about their opinions</li>
                        <li>Try to use libraries for buttons, icons, etc. when I can (Font Awesome, Material UI, Ant, etc.)</li>
                    </ul>
                </div>

                <h2 className="process__heading">Step 4</h2>
                <div className="process__content">
                    <p>The goal of this step is to get the client's signoff by showcasing high fidelity mockups and possibly protyping it. This step is where I would show my designs to the client for feedback and there will be a few rounds of this interaction.</p>
                    <p>Here is a list of things I would typically do:</p>
                    <ul>
                        <li>Use software such as Sketch or Adobe XD to create wireframes with colour</li>
                        <li>I currently use Sketch to prototype some wireframes</li>
                        <li>Get feedback from peers of the designs</li>
                        <li>Create different options of what the design could look like when I am uncertain which interaction or design the client would like better</li>
                    </ul>
                </div>

                <h2 className="process__heading">Step 5</h2>
                <div className="process__content">
                    <p>The goal of this step is the handoff from designer to developer. Currently, the place I am working at the handoff is just a pdf of the high fidelity wireframes.</p>
                    <p>However, if I could change the handoff to developers this is what I would do:</p>
                    <ul>
                        <li>One option would be to create a design system; I have been seeing this around a lot and I think this is an awesome idea</li>
                        <li>Another option is to create a style guide with the commonly used styles that will be used throughout the app</li>
                    </ul>
                </div>
            </div>
            <div className="process__buttons">
                <Link
                    className="links--themeblack"
                    to="/portfolio">
                    Back to Portfolio
            </Link>
            </div>
        </WrapperComponent >
    }
};

export default Process;
