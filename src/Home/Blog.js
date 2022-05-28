import React from 'react';
import Footer from '../Share/Footer';
import Navbar from '../Share/Navbar';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='blog-container'>
                <div className="ques">
                    <h2>1. How will you improve the performance of a React Application?</h2>
                </div>
                <div className="ans">
                    <p>
                        Keep the condition of the material localized where necessary. <br />
                        Remembering feedback elements to prevent unnecessary re-rendering. <br />
                        Code-segmentation in response using dynamic import () <br />
                        Window or list virtualization in response. <br />
                        Lazy loading image in response.
                    </p>
                </div>
                <div className="ques">
                    <h2>2. What are the different ways to manage a state in a React application?</h2>
                </div>
                <div className="ans">
                    <p> 1.Local state. <br />
                        2.Global state. <br />
                        3.Server state. <br />
                        4URL state.</p>
                </div>
                <div className="ques">
                    <h2>3. How does prototypical inheritance work?</h2>
                </div>
                <div className="ans">
                    <p> Prototype inheritance could be a feature of JavaScript that's wont to add ways and options to things. it's a technique by that associate object will inherit the properties and ways of another object. historically, to urge associated set associate [prototype] of an object, we have a tendency to use the thing. getPrototypeOf and object.</p>
                </div>
                <div className="ques">
                    <h2>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                </div>
                <div className="ans">
                    <p> If update it directly, line of work the setState() later on may replace the update created. after you directly update the state, it doesn't modification this.state directly. Instead, it creates a unfinished state transition, and accessing it when line of work this technique can solely come the current worth. may I lose management of the state across all parts.</p>
                </div>
                <div className="ques">
                    <h2>6. What is a unit test? Why should write unit tests?</h2>
                </div>
                <div className="ans">
                    <p>Unit testing could be a software development process where the littlest testable a part of an application, called a unit, is verified individually and independently for correct operation. This testing method is employed by software developers and sometimes QA staff during the event process. This testing method is employed by software developers and sometimes QA staff during the event process. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;