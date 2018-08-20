import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Sistema de Almacen';
  msg: string = '';

  employees = [
{'nombre': 'Elvin', position: 'manager', email: 'ing.elvingonzalez@gmail.com'},
{'nombre': 'Yerina', position: 'Designer', email: 'yerinay@hotmail.com'},
{'nombre': 'Mimi', position: 'Programmer', email: 'mimimimi@gmail.com'},
{'nombre': 'Ramses', position: 'Dancing', email: 'elvisramses@gmail.com'}
  ];
  model: any = {};
  model2: any = {};
  hideUpdate: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Registro Agregado, satisfactoriamente';
  }

  deleteEmployee(i): void {
  var answer = confirm('Seguro de Eliminar');
  console.log(answer);
  if(answer){
   this.employees.splice(i, 1); 
   this.msg = 'Registro eliminado, Satisfactoriamente';
  }
  }

myValue;
  editEmployee(i): void {
    this.hideUpdate = false;
this.model2.nombre = this.employees[i].nombre;
this.model2.position = this.employees[i].position;
this.model2.email = this.employees[i].email;
this.myValue = i;
  }


  updateEmployee(): void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++) {
      if(i == j) {
      this.employees[i] = this.model2;
      this.msg = 'Registro actualizado, Satifactoriamente';
      this.model2  = {};
          }
    }
}

closeAlert(): void{
  this.msg = '';
}

}