FROM maven:3.8.3-openjdk-17 AS builder

WORKDIR /

COPY pom.xml .

RUN mvn dependency:go-offline -B

COPY src ./src

RUN mvn clean package

FROM maven:3.8.3-openjdk-17

WORKDIR /

COPY --from=builder /target/api-0.0.1-SNAPSHOT.jar .

CMD ["java", "-jar", "api-0.0.1-SNAPSHOT.jar"]
