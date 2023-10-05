const enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}

// enum ERROR_TYPES {
//     NOT_FOUND,
//     UNAUTHORIZED,
//     FORBIDDEN
// }

function mostrarMensaje(tipoError: ERROR_TYPES) {
    if (tipoError === ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    } else if (tipoError === ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tiene permiso de acceso')    
    } else if (tipoError === ERROR_TYPES.FORBIDDEN) {
        console.log('No tiene permiso de acceso')
    }
}