import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button, Form, Modal } from 'react-bootstrap';
import './AdminPanel.css';

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentClient, setCurrentClient] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    date: '',
    schedule: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('There was an error fetching the data!', error));
  }, []);

  const handleEdit = (client) => {
    setCurrentClient(client);
    setShowModal(true);
  };

  const handleSave = () => {
    axios.put(`http://localhost:5000/clients/${currentClient.id}`, currentClient)
      .then(response => {
        setClients(clients.map(client => client.id === currentClient.id ? response.data : client));
        setShowModal(false);
      })
      .catch(error => console.error('There was an error updating the client!', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/clients/${id}`)
      .then(() => setClients(clients.filter(client => client.id !== id)))
      .catch(error => console.error('There was an error deleting the client!', error));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log('Adding new client:', newClient); // Debugging log
    axios.post('http://localhost:5000/clients', newClient)
      .then(response => {
        setClients([...clients, response.data]);
        setNewClient({ name: '', email: '', date: '', schedule: '' });
        setShowAddModal(false);
      })
      .catch(error => console.error('There was an error adding the client!', error));
  };

  return (
    <Container className="admin-panel">
      <h2 className="mt-4">Admin Panel</h2>
      <Button variant="primary" className="mb-3" onClick={() => setShowAddModal(true)}>Add New Schedule</Button>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Schedule</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td data-label="Name">{client.name}</td>
              <td data-label="Email">{client.email}</td>
              <td data-label="Date">{client.date}</td>
              <td data-label="Schedule">{client.schedule}</td>
              <td data-label="Actions">
                <Button variant="warning" size="sm" onClick={() => handleEdit(client)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(client.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentClient.name || ''}
                onChange={(e) => setCurrentClient({ ...currentClient, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={currentClient.email || ''}
                onChange={(e) => setCurrentClient({ ...currentClient, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={currentClient.date || ''}
                onChange={(e) => setCurrentClient({ ...currentClient, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formSchedule">
              <Form.Label>Schedule</Form.Label>
              <Form.Control
                type="text"
                value={currentClient.schedule || ''}
                onChange={(e) => setCurrentClient({ ...currentClient, schedule: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAdd}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newClient.date}
                onChange={(e) => setNewClient({ ...newClient, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formSchedule">
              <Form.Label>Schedule</Form.Label>
              <Form.Control
                type="text"
                value={newClient.schedule}
                onChange={(e) => setNewClient({ ...newClient, schedule: e.target.value })}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
              <Button variant="primary" type="submit">Add Schedule</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminPanel;
