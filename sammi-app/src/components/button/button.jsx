const Button = () => {
  const user = true;
  const login = "login";
  return <button type="button">{user ? "logout" : login}</button>;
};


export default Button