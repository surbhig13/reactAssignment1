import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import Resume from './components/resume';


export default class App extends Component {
  render(){
    return (
      <div className="demo-big-content">
    <Layout>
        <Header title="Menu" scroll>
            <Navigation>
                <a href="#">AboutMe</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
                
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <a href="#">AboutMe</a>
                <a href="#">Contact</a>
                <a href="#">Projects</a>
                
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
   <Resume/> 
</div>
  )
 } }
