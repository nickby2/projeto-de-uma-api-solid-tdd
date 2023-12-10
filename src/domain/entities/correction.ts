import { Entity } from "../../core/entity";

type CorrectionProps = {
    grade: number;
    submission: string;
    createdAt: Date;
}

class Correction extends Entity<CorrectionProps>{
    private constructor(props: CorrectionProps, id?: string) {
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string){
        const correction = new Correction(props);

        return correction;
    }
}