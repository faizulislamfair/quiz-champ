import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h2>Questions & Answers</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            1. What is the purpose of React Router?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React Router is a standard library for routing in React. It allows us to navigate among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. React routing allows us to create routes and link to them from our components. When a user clicks a link, React Router determines which route to use and renders the corresponding component.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            2.How does Context API work?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree. To avoid prop drilling we use Context API. Every Context object comes with a Provider React component that allows consuming components to subscribe without changes. The provider component accepts a value prop to be passed to consuming components that are descendants of this provider.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            3.What is useRef Hook? Explain.
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The useRef hook allows us to directly create a reference to the DOM element in the functional component. It returns a mutable ref object. This object has a property known as .current. The value is persisted in the refContainer .current property. From the .current property of the returned object these values are accessed. This .current property can be initialised to the passed argument initialValue. The object can persist a value for a full lifetime of the component. <br />
                            <b>useRef:</b><br />
                            <code>
                                const refContainer = useRef(initialValue);
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;