import React from 'react';
import {List, SimpleList, Datagrid, TextField, EmailField, UrlField} from "react-admin";
import {useMediaQuery} from '@mui/material'


const UsersList = (props:any) => {
    const isMobile=useMediaQuery((theme: any)=> theme.breakpoints.down('sm'))

    return (
        <List>
            {isMobile?  <SimpleList
                primaryText={(record) => record.name}
                secondaryText={(record) => record.username}
                tertiaryText={(record) => record.phone}
            />:  <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                {/*<TextField source="username" />*/}
                <EmailField source="email" />
                {/*<TextField source="address.street" />*/}
                <TextField source="phone" />
                <UrlField source="website" />
                <TextField source="company.name" />
            </Datagrid>}


        </List>
    );
};

UsersList.propTypes = {

};

export default UsersList;