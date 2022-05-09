import { useState } from "react";
//to install octicon npm install -g npm@8.9.0
//import { chevron-up } from '@primer/octicons-react';
//import {chevron-down} from '@primer/octicons-react'

const Votes = () => {
    const [currentVotes, newVoteCount] = useState(0);

    return (
        <div className="Vote">
            <button className="upVote" onClick={() => newVoteCount(currentVotes + 1)}>
            ^
            </button>
            <p className="displayVotes" > {currentVotes} </p>
            <br></br> <br></br>
            <button className="downVote" onClick={() => newVoteCount(currentVotes - 1)}>
            -
            </button>
        </div>

 
    );
}

export default Votes;