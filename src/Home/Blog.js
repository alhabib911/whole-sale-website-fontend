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
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className="ques">
                    <h2>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                </div>
                <div className="ans">
                    <p> If you update it directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.</p>
                </div>
                <div className="ques">
                    <h2>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                </div>
                <div className="ans">
                    <p> </p>
                </div>
                <div className="ques">
                    <h2>6. What is a unit test? Why should write unit tests?</h2>
                </div>
                <div className="ans">
                    <p>Unit testing is a software development process where the smallest testable part of an application, called a unit, is verified individually and independently for proper operation. This testing method is used by software developers and sometimes QA staff during the development process. </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;