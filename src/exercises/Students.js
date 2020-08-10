import React, {Component} from 'react';
import './Students.css';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {name: 'Karen', age: 25, careerId: 0, imageId: 'image2'},
        {name: 'Ben', age: 22, careerId: 5, imageId: 'image1'},
        {name: 'Alfred', age: 18, careerId: 4, imageId: 'image1'},
        {name: 'Arnold', age: 40, careerId: 3, imageId: 'image1'},
        {name: 'Astrid', age: 28, careerId: 1, imageId: 'image2'},
        {name: 'Axel', age: 30, careerId: 8, imageId: 'image1'},
        {name: 'Leo', age: 32, careerId: 9, imageId: 'image1'},
        {name: 'Caleb', age: 19, careerId: 4, imageId: 'image1'},
        {name: 'Cody', age: 21, careerId: 3, imageId: 'image1'},
      ],
    };
  }

  render() {
    return (
      <div class="row">
        {/* start of card */}
        <div class="column">
          <div class="card">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              width="70%"
              height="70%"
            />
            <div class="container">
              <h1 className="Text">Name</h1>
              <p className="Text">Career</p>
            </div>
          </div>
        </div>
        {/* end of card */}
      </div>
    );
  }
}

export default Students;
