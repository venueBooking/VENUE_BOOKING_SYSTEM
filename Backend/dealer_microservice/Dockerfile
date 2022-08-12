FROM openjdk:17
EXPOSE 9001
ADD target/dealer-docker.jar dealer-docker.jar
ENTRYPOINT ["java","-jar","dealer-docker.jar"]