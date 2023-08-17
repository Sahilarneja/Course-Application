package com.boot.web.services;

import java.util.List;

import com.boot.web.entities.Course;

public interface CourseService {
	
	public List<Course> getCourses();
	
	public Course getCourse(long id);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(long CourseId);
}
