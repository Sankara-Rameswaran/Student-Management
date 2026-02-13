package com.sankar.studentManagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity
@Component
@Scope("prototype")
public class Student {

    @Id
    private int roll_no;
    private String name;
    private int age;
    private int mark ;
    private String dept;
    private boolean isPlaced;

    public int getRoll_no() {
        return roll_no;
    }

    public void setRoll_no(int roll_no) {
        this.roll_no = roll_no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public boolean isPlaced() {
        return isPlaced;
    }

    public void setPlaced(boolean placed) {
        isPlaced = placed;
    }

    @Override
    public String toString() {
        return "Student{" +
                "roll_no=" + roll_no +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", mark=" + mark +
                ", dept='" + dept + '\'' +
                ", isPlaced=" + isPlaced +
                '}';
    }

    public Student(){}

    public Student(int roll_no, String name, int age, int mark, String dept, boolean isPlaced) {
        this.roll_no = roll_no;
        this.name = name;
        this.age = age;
        this.mark = mark;
        this.dept = dept;
        this.isPlaced = isPlaced;
    }
}
