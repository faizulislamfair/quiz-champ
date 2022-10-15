import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData();
    const allTopics = topics.data;
    console.log(allTopics);

    return (
        <div>
            <h1>Home</h1>
            <div className='top-banner'>
                This is a website about Quiz! <br />
                Mainly 4 topics have been elaborated here!
            </div>

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

export default Home;