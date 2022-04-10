package com.example.courseproject.model;

import javax.persistence.*;

@NamedNativeQuery(
        name = "resultQuery",
        query = """
        
                """,
        resultSetMapping = "resultList"
)
@SqlResultSetMapping(
        name = "resultList",
        classes = @ConstructorResult(
                targetClass = Result.class,
                columns = {
                        @ColumnResult(name = "id", type = Long.class),
                        @ColumnResult(name = "sum", type = Integer.class)
                }
        )
)
public class Result {
    private Long sensorId;
    private Long sensorSum;

    public Result() {
    }

    public Result(Long sensorId, Long sensorSum) {
        this.sensorId = sensorId;
        this.sensorSum = sensorSum;
    }

    public Long getSensorId() {
        return sensorId;
    }

    public void setSensorId(Long sensorId) {
        this.sensorId = sensorId;
    }

    public Long getSensorSum() {
        return sensorSum;
    }

    public void setSensorSum(Long sensorSum) {
        this.sensorSum = sensorSum;
    }
}
