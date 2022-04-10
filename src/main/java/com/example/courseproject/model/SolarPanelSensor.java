package com.example.courseproject.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "solar_panel_sensor")
public class SolarPanelSensor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer panelTemperature;

    private Long energyProduced;

    private String data;

    private Date date;
}
