import { useState } from "react";
import { ChevronUpIcon } from '@primer/octicons-react';
import { ChevronDownIcon } from '@primer/octicons-react'
import { Button, Col, Row } from "react-bootstrap";

const Votes = () => {
    const [currentVotes, newVoteCount] = useState(0);

    return <Row xs="auto">
        <Col><Button onClick={() => newVoteCount(currentVotes + 1)}><ChevronUpIcon /></Button></Col>
        <Col>{currentVotes}</Col>
        <Col><Button onClick={() => newVoteCount(currentVotes - 1)}><ChevronDownIcon /></Button></Col>
    </Row>
}

export default Votes;