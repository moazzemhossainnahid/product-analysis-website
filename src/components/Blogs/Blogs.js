import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container py-5'>
            <div className="txtDiv">
                <h3 className="bg-danger py-3">Context API</h3>
                <p className="">The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.That’s one of the best concepts about React - you can create a bunch of components and have a fully maintainable and concise application, without having to create a super huge component to deal with your whole application.</p>
            </div>
            <div className="txtDiv">
                <h3 className="bg-warning py-3">Semantic Tags</h3>
                <p className="">Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding Language.The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages.

            <h4 className="pt-4">List of Semantic tags</h4>
            
                    <h6>header</h6>
                    <h6>nav</h6>
                    <h6>aside</h6>
                    <h6>article</h6>
                    <h6>section</h6>
                    <h6>footer</h6>

                </p>
            </div>

            <div className="txtDiv">
                <h3 className="bg-info py-3">Difference With Inline, Block & Inline-Block Elements.</h3>
                <div className="p-3 m-3 border border-1 rounded">
                <h3 className="pt-3">Inline Elements</h3>
                <p className="">An inline element does not start on a new line.inline element only takes up as much width as necessary.</p>
                </div>
                <div className="p-3 m-3 border border-1 rounded">
                <h3 className="pt-3">Block Elements</h3>
                <p className="">Block Level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.block-level element always takes up the full width available.</p>
                </div>
                <div className="p-3 m-3 border border-1 rounded">
                <h3 className="pt-3">Inline-Block Elements</h3>
                <p className="">Displays an element as an inline-level block container. You CAN set height and width values.thats call inline block elements. inline-block is custom made element thats you made as you want. </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;