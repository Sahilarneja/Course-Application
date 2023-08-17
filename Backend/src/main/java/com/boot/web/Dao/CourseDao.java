package com.boot.web.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.web.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>{

}
