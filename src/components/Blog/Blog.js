import React from 'react';

const Blog = () => {
    return (
        <div className='blog-container w-1/2 mx-auto'>
            <div className='my-5 border border-indigo-700 p-10 rounded'>
                <h3 className='text-2xl'>The purpose of React Router </h3>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                <p>By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                <p>An API is any place where a piece of code talks to another piece of code, but we often use it to mean somebody's external resource that gives me values, or our own internal database resource(s).

                    If you are using a frontend and a backend, and you are potentially writing in multiple languages that don't necessarily have the same routing conventions, don't worry! The backend functions just as an API, and the user really doesn't interact with it at all. The routes that used to manage the user experience and the routes that used to manage queries to the database are not the same.</p>
            </div>
            <div className='my-5 border border-indigo-700 p-10 rounded'>
                <h1 className='text-2xl'>How does Context API work?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it.</p>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
            </div>
            <div className='my-5 border border-indigo-700 p-10 rounded'>
                <h1 className='text-2xl'>How does work useRef?</h1>
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                <p>In this post you'll learn how to use React.useRef() hook to create persisted mutable values (also known as references or refs), as well as access DOM elements.</p>
                <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.</p>
                <p>There are 2 rules to remember about references:

                    1. The value of the reference is persisted (stays the same) between component re-renderings;
                    2. Updating a reference doesn't trigger a component re-rendering.</p>
            </div>
        </div>
    );
};

export default Blog;