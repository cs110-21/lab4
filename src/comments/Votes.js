import { useState } from "react";
//to install octicon npm install -g npm@8.9.0
import { ChevronUpIcon} from '@primer/octicons-react';
import {ChevronDownIcon} from '@primer/octicons-react'

const Votes = () => {
    const [currentVotes, newVoteCount] = useState(0);

    return (
        <div className="Vote">
            <button className="upVote" onClick={() => newVoteCount(currentVotes + 1)}>
            <ChevronUpIcon/>
            </button>
            <p className="displayVotes" > {currentVotes} </p>
            <br></br> <br></br>
            <button className="downVote" onClick={() => newVoteCount(currentVotes - 1)}>
            <ChevronDownIcon/>
            </button>
        </div>

 
    );
}

export default Votes;