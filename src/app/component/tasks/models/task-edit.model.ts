export class TaskEditModel{

    statusToString: string | undefined = '';

    constructor(
        public id: string | undefined,
        public name: string | undefined,
        public status: number | undefined
    ){
        this.statusToString = status?.toString();
    }

    static empty(): TaskEditModel{
        return new TaskEditModel(
            undefined,
            undefined,
            undefined
        );
    }

    initStatus(){
        if(this.statusToString)
           this.status = Number.parseInt(this.statusToString);
    }
}