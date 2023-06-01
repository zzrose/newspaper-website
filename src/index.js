import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/Header/';
import Login from './components/Login/';
import List from './containers/List/';
import Detail from './containers/Detail/';
import Vip from './containers/Vip';
import 'antd/dist/antd.css';
import './style.css';

const { Header, Footer, Content } = Layout;
class App extends Component {
	render() {
		return(
			<BrowserRouter>
				<Layout style={{ minWidth: 1300, height: "100%" }}>
      				<Header className="header">
      					<AppHeader />
      				</Header>
      				<Content className="content">
      					<Login />		
      					<Switch>
      						<Route path='/vip' component={Vip} />     						
      						<Route path='/detail/:id' component={Detail} />
      						<Route path='/:id?' component={List} />
      					</Switch>     				
      				</Content>
      				<Footer className="footer">@copyright Zhen-Zhu 2019</Footer>
    			</Layout>
    		</BrowserRouter>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));


