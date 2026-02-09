package com.insureai.repository;

import com.insureai.entity.Appointment;
import com.insureai.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    List<Appointment> findByCustomer(User customer);
    List<Appointment> findByAgent(User agent);
    List<Appointment> findByAppointmentDateBetween(LocalDateTime start, LocalDateTime end);
}
