import React, {Component} from 'react';
import './PostAddForm.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            distance: ''
        }
    }

    onDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    onDistanceChange = (e) => {
        this.setState({
            distance: Number(e.target.value)
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            date: '',
            distance: ''
        })
    }

    render() {
        return (
            <form className='postAddForm' onSubmit={this.onSubmitForm}>
                <section className='postAddForm-section'>
                    <label htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
                    <input id='date'
                           name='date'
                           type='text'
                           className='postAddForm-input-date'
                           placeholder='Введите дату'
                           onChange={this.onDateChange}
                           value={this.state.date}
                    />
                </section>
                <section className='postAddForm-section'>
                    <label htmlFor='distance'>Пройдено км</label>
                    <input id='distance'
                           name='distance'
                           type='text'
                           className='postAddForm-input-distance'
                           placeholder='Введите км'
                           onChange={this.onDistanceChange}
                           value={this.state.distance}
                    />
                </section>
                <button type='submit' className='postAddForm-btn'>Ok</button>
            </form>
        )
    }

}