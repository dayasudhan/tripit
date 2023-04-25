export class Feed {
  name : string;
  username : string;
  // party:string;
  // constituency:string;
  // email: string;
  // logo:string;
  // id:string;
  // phone:Number; 
  // address:string;
  // paid:Number;
  newsfeed:[{heading:string;
             description:string;
             feedvideo:string;
             feedimages:[{url:string}];
             feedvideos:[{url:string}];
             feedaudios:[{url:string}];
              time:Date
           }];
  inbox:[{
              name:string;
              phoneno:string;
              emailid:string;
              letter:string;
              //time:Date;
              url:string
  }];
  members:[{
              name:string;
              phoneno:string;
              emailid:string;
             // time:Date
  }];
  scrollimages:[{url:string}]
}
