import React from 'react';
import NavBar from './components/layout/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Dashboard from "./components/layout/Dashboard";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <Container fluid="true">
                <Dashboard></Dashboard>
            </Container>
        </div>
    );
}

export default App;
