import { EnumType } from "typescript";

 

export interface Itodolist{
    id?: number;
    name: string;
    status: Status;

    
}



enum Status {
    current = 0,
    completed = 1
  }
  
  



  