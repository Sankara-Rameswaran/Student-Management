package com.sankar.studentManagement.controller;

import com.sankar.studentManagement.model.Student;
import com.sankar.studentManagement.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/students")
@CrossOrigin("http://localhost:5173")
public class StudentController {

    StudentService service ;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @GetMapping
    public List<Student> getStudents(){
        return service.display();
    }


    @PostMapping
    public void addStudent(@RequestBody Student s){
        service.insert(s);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id)
    {
        service.deleteStudent(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {

        Student student = service.getStudentById(id);

        if (student == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(student);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@PathVariable int id,@RequestBody Student s)
    {
        Student existing = service.getStudentById(id);
        if(existing==null)
            return ResponseEntity.notFound().build();
        s.setRoll_no(id);
        service.insert(s);

        return ResponseEntity.ok(s);
    }

}
