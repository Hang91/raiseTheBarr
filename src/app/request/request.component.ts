import { Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
	@ViewChild('f') demoForm: NgForm;
	
	onSubmit() {
		console.log(this.demoForm);
	}
}

