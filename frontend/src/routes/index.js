import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoutes';

import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos'
import Page404 from '../pages/Page404';


export default function Routes() {
    return(
        //El componente Switch sirve para que se renderize un componente por vez y no varios al mismo tiempo
        // En route se especifica cual direccion se va a renderizar y el exact es para restringirlo a esa ruta
        //ni mas ni menos
            <Switch>
                <MyRoute exact path="/" component={Alunos} isClosed={false}/>
                <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed/>
                <MyRoute exact path="/aluno/:id/delete" component={Alunos} isClosed/>
                <MyRoute exact path="/aluno/" component={Aluno} isClosed/>
                <MyRoute exact path="/fotos/:id" component={Fotos} isClosed/>
                <MyRoute exact path="/register" component={Register} isClosed={false}/>
                <MyRoute exact path="/login" component={Login} isClosed={false}/>
                <MyRoute path="*" component={Page404}/>
            </Switch>
    );
};