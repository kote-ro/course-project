package com.example.courseproject.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "solar_panel")
public class SolarPanel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String number;

    private String diagonal;

    @ManyToMany
    private Set<SolarPanelSensor> solarPanelSensors;
}
