FROM openjdk:17
EXPOSE 9002
ADD target/customer-docker.jar customer-docker.jar
ENTRYPOINT ["java","-jar","customer-docker.jar"]