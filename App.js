const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!!!");

const parent = React.createElement(
    "div", {id:"parent"}, React.createElement(
        "div", {id:"child1"}, [
            React.createElement("h1", {}, "I am inside nested div under h1tag"), React.createElement("h2", {}, "I am inside nested div under h2tag")]
    )
)

const Boss1 = React.createElement(
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Boss1);