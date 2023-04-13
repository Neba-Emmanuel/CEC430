const Student = require('./student');
const Mark = require('./marks');

const studentNames = ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10'];
const studentMarks = [1,2,3.4,5,6,7,8,9,10];

const students = new Student(studentNames);
const marks = new Mark(studentMarks);