import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        const { handleBtnYes, handleBtnNo, yes, no } = this.props;
        // console.log(this.props);
        return (
            <div>
                <h1>Do You Love Me?</h1>
                <div className='Button-Section'>
                    <div className='Button-Yes'>
                        <button onClick={ handleBtnYes }>Yes</button>
                    </div>
                    <div className='Button-No'>
                        <button onClick={ handleBtnNo }>No</button>
                    </div>
                </div>
                <h2>{ yes }</h2>
                <h2> { no }</h2>
            </div>
        );
    }
}

export default Main;