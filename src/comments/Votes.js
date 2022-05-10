import { useState } from "react";
import { ChevronUpIcon } from '@primer/octicons-react';
import { ChevronDownIcon } from '@primer/octicons-react'
import { Button, Col, Container, Stack } from "react-bootstrap";

const Votes = () => {
    const [currentVotes, newVoteCount] = useState(0);

    return <Stack className="displayVotes">
        <Col className="ms-auto"><Button variant="link" onClick={() => newVoteCount(currentVotes + 1)}><ChevronUpIcon /></Button></Col>
        <div className="ms-auto voteNumber">{currentVotes}</div>
        <Col className="ms-auto"><Button variant="link" onClick={() => newVoteCount(currentVotes - 1)}><ChevronDownIcon /></Button></Col>
    </Stack>
}

export default Votes;