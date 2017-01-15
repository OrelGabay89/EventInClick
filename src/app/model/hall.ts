import { Image } from '../interfaces/image.interface';


export class Hall {

  constructor(

  public id: string, 
  public hallId: string, 
  public title: string,
  public pictureUrl: string,
  public images : Image[],
  public body: string,
  public regionName : string,
  public checked : boolean
  ) 
  {
  }
}