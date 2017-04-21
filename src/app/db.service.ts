import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }

data=[{id:'1',name:'henok teferi',email:'henok@mum.edu'},
{id:'2',name:'Kaleb Jana',email:'kaleb@mum.edu'}];
getData(){
return this.data;
}
}
