import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    const allTopics = topics.data;
    console.log(allTopics);

    return (
        <div>
            <h1>Topics</h1>

            <div className="container">
                <div className='cards'>
                    {
                        allTopics.map(topic => <Topic
                            key={topic.id}
                            topic={topic}
                        ></Topic>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Topics;