import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { NotificationService, toastPayload } from '../notification.service';
import { UsersData } from '../shared/products';
import { IndividualConfig } from 'ngx-toastr';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  userData: UsersData;
  name: string = '';
  email: string = '';
  phone: string = '';
  notes: string = '';
  mailingListForm: FormGroup;
  loading = false;
  submitted = false;
  toast!: toastPayload;
  
  constructor( private formBuilder: FormBuilder,private dataService: DataService,
    private ts: NotificationService) { }

  ngOnInit(): void {
    this.mailingListForm = this.formBuilder.group({
      name: ['', Validators.required]
  });

  this.userData=new UsersData('','','','');
  }

   // convenience getter for easy access to form fields
   get f() { return this.mailingListForm.controls; }

  onSubmit1() {
    console.log(this.mailingListForm.value)
}

onSubmit(userFormData: any) {
  // Handle the form submission logic here
  console.log(userFormData);

  this.dataService.addUserMail(userFormData).subscribe((data) => {
    console.log(data);
    this.showMsg();   
    this.userData=new UsersData('','','','');
  })  

  // console.log('Name:', this.name);
  // console.log('Email:', this.email);
  // console.log('Phone:', this.phone);
  // console.log('Notes:', this.notes);
  // You can send the form data to your server or perform any other actions
  // like saving to a database, sending a confirmation email, etc.
}

showMsg(){
  this.toast = {
    // message: 'Some Message to Show',
    message: `Thank you..`,
    
    title: 'P4D',
    type: 'info',
    ic: {
      timeOut: 5500,
      closeButton: true,
    } as IndividualConfig,
  };
  this.ts.showToast(this.toast);
 
}


onReset(){
  //this.mailingListForm.reset();
  this.name = '';
  this.email = '';
  this.phone = '';
  this.notes = '';
}

resetForm(form: NgForm) {
  form.resetForm();
  this.name = '';
  this.email = '';
  this.phone = '';
  this.notes = '';
}

}
