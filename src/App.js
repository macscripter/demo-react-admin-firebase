import * as React from 'react';
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider
} from 'react-admin-firebase';

const config = {
  apiKey: "AIzaSyBJIVBrJ1Ru5pd-wJ1dlCYj6ddq1AAw7xI",
  authDomain: "test-react-admin-1854c.firebaseapp.com",
  databaseURL: "https://test-react-admin-1854c.firebaseio.com",
  projectId: "test-react-admin-1854c",
  storageBucket: "test-react-admin-1854c.appspot.com",
  messagingSenderId: "653484435936",
};

const dataProvider = FirebaseDataProvider(config);
const options = {
  observe: ['posts']
}
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <Admin 
        customSagas={[firebaseRealtime]}
        dataProvider={dataProvider} 
      >
        <Resource name="posts" list={PostList} show={PostShow} create={PostCreate} edit={PostEdit}/>
      </Admin>
    );
  }
}

export default App;