import {  Routes } from '@angular/router';
import { TaskShellComponent } from './component/tasks/containers/task-shell/task-shell.component';
import { LoginComponent } from './component/tasks/components/login/login.component';
import { RegisterComponent } from './component/tasks/components/register/register.component';
import { SendCodeMailComponent } from './component/tasks/components/send-code-mail/send-code-mail.component';
import { ChangePaswordComponent } from './component/tasks/components/change-pasword/change-pasword.component';
import { DoctorRegisterComponent } from './component/tasks/components/doctor-register/doctor-register.component';
import { GetCategoryesComponent } from './component/tasks/components/get-categoryes/get-categoryes.component';
import { WeekCalendarComponent } from './component/tasks/components/week-calendar/week-calendar.component';
import { SendRegistrationCodeComponent } from './component/tasks/components/send-registration-code/send-registration-code.component';



export const routes: Routes = [
   {
        path:"",
        component:TaskShellComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"Register",
        component:RegisterComponent
       
    },
    { path: 'send-code-mail', component: SendCodeMailComponent },
    { path: 'change-pasword', component: ChangePaswordComponent },
    { path: 'doctor-register', component: DoctorRegisterComponent },
    { path: 'get-categoryes', component: GetCategoryesComponent },
    { path: 'calendar', component: WeekCalendarComponent },
    { path: 'send-code-register', component: SendRegistrationCodeComponent },
];



