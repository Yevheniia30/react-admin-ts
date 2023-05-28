import React from "react";
import { dataProvider } from "./utils/dataProvider";
import logo from "./logo.svg";
import "./App.css";
import UsersList from "./components/UsersList/UsersList";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import {
  PostsList,
  PostEdit,
  PostCreate,
} from "./components/PostsList/PostsList";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import CommentIcon from "@mui/icons-material/Comment";
import Dashboard from "./components/Dashboard/Dashboard";
import { authProvider } from "./authProvider";

function App() {
  return (
    <div className="App">
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          list={UsersList}
          recordRepresentation="name"
          icon={UserIcon}
        />
        <Resource
          name="posts"
          list={PostsList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
        />
        <Resource name="comments" list={ListGuesser} icon={CommentIcon} />
      </Admin>
    </div>
  );
}

export default App;
