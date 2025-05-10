import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class ChatService  {
  private apiUrl = 'http://localhost:5000/api/messages';
  private socket: Socket;

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:5000');
  }

  // Get messages between user and receiver
  getMessages(user1: string, user2: string): Observable<any> {
  return this.http.get(`http://localhost:5000/api/messages`, {
    params: { user1, user2 }
  });
}


  // Send a new message
  sendMessage(sender: string, receiver: string, content: string) {
    this.socket.emit('sendMessage', { sender, receiver, content });
  }

  // Listen for new messages
  listenForMessages() {
    return new Observable((observer) => {
      this.socket.on('newMessage', (message) => {
        observer.next(message);
      });
    });
  }
}
