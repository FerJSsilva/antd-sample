import React, { Component } from 'react';
import { Button, Input } from 'antd';
import List from './TodoItems';

class Home extends Component {
    state = {
        item: "",
        itemList: [],
    }

    onChange = (event) => {
        this.setState({ item: event.target.value });
    }

    onSubmit = () => {
        this.setState({
            item: '',
            itemList: [...this.state.itemList, this.state.item]
        });
    }

    remove = (ItemName) => {
        const newList = this.state.itemList.filter((item) => { return item !==  ItemName })
        console.log(ItemName, newList);
        this.setState({
            itemList: newList,
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Input
                    style={{ maxWidth: "300px" }}
                    placeholder="Write an item"
                    value={this.state.item}
                    onChange={this.onChange}
                />
                <Button onClick={() => { this.onSubmit() }}>Submit</Button>
                <List items={this.state.itemList} removeItem={this.remove} />
            </div>
        );
    }
}

export default Home;