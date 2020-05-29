package com.ibm.springboot.EvaluationProjectSpring;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

  private static List<Course> courses = new ArrayList<>();
  private static long idCounter = 0;

	
	/*
	 * static { courses.add(new Course(++idCounter, "Spring", "Learn Spring boot"));
	 * courses.add(new Course(++idCounter, "Groovy", "Learn groovy"));
	 * courses.add(new Course(++idCounter, "Python", "Learn python"));
	 * courses.add(new Course(++idCounter, "Swagger", "Learn Swagger"));
	 * courses.add(new Course(++idCounter, "C++", "Learn C++")); courses.add(new
	 * Course(++idCounter, "Ruby", "Learn Ruby")); courses.add(new
	 * Course(++idCounter, "Javascript", "Learn javascript")); courses.add(new
	 * Course(++idCounter, "React", "Learn React")); }
	 */
	 
  
	/*
	 * public Course add(Course course) {
	 * 
	 * return courses; }
	 */ 
  
  public List<Course> findAll() {
    return courses;
  }
  
  public Course save(Course course) {
	    if (course.getId() == -1 || course.getId() == 0) {
	      course.setId(++idCounter);
	      courses.add(course);
	    } else {
	      deleteById(course.getId());
	      courses.add(course);
	    }
	    return course;
	  }
  
  public Course deleteById(long id) {
	    Course course = findById(id);

	    if (course == null)
	      return null;

	    if (courses.remove(course)) {
	      return course;
	    }

	    return null;
	  }
  
  public Course findById(long id) {
	    for (Course course : courses) {
	      if (course.getId() == id) {
	        return course;
	      }
	    }

	    return null;
	  }
    
}