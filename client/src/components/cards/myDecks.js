import React from 'react';
import {Icon} from 'react-fa';
import {Card} from '../../container/Card/index';
import './style.css';
import '../../index.css';

const MyDecks =(props) => {
        return(
            <div className={props.contain}>
                <div id={props.id} className={props.cn} >
                    <div className={props.side1} clicked={this.flipCardHandler}>
                        <Icon name="fas fa-archive" size='5x' className="archive" />
                    </div>
                    <div className={props.scroll}>
                        <div className={props.side2}>
                            {props.contentBack}
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default MyDecks;