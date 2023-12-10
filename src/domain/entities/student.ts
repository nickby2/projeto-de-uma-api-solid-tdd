import { Entity } from "../../core/entity";

type StudentProps = {
    name: string;
    email: string;
}

class Student extends Entity<StudentProps>{
    private constructor(props: StudentProps, id?: string) {
        super(props, id);
    }

    public create(props: StudentProps, id?: string){
        const student = new Student(props);

        return student;
    }
}