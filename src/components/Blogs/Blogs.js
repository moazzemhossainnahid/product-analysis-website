import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container py-5'>
            <div className="txtDiv">
                <h3 className="bg-danger py-3">Context API</h3>
                <p className="">The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="txtDiv">
                <h3 className="bg-warning py-3">Semantic Tags</h3>
                <p className="">Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding Language.
                Examples of semantic HTML tags.

            <h4 className="pt-4">List of Semantic tags</h4>
            
                    <h6>h1 to h6</h6>
                    <h6>blockquote</h6>
                    <h6>code</h6>
                    <h6>em</h6>

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