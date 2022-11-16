import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">

<CommentDetail author="Sam" time="Today at 6:00PM" blog="uhuh" img={faker.image.avatar()}/>
<CommentDetail author="Jane" time="Today at 8:00PM" blog="awesome" img={faker.image.avatar()}/>
<CommentDetail author="Alex"  time="Yesterday at 12:00AM" blog="Yes I am!" img={faker.image.avatar()}/>



</div>





  );
};

ReactDOM.render(<App />, document.querySelector('#root'))