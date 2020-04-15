const app = {
  title: "Assignment2",
  subtitle: "This is the assignment 2 from andrew!",
  options: ["one", "two"],
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
// var template = React.createElement("h1", {
//     id: "someId"
//   }, "This is Content from JSX.!");
// const appRoot = document.getElementById("app");

const user = {
  name: "Keshar",
  age: 22,
  location: "Kalopul,Ktm",
};

const templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age:{user.age}</p>
    <p>{user.location}</p>
  </div>
);

const rootApp = document.getElementById("app");
ReactDOM.render(template, rootApp);
