import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Humans.scss';
import Table from './Table';
import Filter from './Filter';
import AddFrom from './AddForm';
import HumanDatils from './HumanDetails';
import ToggleOpenForm from './ToggleOpenForm';
import TableHeader from './TableHeader';

function Humans() {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <TableHeader />
        </Col>
        <Col md={3.5}>
          <Filter />
        </Col>
        <Col md={2.5}>
          <ToggleOpenForm />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Table />
        </Col>
        <Col md={3.5}>
          <HumanDatils />
        </Col>
        <Col md={2.5}>
          <AddFrom />
        </Col>
      </Row>
    </Container>
  );
}

export default Humans;
