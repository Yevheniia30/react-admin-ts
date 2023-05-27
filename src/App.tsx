import React from 'react';
import {dataProvider} from "./utils/dataProvider";
import logo from './logo.svg';
import './App.css';
import UsersList from "./components/UsersList/UsersList";
import { Admin, Resource, ListGuesser } from "react-admin";

function App() {
  return (
    <div className="App">
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UsersList} />
            <Resource name="comments" list={ListGuesser} />
        </Admin>


    </div>
  );
}

export default App;
