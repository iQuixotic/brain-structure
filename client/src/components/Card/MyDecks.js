import React from 'react';
import {Icon} from 'react-fa';
import {Card} from '../../container/Card/index';
import './style.css';
import '../../index.css';

const MyDecks =(props) => {
        return(
        <div id={props.id} className={props.cn}>
            <Card id={props.crdId}>
                <Icon name="fas fa-archive" size='5x' className="archive" />
            </Card>
        </div>
        );
}

export default MyDecks;