export class RegistrationPerson{
    
   

    constructor(
        public id: number | undefined,
        public email: string | undefined,
        public password: string | undefined,
        public firstName: string | undefined,
        public lastName: string | undefined,
        public privateNumber: string | undefined,
        public activateCode: number | undefined
    ){
       
    }

   

    
}