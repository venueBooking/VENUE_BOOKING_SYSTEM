FROM openjdk:17
EXPOSE 9003
ADD target/venue-docker.jar venue-docker.jar
ENTRYPOINT ["java","-jar","venue-docker.jar"]