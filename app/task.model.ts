export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {   }
}
class ITask extends Task{
  public done : boolean = false;
  constructor (public description : string ){
  super(description , 5);
 }
}
