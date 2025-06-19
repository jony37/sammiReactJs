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

export default Header