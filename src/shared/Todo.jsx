import React, { Component } from 'react';
import { Card, Button } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span>
                            Item 1
                        </span>
                        <Button type="danger">X</Button>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span>
                            Item  dadajshdkljsdgfkvhsjlasjkflda
                        </span>
                        <Button type="danger">X</Button>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                        <span>
                            Item 1 hjldksdalk
                        </span>
                        <Button type="danger">X</Button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;