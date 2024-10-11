import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';   
import { list_of_tenants } from '../tenants';
@Component({
  selector: 'app-addtenants',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './addtenants.component.html',
  styleUrl: './addtenants.component.css'
})
export class AddtenantsComponent {
  @Input() showForm: boolean = false;
  @Output() formClosed = new EventEmitter(); // Emit an event when the form is closed

  @Output () add = new EventEmitter<{
    name: string,
    age: string,
    gender: string,
    aadharcard: string,
    phonenumber: string,
    emailaddress: string,
    date_of_joining: string,
    type_of_room_alloted: string,
    roomnumber: string
  }>(

  );


  form: FormGroup;

  enteredName = '';
  enteredAge = '';
  enteredGender = '';
  enteredDate = '';
  enteredPhoneNumber = '';
  enteredAadharcardnumber = '';
  enteredEmail = '';
  enteredtypeofroom = '';
  enteredroomNumber = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Define your form fields here
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.add.emit({
      name: this.enteredName,
      age: this.enteredAge,
      gender: this.enteredGender,
      aadharcard: this.enteredAadharcardnumber,
      phonenumber: this.enteredPhoneNumber,
      emailaddress: this.form.value.email,
      date_of_joining: this.enteredDate,
      type_of_room_alloted: this.enteredtypeofroom,
      roomnumber: this.enteredroomNumber
    })
  }
  closeForm() {
    this.formClosed.emit();
  }
}
