import React from 'react';
import './Topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    return (
        // <div>
        //     <h4>Name: {name}</h4>
        //     <h4>ID : {id}</h4>
        //     <img src={logo} className='img-fluid' alt="" />
        //     <h5>Total Questions: {total}</h5>
        // </div>

        <div className='topic'>
            <img src={logo} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <Link to={`/topic/${id}`}><button className='btn btn-primary'>Start Practice</button></Link>
            </div>
            <div>
                <h3>Total Questions: {total}</h3>
            </div>
        </div>
        //     </div>
        // </div>

    );
};

export default Topic;