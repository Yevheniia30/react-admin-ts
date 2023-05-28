import React, { FC } from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  SimpleForm,
  ReferenceInput,
  TextInput,
  Edit,
  Create,
  useRecordContext,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];

export const PostsList: FC = () => {
  return (
    <List filters={postFilters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />

        <TextField source="title" />
        {/*<TextField source="body" />*/}
        <EditButton />
      </Datagrid>
    </List>
  );
};

export const PostEdit: FC = () => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate: FC = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      {/*<TextInput source="id" disabled />*/}
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

export const PostTitle = () => {
  const record = useRecordContext();
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};
