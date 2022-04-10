package com.example.courseproject.service;

import com.example.courseproject.model.Result;
import com.example.courseproject.repository.SolarPanelSensorRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SensorService {
    private final SolarPanelSensorRepository sensorRepository;

    public SensorService(SolarPanelSensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    public List<Result> getSensorsResult(Date start, Date end){
        Long sum = sensorRepository.findProducedEnergySum(start, end);
        List<Result> sensors = new ArrayList<>();
        sensors.add(new Result(0L, sum));
        sensors.addAll(sensorRepository.getResultList(start, end));
        return sensors;
    }
}
