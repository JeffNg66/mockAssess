export class orderClass {
    constructor (
        public contact: string,
        public name: string,
        public gender: string,
        public dateBirth: Date,
        public dateOrder: Date,
        public typeOrder: string,
        public unitOrder: string,
    ) {

    }
}