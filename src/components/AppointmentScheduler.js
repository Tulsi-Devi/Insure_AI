import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentScheduler = () => {
  const [appointments, setAppointments] = useState([]);
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAppointments();
    fetchAgents();
  }, []);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8080/appointments', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppointments(res.data);
    } catch (err) {
      setError('Failed to fetch appointments');
    }
  };

  const fetchAgents = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:8080/users/agents', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAgents(res.data);
    } catch (err) {
      setError('Failed to fetch agents');
    }
  };

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8080/appointments', {
        agentId: selectedAgent,
        appointmentDate: date,
        notes
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchAppointments();
      setSelectedAgent('');
      setDate('');
      setNotes('');
    } catch (err) {
      setError('Failed to book appointment');
    }
  };

  return (
    <div>
      <h2>Appointment Scheduler</h2>
      <form onSubmit={handleBook}>
        <select value={selectedAgent} onChange={(e) => setSelectedAgent(e.target.value)} required>
          <option value="">Select Agent</option>
          {agents.map(agent => (
            <option key={agent.id} value={agent.id}>{agent.username}</option>
          ))}
        </select>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
        <textarea placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button type="submit">Book Appointment</button>
      </form>
      <h3>Your Appointments</h3>
      <ul>
        {appointments.map(app => (
          <li key={app.id}>
            {app.appointmentDate} with {app.agent.username} - {app.status}
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AppointmentScheduler;
