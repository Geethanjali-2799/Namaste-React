import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement creates object
const headingelement = React.createElement("h1", {id:"heading"}, "Hello World from React!!!");

//using jsx
const headjsx = (<h1 className="Mainhead" >Hello world from JSX</h1>)

//when there are nested elements
const parentelement = React.createElement(
    "div", {id:"parent"}, React.createElement(
        "div", {id:"child1"}, [
            React.createElement("h1", {}, "I am inside nested div under h1tag"), React.createElement("h2", {}, "I am inside nested div under h2tag")]
    )
)

const Bosselement = React.createElement(
    "div", {id:"parent1"}, [
        React.createElement(
        "div", {id:"child1"}, [
            React.createElement("h1", {}, "I am inside nested div under h1tag"), React.createElement("h2", {}, "I am inside nested div under h2tag")]
    ),
        React.createElement(
        "div", {id:"child2"}, [
            React.createElement("h3", {}, "I am inside second nested div under h3tag"), React.createElement("h4", {}, "I am inside second nested div under h4tag")]
    )]
)

const initial = "Hello! "

//React component --> Funtional component---> first letter is caps
 const Titlecomponent = () => <h1 id = "title">This is React component</h1>;

 //component composition --> composing components into one another
const Headingcomponent = () =>(
    <div id="heading">
        {Titlecomponent()}
        <Titlecomponent/>
        {initial}
        <h4>This is component composition</h4>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);