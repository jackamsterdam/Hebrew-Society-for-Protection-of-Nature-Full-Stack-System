-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2022 at 02:40 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spndb`
--
CREATE DATABASE IF NOT EXISTS `spndb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `spndb`;

-- --------------------------------------------------------

--
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `areaId` int(11) NOT NULL,
  `areaName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`areaId`, `areaName`) VALUES
(1, 'צפון'),
(2, 'דרום'),
(3, 'מרכז'),
(4, 'שפלה'),
(5, 'מישור החוף');

-- --------------------------------------------------------

--
-- Table structure for table `treks`
--

CREATE TABLE `treks` (
  `trekId` int(11) NOT NULL,
  `areaId` int(11) NOT NULL,
  `trekName` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `priceAdult` decimal(6,2) NOT NULL,
  `priceChild` decimal(6,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `treks`
--

INSERT INTO `treks` (`trekId`, `areaId`, `trekName`, `description`, `priceAdult`, `priceChild`) VALUES
(1, 1, 'נחל תנינים', 'נחל נפלא להליכה. כדאי לשחק במים. כדאי ללכת למסעדה הממוקמת שם', '0.00', '0.00'),
(2, 3, 'מערת הנטיפים', 'מערה חשוכה. כדאי לראות את העטלפים.', '30.22', '16.25'),
(3, 3, 'פלמחים', 'ממש כיף בפלמחים. ממש לחוות את הטבע. כדאי לעשות שם הליכה.', '45.22', '16.25'),
(4, 3, 'שפיים', 'הכי כיף להיות בשפיים. כדאי ללכת לפארק המים. כדאי לאכול שם במסעדות.', '0.00', '0.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`areaId`);

--
-- Indexes for table `treks`
--
ALTER TABLE `treks`
  ADD PRIMARY KEY (`trekId`),
  ADD KEY `areaId` (`areaId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `areaId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `treks`
--
ALTER TABLE `treks`
  MODIFY `trekId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `treks`
--
ALTER TABLE `treks`
  ADD CONSTRAINT `treks_ibfk_1` FOREIGN KEY (`areaId`) REFERENCES `areas` (`areaId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
