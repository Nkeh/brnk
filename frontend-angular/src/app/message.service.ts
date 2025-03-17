import { Injectable } from '@angular/core';

import { MessageInterface } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  MessageList: MessageInterface[] = []
  // Message = 

  constructor() { }

  // submitMessage(): MessageInterface {
  //   return 
  // }
}
