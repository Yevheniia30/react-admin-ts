import React, { FC } from "react";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  ImageField,
  useRecordContext,
} from "react-admin";
import { useMediaQuery } from "@mui/material";
import { MyImageField, MyUrlField } from "../CustomFields/CustomFields";

interface UsersListProps {
  variant: string;
}

const UsersList: FC<UsersListProps> = ({ variant }) => {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <List>
      {isMobile ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.phone}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          {/*<TextField source="username" />*/}
          <EmailField source="email" />
          {/*<TextField source="address.street" />*/}
          <TextField source="phone" />
          {/*<UrlField source="website" />*/}
          <MyUrlField source="website" />
          <MyImageField source="photo" />

          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

UsersList.propTypes = {};

export default UsersList;
