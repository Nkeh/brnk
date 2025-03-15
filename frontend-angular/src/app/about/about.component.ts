import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  about_text: string = `Hey there! I’m BONYA Ransom Nkeh Kongnyuy, 
  a Computer Engineering student passionate about Tech and Problem solving.
  I work with Django, Angular, and AI models, but I’m also hands-on with electrical wiring, electrical appliance maintenance,
  and troubleshooting—if it’s broken, I’ll figure out how to fix it!`

  aboutText2: string = `Beyond coding, I enjoy designing with Canva and Adobe,
  learning new things, and tackling real-world challenges. 
  Whether it’s software, AI, or hardware, 
  I love solving problems and building cool stuff. 
  Let’s connect and create something amazing!`
}
