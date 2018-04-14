import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class Button extends Component {
    render() {
        return(
            <button>Test</button>
        );
    }
}

ReactDOM.render(<Button />,document.getElementById('app'));