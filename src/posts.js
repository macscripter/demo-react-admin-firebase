// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  SelectField
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" />
      <RichTextField source="body" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="body" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="title" />
      <RichTextInput source="body" />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <RichTextInput source="body" />
      <SelectInput source="rating" choices={[
        { id: 1, name: 'Good' },
        { id: 2, name: 'Okay' },
        { id: 3, name: 'Bad' },
      ]} />
    </SimpleForm>
  </Edit>
);