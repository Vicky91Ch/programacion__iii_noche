interface Usuario {
    id: number;
    username: string;
    password: string;
}

const usuario1: UsuarioLogin = {
    id: 1,
    nombre: 'Pedro',
    correo: 'pedro@gmail.com'
};

const usuarioParaLogin: UsuarioLogin = {
    id: 1,
    username: 'higueraf',
    password: '12345'
};

function login(usuario: UsuarioLogin): void {  
    if (usuario.password === '12345' && usuario.username=='higueraf') {
        console.log(`usuario ${usuario.username} exitosamente autenticado`);
        console.log(`usuario ${usuario.username} exitosamente autenticado`);
    } else {
        console.log('acceso negado')
    }