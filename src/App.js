import React, { Component } from 'react';
import "./Styles/styles.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Submit from "./Components/Submit";
import List from "./Components/List";
// import Widgets from "./Components/Widgets";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  state = {
    tasks: ['Avocado', 'Tomatoes', 'Bell Peppers']
  };

  handleSubmit = tasks => {
    this.setState({ tasks: [...this.state.tasks, tasks] });
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  }

  render() {
    return (
      <>
     <Container>
        <Row>
            <Col md="10">
              <div></div>
            </Col>
<Col md="2">
  {/* <Widgets /> */}
</Col>
      

        
          </Row>
        </Container>
       

        <div className='wrapper'>
          <div className='card frame'>
            <Header numTodos={this.state.tasks.length} />
            <Todos tasks={this.state.tasks} onDelete={this.handleDelete} />
            <Submit onFormSubmit={this.handleSubmit} />
            


          </div>
        </div>
      </>
    );
  }
}

export default App;
