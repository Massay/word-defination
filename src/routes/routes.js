import Home from '../pages/home'
import Student from '../pages/student'
import Teacher from '../pages/teacher'


export const routes = [
    {
       path: '/',
       name: 'Home',
       component: Home
    },{
       path: '/student',
       name: 'student',
       component: Student
    },{
       path: '/teacher',
       name: 'teacher',
       component: Teacher
    }
 ];
