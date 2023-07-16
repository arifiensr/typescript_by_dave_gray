"use strict";
// * Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// * Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade = 88 // wont work
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// * Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: 'B',
    Kelly: 'U',
};
