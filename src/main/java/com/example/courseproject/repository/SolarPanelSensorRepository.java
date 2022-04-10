package com.example.courseproject.repository;

import com.example.courseproject.model.Result;
import com.example.courseproject.model.SolarPanelSensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SolarPanelSensorRepository extends JpaRepository<SolarPanelSensor, Long> {
    @Query(value = """
        SELECT 
            sum(sps.energyProduced)
        FROM
            SolarPanelSensor sps
        WHERE 
            sps.id IN 
            (
            SELECT
                sps.id
            FROM
                SolarPanelSensor sps
            WHERE
                sps.date BETWEEN :start AND :end
            )
    """)
    Long findProducedEnergySum(@Param("start") Date start, @Param("end") Date end);

    @Query(value = """
        SELECT
            new com.example.courseproject.model.Result(sps.id, sps.energyProduced)
        FROM
            SolarPanelSensor sps
        WHERE
            sps.date BETWEEN :start AND :end
    """)
    List<Result> getResultList(@Param("start") Date start, @Param("end") Date end);
}