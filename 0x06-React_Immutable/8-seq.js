import { Seq } from 'immutable';

const printBestStudents = (students) => {
  const best = Seq(students)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName:
        student.firstName[0].toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName[0].toUpperCase() + student.lastName.slice(1),
    }));

  console.log(best.toObject());
};

export default printBestStudents;
