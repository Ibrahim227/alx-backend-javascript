interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key : string] : any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

const printTeacher: PrintTeacherFunction = (firstName:string, lastName:string)	=> {
  return `${firstName.charAt(0)}.{lastName}`;
}

interface classInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements classInterface {
  firstName:string
  lastName:string
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string {
    return 'Currently working';
  }

  displayName():string {
    return this.firstName;
  }
}

const student = new StudentClass("Admiral", "Melan");
console.log(student.displayName())
console.log(student.workOnHomework())
