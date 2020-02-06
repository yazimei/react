import React from 'react';
import Qualification from './component/qualificationMangement';
import './App.css';
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

class App extends React.Component {
  render() {
    
    return (
      <Qualification></Qualification>
    )
  }
}

export default App;
