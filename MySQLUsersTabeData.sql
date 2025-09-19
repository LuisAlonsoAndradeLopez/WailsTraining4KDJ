-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: mini_sistema_prueba_de_tecnologias
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `surnames` varchar(30) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Michaeltttt','Jackson','1990-05-12','+15551234567','michael.johnson@example.com'),(2,'Emily','Smith','1995-09-23','+15552345678','emily.smith@example.com'),(3,'Daniel','Brown','1988-02-10','+15553456789','daniel.brown@example.com'),(4,'Sophia','Martinez','1992-07-04','+15554567890','sophia.martinez@example.com'),(5,'David','Wilson','1985-11-15','+15555678901','david.wilson@example.com'),(6,'Olivia','Taylor','1998-03-29','+15556789012','olivia.taylor@example.com'),(7,'James','Anderson','1991-06-18','+15557890123','james.anderson@example.com'),(8,'Isabella','Thomas','1989-08-25','+15558901234','isabella.thomas@example.com'),(9,'William','Moore','1993-12-01','+15559012345','william.moore@example.com'),(10,'Ava','Jackson','1997-04-14','+15550123456','ava.jackson@example.com'),(11,'Jesús Rogelio','Méndez Cabrera','2025-09-19','1234567890','jeromeca@gmail.com'),(12,'Royer','Dunkan Fox','2025-09-18','1234567890','royerdunkansex@gmail.com'),(13,'Luis Roberto','Justo Moreno','2002-04-19','12345678904','lurojumo19042002@gmail.com'),(14,'Miguel Gilberto','Chávez González','2025-09-05','1234567890','elopak02082002@gmail.com'),(15,'Xavier Arián','Olivares Sánchez','2025-09-12','111111111111111','luigi1234@gmail.com'),(16,'Jorge Alberto','Guevara Cerdán','2025-08-31','1234567890','guevara@gmail.com'),(17,'Diego Arián','Cardone Zapata','2001-02-01','1234567890','elcardoneeeeeeee@gmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-10 16:01:15
