const User = (props) => {
  console.log(props);

  return (
    <div>
      <h1>
        Mening ismim {props.firstName}, Sharifim {props.lastName}
      </h1>
      <a href={props.link}>Youtube kanalim</a>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User firstName="Jonpolat" lastName="Ravshanov" link="instagram.com" />
    </div>
  );
};

export default App;
