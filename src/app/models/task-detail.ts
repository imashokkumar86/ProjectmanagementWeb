import { User } from './user';
import { Project } from './project';
import {ParentTaskDetail } from './ParentTask-detail';
export class TaskDetail 
{
    id:number;
    name:string;
    startDate:Date;
    endDate:Date;
    priority:number;
    parentId:number;  
    parentName:string; 
    activeStatus:boolean;
    projectId:number;
    projectDetail : Project;
    userId:number;   
    userDetail:User;
    parentTask:ParentTaskDetail;
}