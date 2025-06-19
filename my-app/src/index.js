import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

// JSX
const el = (
  <>
    <h1>Hello Jony</h1>
    <input type="text" />
    <button type='button'>Click</button>
  </>
)

// const el = React.createElement("h1", null, "Hello Joxa")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);
