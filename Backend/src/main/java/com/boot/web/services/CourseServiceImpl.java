package com.boot.web.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.web.Dao.CourseDao;
import com.boot.web.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
    private final CourseDao courseDao;

    @Autowired
    public CourseServiceImpl(CourseDao courseDao) {
        this.courseDao = courseDao;
    }

    @Override
    public List<Course> getCourses() {
        return courseDao.findAll();
    }

    @Override
    public Course getCourse(long courseId) {
        Optional<Course> optionalCourse = courseDao.findById(courseId);
        return optionalCourse.orElse(null);
    }

    @Override
    public Course addCourse(Course course) {
        return courseDao.save(course);
    }

    @Override
    public Course updateCourse(Course course) {
        // Check if the course with the given ID exists before saving the changes
        if (courseDao.existsById(course.getId())) {
            return courseDao.save(course);
        } else {
            // Handle the case when the course does not exist.
            // You may throw an exception or return null based on your application's logic.
            return null;
        }
    }

    @Override
    public void deleteCourse(long courseId) {
        Optional<Course> optionalCourse = courseDao.findById(courseId);
        optionalCourse.ifPresent(course -> courseDao.delete(course));
        // If the course does not exist, the delete operation will be skipped.
    }
}
