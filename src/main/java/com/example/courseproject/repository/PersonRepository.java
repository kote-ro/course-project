package com.example.courseproject.repository;

import com.example.courseproject.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    // отчёт про добытую энергию за период
    // findProducedEnergyBetweenDates(Date start, Date end)
    // total produced energy (по будинку, по сенсору)
    // rollup sql

}
