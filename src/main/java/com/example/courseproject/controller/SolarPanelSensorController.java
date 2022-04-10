package com.example.courseproject.controller;

import com.example.courseproject.model.Result;
import com.example.courseproject.service.SensorService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class SolarPanelSensorController {
    private static final Logger LOGGER = Logger.getLogger(SolarPanelSensorController.class.getName());

    private final SensorService sensorService;

    public SolarPanelSensorController(SensorService sensorService) {
        this.sensorService = sensorService;
    }

    @GetMapping("/sensors/{start}/{end}")
    public ResponseEntity<List<Result>> getSensors(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date start,
                                                   @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date end){
        return ResponseEntity.ok(sensorService.getSensorsResult(start, end));
    }
}
