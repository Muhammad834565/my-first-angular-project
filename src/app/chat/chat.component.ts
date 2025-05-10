import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent implements OnInit{
  messages: any[] = [];
  newMessage: string = '';
  sender: string = '';
  receiver: string = '';

  constructor(private messageService: ChatService) {}

  ngOnInit(): void {
    this.messageService.listenForMessages().subscribe((message) => {
      this.messages.push(message);
    });
  }

  loadMessages() {
    this.messageService.getMessages(this.sender, this.receiver).subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage() {
    this.messageService.sendMessage(this.sender, this.receiver, this.newMessage);
    this.newMessage = '';
  }
}
