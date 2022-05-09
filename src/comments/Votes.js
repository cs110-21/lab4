import { useState } from "react";
import { ChevronUpIcon } from '@primer/octicons-react';
import { ChevronDownIcon } from '@primer/octicons-react'
import { Button, Col, Stack } from "react-bootstrap";

const Votes = () => {
    const [currentVotes, newVoteCount] = useState(0);

    return <Stack>
        <Col><Button onClick={() => newVoteCount(currentVotes + 1)}><ChevronUpIcon /></Button></Col>
        {currentVotes}
        <Col><Button onClick={() => newVoteCount(currentVotes - 1)}><ChevronDownIcon /></Button></Col>
    </Stack>
}

export default Votes;