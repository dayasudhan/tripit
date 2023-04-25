export class Feed {
  name : string;
  username : string;

  newsfeed:[{heading:string;
             description:string;
             feedvideo:string;
             feedimages:[{url:string}];
             feedvideos:[{url:string}];
             feedaudios:[{url:string}];
              time:Date
           }];
  // inbox:[{
  //             name:string;
  //             phoneno:string;
  //             emailid:string;
  //             letter:string;
  //             //time:Date;
  //             url:string
  // }];
  // members:[{
  //             name:string;
  //             phoneno:string;
  //             emailid:string;
  //            // time:Date
  // }];
  scrollimages:[{url:string}]
}
