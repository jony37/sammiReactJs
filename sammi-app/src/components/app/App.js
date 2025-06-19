import "./App.css";
import Sammi from "../sammi/sammi";

const Header = () => {
  const getText = (text) => {
    return (
      <div>
        <h1>Hello {text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          sapiente omnis ad ipsa ullam illo harum itaque laudantium odio sit ut
          maxime id natus, vitae facere consequuntur aperiam incidunt nulla.
        </p>
      </div>
    );
  };

  return <div>{getText("Jony")}</div>
};

const Field = () => {
  const placeholder = "Teping...";
  const type = "text";
  return <input type={type} placeholder={placeholder} />;
};

const Button = () => {
  const user = true;
  const login = "login";
  return <button type="button">{user ? "logout" : login}</button>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Button />
    </div>
  );
}

export default App;
