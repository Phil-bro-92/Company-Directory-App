-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6333
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table companydirectory.department
CREATE TABLE IF NOT EXISTS `department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `locationID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.department: ~12 rows (approximately)
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`id`, `name`, `locationID`) VALUES
	(1, 'Human Resources', 1),
	(2, 'Sales', 2),
	(3, 'Marketing', 2),
	(4, 'Legal', 1),
	(5, 'Services', 1),
	(6, 'Research and Development', 3),
	(7, 'Product Management', 3),
	(8, 'Training', 4),
	(9, 'Support', 4),
	(10, 'Engineering', 5),
	(11, 'Accounting', 5),
	(12, 'Business Development', 3);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping structure for table companydirectory.location
CREATE TABLE IF NOT EXISTS `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.location: ~4 rows (approximately)
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` (`id`, `name`) VALUES
	(1, 'London'),
	(2, 'New York'),
	(3, 'Paris'),
	(4, 'Munich'),
	(5, 'Rome');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;

-- Dumping structure for table companydirectory.personnel
CREATE TABLE IF NOT EXISTS `personnel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `jobTitle` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `departmentID` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- Dumping data for table companydirectory.personnel: ~100 rows (approximately)
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` (`id`, `firstName`, `lastName`, `jobTitle`, `email`, `departmentID`) VALUES
	(1, 'Robert', 'Heffron', 'Admin', 'rheffron0@ibm.com', 1),
	(2, 'Kris', 'Kovnot', 'Admin', 'kkovnot1@google.nl', 2),
	(3, 'Vera', 'Kisbee', 'Admin', 'vkisbee2@nih.gov', 2),
	(4, 'Aveline', 'Edgson', 'Admin', 'aedgson3@wikispaces.com', 3),
	(5, 'Bertie', 'Wittke', 'Admin', 'bwittke4@yahoo.com', 4),
	(6, 'Demetre', 'Cossam', 'Admin', 'dcossam5@washington.edu', 5),
	(7, 'Annabela', 'McGavigan', 'Admin', 'amcgavigan6@wp.com', 4),
	(8, 'Crichton', 'McAndrew', 'Admin', 'cmcandrew7@zdnet.com', 1),
	(9, 'Cordula', 'Plain', 'Admin', 'cplain8@google.ca', 5),
	(10, 'Glen', 'McDougle', 'Admin', 'gmcdougle9@meetup.com', 6),
	(11, 'Theo', 'Audas', 'Admin', 'taudasa@newsvine.com', 7),
	(12, 'Spense', 'Jolliss', 'Admin', 'sjollissb@wufoo.com', 8),
	(13, 'Leopold', 'Carl', 'Admin', 'lcarlc@paginegialle.it', 9),
	(14, 'Barr', 'MacAllan', 'Admin', 'bmacalland@github.com', 5),
	(15, 'Suzie', 'Cromer', 'Admin', 'scromere@imageshack.us', 1),
	(16, 'Tracee', 'Gisbourn', 'Admin', 'tgisbournf@bloglines.com', 10),
	(17, 'Taylor', 'St. Quintin', 'Admin', 'tstquinting@chronoengine.com', 10),
	(18, 'Lin', 'Klassmann', 'Admin', 'lklassmannh@indiatimes.com', 10),
	(19, 'Lay', 'Fintoph', 'Admin', 'lfintophi@goo.gl', 11),
	(20, 'Moishe', 'Flinn', 'Admin', 'mflinnj@list-manage.com', 12),
	(21, 'Gay', 'Bickford', 'Admin', 'gbickfordk@scientificamerican.com', 6),
	(22, 'Erik', 'Lindback', 'Admin', 'elindbackl@virginia.edu', 8),
	(23, 'Tamarra', 'Ace', 'Admin', 'tacem@vinaora.com', 9),
	(24, 'Barbara-anne', 'Rooksby', 'Admin', 'brooksbyn@issuu.com', 12),
	(25, 'Lucien', 'Allsup', 'Admin', 'lallsupo@goo.ne.jp', 9),
	(26, 'Jackelyn', 'Imlach', 'Assistant', 'jimlachp@google.it', 11),
	(27, 'Virge', 'Bootes', 'Assistant', 'vbootesq@oracle.com', 2),
	(28, 'Rafferty', 'Matasov', 'Assistant', 'rmatasovr@4shared.com', 4),
	(29, 'Vanya', 'Goulder', 'Assistant', 'vgoulders@phoca.cz', 9),
	(30, 'Bonita', 'McGonagle', 'Assistant', 'bmcgonaglet@microsoft.com', 1),
	(31, 'Allx', 'Whaley', 'Assistant', 'awhaleyu@bbb.org', 1),
	(32, 'Mavis', 'Lernihan', 'Assistant', 'mlernihanv@netscape.com', 5),
	(33, 'Vern', 'Durling', 'Assistant', 'vdurlingw@goo.gl', 1),
	(34, 'Myles', 'Minchi', 'Assistant', 'mminchix@smugmug.com', 7),
	(35, 'Anitra', 'Coleridge', 'Assistant', 'acoleridgey@nbcnews.com', 6),
	(36, 'Ailis', 'Brewster', 'Assistant', 'abrewsterz@businesswire.com', 7),
	(37, 'Rahal', 'Tute', 'Assistant', 'rtute10@pinterest.com', 6),
	(38, 'Warner', 'Blonden', 'Assistant', 'wblonden11@spiegel.de', 12),
	(39, 'Melvyn', 'Canner', 'Assistant', 'mcanner12@eepurl.com', 4),
	(40, 'Ryann', 'Giampietro', 'Assistant', 'rgiampietro13@theguardian.com', 4),
	(41, 'Harwell', 'Jefferys', 'Assistant', 'hjefferys14@jimdo.com', 10),
	(42, 'Lanette', 'Buss', 'Assistant', 'lbuss15@51.la', 4),
	(43, 'Lissie', 'Reddington', 'Assistant', 'lreddington16@w3.org', 9),
	(44, 'Dore', 'Braidford', 'Assistant', 'dbraidford17@google.com.br', 11),
	(45, 'Lizabeth', 'Di Franceshci', 'Assistant', 'ldifranceshci18@mediafire.com', 8),
	(46, 'Felic', 'Sharland', 'Assistant', 'fsharland19@myspace.com', 12),
	(47, 'Duff', 'Quail', 'Assistant', 'dquail1a@vimeo.com', 9),
	(48, 'Brendis', 'Shivell', 'Assistant', 'bshivell1b@un.org', 1),
	(49, 'Nevile', 'Schimaschke', 'Assistant', 'nschimaschke1c@hexun.com', 10),
	(50, 'Jon', 'Calbaithe', 'Assistant', 'jcalbaithe1d@netvibes.com', 4),
	(51, 'Emmery', 'Darben', 'Senior', 'edarben1e@mapquest.com', 10),
	(52, 'Staford', 'Whitesel', 'Senior', 'swhitesel1f@nasa.gov', 6),
	(53, 'Benjamin', 'Hawkslee', 'Senior', 'bhawkslee1g@hubpages.com', 7),
	(54, 'Myrle', 'Speer', 'Senior', 'mspeer1h@tripod.com', 3),
	(55, 'Matthus', 'Banfield', 'Senior', 'mbanfield1i@angelfire.com', 3),
	(56, 'Annadiana', 'Drance', 'Senior', 'adrance1j@omniture.com', 3),
	(57, 'Rinaldo', 'Fandrey', 'Senior', 'rfandrey1k@bbc.co.uk', 2),
	(58, 'Roanna', 'Standering', 'Senior', 'rstandering1l@cocolog-nifty.com', 3),
	(59, 'Lorrie', 'Fattorini', 'Senior', 'lfattorini1m@geocities.jp', 9),
	(60, 'Talbot', 'Andrassy', 'Senior', 'tandrassy1n@bigcartel.com', 4),
	(61, 'Cindi', 'O\'Mannion', 'Senior', 'comannion1o@ameblo.jp', 11),
	(62, 'Pancho', 'Mullineux', 'Senior', 'pmullineux1p@webmd.com', 1),
	(63, 'Cynthy', 'Peyntue', 'Senior', 'cpeyntue1q@amazon.co.jp', 6),
	(64, 'Kristine', 'Christal', 'Senior', 'kchristal1r@behance.net', 8),
	(65, 'Dniren', 'Reboulet', 'Senior', 'dreboulet1s@360.cn', 7),
	(66, 'Aggy', 'Napier', 'Senior', 'anapier1t@sciencedirect.com', 3),
	(67, 'Gayleen', 'Hessay', 'Senior', 'ghessay1u@exblog.jp', 4),
	(68, 'Cull', 'Snoden', 'Senior', 'csnoden1v@so-net.ne.jp', 1),
	(69, 'Vlad', 'Crocombe', 'Senior', 'vcrocombe1w@mtv.com', 7),
	(70, 'Georgeanna', 'Joisce', 'Senior', 'gjoisce1x@google.com.au', 6),
	(71, 'Ursola', 'Berthomieu', 'Senior', 'uberthomieu1y@un.org', 4),
	(72, 'Mair', 'McKirdy', 'Senior', 'mmckirdy1z@ovh.net', 1),
	(73, 'Erma', 'Runnalls', 'Senior', 'erunnalls20@spiegel.de', 8),
	(74, 'Heida', 'Gallone', 'Senior', 'hgallone21@hostgator.com', 10),
	(75, 'Christina', 'Denge', 'Senior', 'cdenge22@canalblog.com', 12),
	(76, 'Wilone', 'Fredi', 'Executive', 'wfredi23@gizmodo.com', 7),
	(77, 'Stormie', 'Bolderstone', 'Executive', 'sbolderstone24@globo.com', 11),
	(78, 'Darryl', 'Pool', 'Executive', 'dpool25@vistaprint.com', 11),
	(79, 'Nikolas', 'Mager', 'Executive', 'nmager26@nifty.com', 5),
	(80, 'Brittney', 'Gaskal', 'Executive', 'bgaskal27@weather.com', 10),
	(81, 'Field', 'Gresty', 'Executive', 'fgresty28@networkadvertising.org', 4),
	(82, 'Martina', 'Tremoulet', 'Executive', 'mtremoulet29@sciencedaily.com', 3),
	(83, 'Robena', 'Ivanyutin', 'Executive', 'rivanyutin2a@mozilla.org', 2),
	(84, 'Reagen', 'Corner', 'Executive', 'rcorner2b@qq.com', 11),
	(85, 'Eveleen', 'Sulter', 'Executive', 'esulter2c@nature.com', 6),
	(86, 'Christy', 'Dunbobbin', 'Executive', 'cdunbobbin2d@feedburner.com', 8),
	(87, 'Winthrop', 'Lansley', 'Executive', 'wlansley2e@alibaba.com', 8),
	(88, 'Lissa', 'Insley', 'Executive', 'linsley2f@friendfeed.com', 3),
	(89, 'Shell', 'Risebarer', 'Executive', 'srisebarer2g@patch.com', 10),
	(90, 'Cherianne', 'Liddyard', 'Executive', 'cliddyard2h@com.com', 2),
	(91, 'Brendan', 'Fooks', 'Executive', 'bfooks2i@utexas.edu', 2),
	(92, 'Edmund', 'Tace', 'Executive', 'etace2j@hatena.ne.jp', 9),
	(93, 'Ki', 'Tomasini', 'Executive', 'ktomasini2k@cnbc.com', 10),
	(94, 'Chadd', 'McGettrick', 'Executive', 'cmcgettrick2l@simplemachines.org', 10),
	(95, 'Dulcie', 'Baudi', 'Executive', 'dbaudi2m@last.fm', 3),
	(96, 'Barnebas', 'Mowbray', 'Executive', 'bmowbray2n@cbslocal.com', 1),
	(97, 'Stefanie', 'Anker', 'Executive', 'sanker2o@hud.gov', 5),
	(98, 'Cherye', 'de Cullip', 'Executive', 'cdecullip2p@loc.gov', 10),
	(99, 'Sinclare', 'Deverall', 'Executive', 'sdeverall2q@ow.ly', 6),
	(100, 'Shae', 'Johncey', 'Executive', 'sjohncey2r@bluehost.com', 10);
/*!40000 ALTER TABLE `personnel` ENABLE KEYS */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
