import { Comment } from "./AllComment"

export interface IPost {
  title:string,
  summary:string,
  image:any,
  slug:string
  comments:Array<Comment>
  id:string,
}