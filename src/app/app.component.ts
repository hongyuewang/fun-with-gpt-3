import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-gpt3';

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(formData: { prompt: string; }) {
    const data = {
      prompt: formData.prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
  };

  
 const res = fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
  mode: 'cors',
  method: "POST",
  headers: {
      "Content-Type": "application/json",
 Authorization: `Bearer ${environment.apiKey}`
  },
  body: JSON.stringify(data)
});
  
 }

}
