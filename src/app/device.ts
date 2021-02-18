export class Device {
    sn: any;
    description: string;
    type: number;
    available: boolean;
    constructor(sn: any, description: string, type: number, available:boolean) {
        this.sn = sn;
        this.description = description;
        this.type = type;
        this.available = available;
    }
}