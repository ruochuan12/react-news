import React from 'react';
import ReactDOM from 'react-dom';
export default class Main extends React.Component {
    render(){
        return (
            <div>这里是main页面</div>
        )
    }
}
ReactDOM.render(<Main/>,document.getElementById('app'));
