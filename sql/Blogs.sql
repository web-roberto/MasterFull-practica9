-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Blogs
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Blogs
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blogs` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `Blogs` ;

-- -----------------------------------------------------
-- Table `Blogs`.`Autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs`.`Autores` (
  `autor_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `autor_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`autor_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `Blogs`.`Blogs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blogs`.`Blogs` (
  `blog_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `blog_titulo` VARCHAR(45) NOT NULL,
  `blog_descripcion` TEXT(100) NOT NULL,
  `blog_categoria` VARCHAR(45) NULL,
  `blog_fecha_creacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `blog_autor_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`blog_id`),
  INDEX `fk_Blogs_Autores_idx` (`blog_autor_id` ASC),
  CONSTRAINT `fk_Blogs_Autores`
    FOREIGN KEY (`blog_autor_id`)
    REFERENCES `Blogs`.`Autores` (`autor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
