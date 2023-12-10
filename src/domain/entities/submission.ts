import { Entity } from "../../core/entity";

type SubmissionProps = {
    challengeId: string;
    studentId: string;
    createdAt: Date;
}

class Submission extends Entity<SubmissionProps>{
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
    }

    static create(props: SubmissionProps, id?: string){
        const submission = new Submission(props);

        return submission;
    }
}