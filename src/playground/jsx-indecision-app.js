console.log("App.js is running");
const app = {
  title: "Indecision app!",
  subtitle: "This is the indecision app",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFunction();
  }
};

const removeAll = () => {
  app.options = [];
  renderFunction();
};

const rootApp = document.getElementById("app");

const numbers = [55, 101, 1001];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  //   console.log(randomNum);
};

const renderFunction = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
      <p>{app.options.length}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        Whats should I do?
      </button>

      <button onClick={removeAll}>Remove All</button>
      {numbers.map((number) => {
        return <p key={Math.random()}>Number: {number}</p>;
      })}
      <ol>
        {app.options.map((option) => {
          return <li key={Math.random()}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, rootApp);
};

renderFunction();
