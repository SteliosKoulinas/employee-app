export class Connection {
    id:string;
    eid:string;
    dsn:string;
    constructor(id:string,eid:string, dsn:string){
        this.id= id;
        this.eid=eid;
        this.dsn=dsn;
    }
}
