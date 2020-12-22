import './App.css';
import React, {Component} from 'react';
import 'mini.css';
import {nanoid} from 'nanoid';
import PostAddForm from "./components/PostAddForm/PostAddForm";
import PostList from "./components/PostList/PostList";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    date: '20.07.2019',
                    distance: 5.7,
                    id: nanoid()
                },
                {
                    date: '19.07.2019',
                    distance: 14.2,
                    id: nanoid()
                }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem (body) {
        const {data} = this.state;
        const similarItem = data.find(item => item.date === body.date);

        if(similarItem) {
           similarItem.distance += body.distance;
            this.setState(({data})=> ({data}))


        } else {
            const newItem = {
                date: body.date,
                distance: body.distance,
                id: nanoid()
            }

            this.setState(({data})=> {
                const newArr = [...data, newItem];
                return {
                    data: newArr
                }
            })
        }




    }

    deleteItem (id) {
        this.setState(({data}) => {

            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    render () {
        const {data} = this.state;
        return (
            <div className="App">
                <PostAddForm onAdd={this.addItem}/>
                <PostList posts={data.sort((a, b) => a.date > b.date ? -1 : 1)} onDelete={this.deleteItem}/>
            </div>
        )
    }

}

