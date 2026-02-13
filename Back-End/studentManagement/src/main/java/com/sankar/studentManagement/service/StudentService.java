package com.sankar.studentManagement.service;


import com.sankar.studentManagement.model.Student;
import com.sankar.studentManagement.repo.StudentRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    StudentRepo repo ;

    public StudentService(StudentRepo repo) {
        this.repo = repo;
    }

    public List<Student> display(){
        return repo.findAll();
    }
    public void insert(Student s)
    {
        repo.save(s);
    }
    public void deleteStudent(int id)
    {
       repo.deleteById(id);
    }
    public Student getStudentById(int id) {
        return repo.findById(id).orElse(null);
    }

}
