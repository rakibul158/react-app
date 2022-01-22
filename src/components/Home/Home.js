import React, { Component } from 'react';
import Main from '../Main/Main';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state ={
            yes: '',
            no: ''
        }
        this.handleBtnYes = this.handleBtnYes.bind(this)
        this.handleBtnNo = this.handleBtnNo.bind(this)
    }

    handleBtnYes() {
        this.setState({
            yes: 'I Love Your Too!',
            no: ''
        });
        // console.log('Yes');
    }

    handleBtnNo() {
        this.setState({
            no: `I Don't Care!`,
            yes: ''
        });
    }

    render() {
        const { yes, no } = this.state;
        
        return (
            <div className='Home-Container'>
                <div className='Home-Wapper'>
                    <Main 
                        handleBtnYes={ this.handleBtnYes }
                        handleBtnNo = { this.handleBtnNo }
                        yes = { yes }
                        no = { no }
                    />
                </div>
            </div>
        );
    }
}

export default Home;