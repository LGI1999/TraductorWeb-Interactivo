
if (document.getElementById("formularioDesplazamientoPagina") != null) {
    //Objeto con los eventos que ocurren dentro del formulario #formularioDesplazamientoPagina
    let formularioDesplazamientosPaginas = new Vue({
        el: "#formularioDesplazamientoPagina",
        methods: {
            //Muestra una pagina anterior a la mostrada
            restarPagina: function () {
                //Obtenemos el input que contiene el numero de la pagina
                let inputConPagina = document.getElementById("numeroPagina");

                //Evaluamos que exista el elemento para continuar
                if (inputConPagina != null) {

                    //Evaluamos si puede retroceder de pagina (que la pagina no sea 1)
                    if (parseInt(inputConPagina.value) <= 1) {
                        alert("No se puede retroceder de la primera pagina");
                    }
                    //En caso contrario procedemos a retroceder de pagina
                    else {
                        //Restamos el numero de la pagina
                        inputConPagina.value = parseInt(inputConPagina.value) - 1;

                        //Obtenemos el formulario que contiene el boton para ejecutar el submit y entregar el dato de la pagina en la cual se encuentra
                        let formulario = document.getElementById("formularioDesplazamientoPagina");

                        //Evaluamos que exista el elemento para continuar
                        if (inputConPagina != null) {
                            //Ejecutamos el submit del formulario
                            formulario.submit();
                        }
                    }

                }
            },

            //Muestra una pagina posterior a la mostrada
            sumarPagina: function () {
                //Obtenemos el input que tiene la cantidad de paginas (esto para controlar que recorrar las paginas existentes)
                let inputConCantidadPaginas = document.getElementById("cantidadPaginas")

                //Evaluamos que exista el elemento para continuar
                if (inputConCantidadPaginas != null) {

                    //Obtenemos el input que contiene el numero de la pagina
                    let inputConPagina = document.getElementById("numeroPagina");

                    //Evaluamos que exista el elemento para continuar
                    if (inputConPagina != null) {
                        //Evaluamos que la pagina actual sea menor que la ultima pagina. En ese caso aumentamos de pagina
                        if (parseInt(inputConCantidadPaginas.value) > parseInt(inputConPagina.value)) {
                            //Aumentamos el numero de la pagina
                            inputConPagina.value = 1 + parseInt(inputConPagina.value);

                            //Obtenemos el formulario que contiene el boton para ejecutar el submit y entregar el dato de la pagina en la cual se encuentra
                            let formulario = document.getElementById("formularioDesplazamientoPagina");

                            //Evaluamos que exista el elemento para continuar
                            if (formulario != null) {
                                //Ejecutamos el submit del formulario
                                formulario.submit();
                            }
                        }
                    }
                }
            },

            //Muestra la primera pagina
            irPrimeraPagina: function () {
                //Obtenemos el input que contiene el numero de la pagina
                let inputConPagina = document.getElementById("numeroPagina");

                //Evaluamos que exista el elemento para continuar
                if (inputConPagina != null) {
                    //Establecemos el numero de la pagina a 1
                    inputConPagina.value = 1;

                    //Obtenemos el formulario que contiene el boton para ejecutar el submit y entregar el dato de la pagina en la cual se encuentra
                    let formulario = document.getElementById("formularioDesplazamientoPagina");

                    //Evaluamos que exista el elemento para continuar
                    if (formulario != null) {
                        //Ejecutamos el submit del formulario
                        formulario.submit();
                    }
                }
            },

            //Muestra la ultima pagina
            irUltimaPagina: function () {
                //Obtenemos el input que tiene la cantidad de paginas (esto para controlar que recorrar las paginas existentes)
                let inputConCantidadPaginas = document.getElementById("cantidadPaginas")

                //Evaluamos que exista el elemento para continuar
                if (inputConCantidadPaginas != null) {

                    //Obtenemos el input que contiene el numero de la pagina
                    let inputConPagina = document.getElementById("numeroPagina");

                    //Evaluamos que exista el elemento para continuar
                    if (inputConPagina != null) {
                        //Establecemos el numero de la pagina como el numero que corresponde a la ultima pagina siempre y cuando este sea mayor a 0
                        inputConPagina.value = inputConCantidadPaginas.value > 0 ? inputConCantidadPaginas.value : 1;

                        //Obtenemos el formulario que contiene el boton para ejecutar el submit y entregar el dato de la pagina en la cual se encuentra
                        let formulario = document.getElementById("formularioDesplazamientoPagina");

                        //Evaluamos que exista el elemento para continuar
                        if (formulario != null) {
                            //Ejecutamos el submit del formulario
                            formulario.submit();
                        }
                    }
                }
            }
        }
    })
}

if (document.getElementById("bodyListado") != null) {
    //Objeto con los eventos que ocurren dentro del body #bodyListado
    let tablaListado = new Vue({
        el: "#bodyListado",
        methods: {
            //Tiene dos funciones, resaltar la fila que se selecciono cambiado su clase y cargar diferentes inputs con los datos de esa fila
            seleccionFila0: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila0");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados creamos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila1: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila1");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila2: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila2");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila3: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila3");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila4: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila4");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila5: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila5");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila6: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila6");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila7: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila7");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila8: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila8");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            },
            seleccionFila9: function () {
                //RESALTADO DE FILA
                //Obtenemos el body de la tabla
                let tabla = document.getElementById("bodyListado");

                //Recorremos cada fila del body
                for (let fila of tabla.children) {
                    //Verificamos si la fila tiene la clase resltarElemento
                    if (fila.classList.contains("resaltarElemento") == true) {
                        //En caso de tenerla se la eliminamos
                        fila.classList.remove("resaltarElemento");
                    }
                }
                //Obtenemos la fila que ejecuto el evento para poder agregar la clase que resalte su contenido
                let filaActual = document.getElementById("fila9");
                filaActual.classList.add("resaltarElemento");

                //CARGA DE INPUTS
                //Obtenemos todos los inputs que debemos cargar
                let idPalabraIngles = document.getElementById("IdPalabraIngles");
                let idSignificados = document.getElementsByClassName("IdSignificados");
                let palabraIngles = document.getElementById("PalabraIngles");
                let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
                let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                let significadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                let significadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                let significadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                let significadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                let significadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                let significadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                let significadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                let significadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                let significadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                //Cargamos cada uno de ellos con el contenido de la fila que le corresponde
                idPalabraIngles.value = filaActual.children[12].textContent;

                //Para cargar el IdSignificados cremos un bucle ya que varios elementos lo contendran
                for (let indiceIdSignificado in idSignificados) {
                    idSignificados[indiceIdSignificado].value = filaActual.children[13].textContent;
                }

                palabraIngles.value = filaActual.children[0].textContent;
                palabraInglesPresente.value = filaActual.children[1].textContent;
                significadoEspañol_1.value = filaActual.children[2].textContent;
                significadoEspañol_2.value = filaActual.children[3].textContent;
                significadoEspañol_3.value = filaActual.children[4].textContent;
                significadoEspañol_4.value = filaActual.children[5].textContent;
                significadoEspañol_5.value = filaActual.children[6].textContent;
                significadoEspañol_6.value = filaActual.children[7].textContent;
                significadoEspañol_7.value = filaActual.children[8].textContent;
                significadoEspañol_8.value = filaActual.children[9].textContent;
                significadoEspañol_9.value = filaActual.children[10].textContent;
                significadoEspañol_10.value = filaActual.children[11].textContent;

                //Obtenemos los botones para actualizar y borrar, esto para luego habilitarlos
                let btnActualizar = document.getElementById("btnActualizar");
                let btnBorrar = document.getElementById("btnBorrar");

                btnActualizar.disabled = false;
                btnBorrar.disabled = false;
            }
        }
    })
}

if (document.getElementById("formBorrado") != null) {
    let formBorrado = new Vue({
        el: "#formBorrado",
        methods: {
            verificarBorrado: function () {
                //Obtenemos el body de la tabla #bodyListado que muestra el listado
                let bodyListado = document.getElementById("bodyListado");

                //Evaluamos que el body tenga por lo menos mas de una fila para poder generar el borrar
                if (bodyListado.childElementCount > 1) {
                    //Obtenemos el input que contiene la palabra en ingles que selecciono
                    let inputConPalabraInglesSeleccionada = document.getElementById("PalabraIngles");

                    //Preguntamos al usuario si desea borrar la palabra
                    let respuesta = window.confirm("¿Desea borrar la palabra '" + inputConPalabraInglesSeleccionada.value + "'?");

                    //Verificamos si seleciono que desea borrar la palabra
                    if (respuesta == true) {
                        //Obtenemos el formulario que se comunica con el controlador Listado para hacer el borrado
                        let formularioBorrado = document.getElementById("formBorrado");

                        //Enviamos los datos al controlador por medio del submit del formulario
                        formularioBorrado.submit();
                    }
                }
                //En caso de no tener mas de una fila cargada entonces lo señalamos por un mensaja de error
                else {
                    alert("No puede borrar la todas las filas de una pagina");
                }
            }
        }
    })
}

if (document.getElementById("formFiltro") != null) {
    let seccionFiltro = new Vue({
        el: "#formFiltro",
        data: {            
            indiceTipoFiltroSeleccionado: 0, //Variable que contendra el indice del option seleccionado en el select #tipoFiltro
            mensajeError: ""//Variable mostrada en el span del input que contiene el filtro buscado
        },
        methods: {
            //Metodo para asignar a indiceTipoFiltroSeleccionado el indice el cual fue seleccionado en el select #tipoFiltro
            cambioOption: function () {
                //Obtenemos el select para verificar cual es el indice seleccionado
                let selectFiltro = document.getElementById("tipoFiltro");

                //Verificamos que el elemento exista por si lo borran
                if (selectFiltro != null) {
                    //Asignamos el indice seleccionado a la variable de Vue indiceTipoFiltroSeleccionado
                    this.indiceTipoFiltroSeleccionado = selectFiltro.options.selectedIndex;
                }
            },
            //Ejecuta el submit del form #formFiltro
            filtrar: function () {                                
                //Obtenemos el input que contiene el filtro buscado
                let inputFiltro = document.getElementById("filtroBuscado");

                //Evaluamos si ingreso algo como filtro
                if (inputFiltro.value.toString().trim() != "") {

                    //Evaluamos si la opcion en el select #tipoFiltro es 3, lo que nos indicaria que eligio filtro por pagina
                    if (this.indiceTipoFiltroSeleccionado == 3) {
                        //En caso de haber elegido pagina controlaremos que solo haya ingresado numeros como filtro
                        if (validacionSoloNumeros(filtroBuscado.value) == false) {
                            //Al no ingresar numeros se lo informamos por el mensaje y terminamos el metodo
                            this.mensajeError = "Solo ingrese numeros";
                            return;
                        }
                        //Ahora evaluaremos que la pagina ingresada no sea mayor a la cantidad de paginas

                        //Primero obtenemos el input que en su interior tiene la cantidad de pagina
                        let inputCantidadPaginas = document.getElementById("cantidadPaginasGeneral");
                        let cantidadPaginas = inputCantidadPaginas.value;

                        //Evaluamos si la cantidad de paginas no es menor a la pagina buscada por el filtro
                        if (parseInt(cantidadPaginas) < parseInt(filtroBuscado.value)) {
                            //En caso de ser menor lo señalamos por el mensaje y terminamos el metodo
                            this.mensajeError = "Ingrese una pagina existente";
                            return;
                        }
                    }
                    else if (this.indiceTipoFiltroSeleccionado < 3) {
                        //En caso de haber elegido alguno que no sea pagina controlaremos que no haya ingresado numeros
                        if (validacionSinNumero(filtroBuscado.value) == false) {
                            //Al ingresar numeros se lo informamos por el mensaje y terminamos el metodo
                            this.mensajeError = "No puede ingresar numeros";
                            return;
                        }                        
                    }

                    //Cambiamos el formato del filtro buscado
                    inputFiltro.value = cambiarFormatoUpperCase(inputFiltro.value);

                    //Obtenemos el form
                    let formFiltro = document.getElementById("formFiltro");

                    //Ejecutamos el submit del form para que envie los datos al metodo Filtrar del controlador Listado
                    formFiltro.submit();
                }
                //En caso de que no haya ingresado nada lo señalamos en la variable mensajeError que sera mostrada por el span del input del filtro
                else {
                    this.mensajeError = "Ingrese el filtro buscado";
                }
                
            }
        }
    })
}

//Devuelve un true si todas las validaciones fueron correctas (de la vista Administacion) y un false sino
let validacionFormularioAdministracion = function () {
    let validado = true;

    //Obtenemos los inputs que contiene la PalabraInglesPresent y SignificadoEspañol_1
    let palabraInglesPresente = document.getElementById("PalabraInglesPresente");
    let significadoEspañol_1 = document.getElementById("SignificadoEspañol_1");

    //Verificamos que ambos tengan contenido
    if (palabraInglesPresente.value.trim() == "" && significadoEspañol_1.value.trim() == "") {
        //En caso de que ninguno de los dos tenga contenido (sin contar los espacios) hacemos que la validacion falle
        validado = false;

        //Obtenemos los <span> de ambos input para luego señalar el problema
        let spanPalabraInglesPresente = document.getElementById("ErrorPalabraInglesPresente");
        let spanSignificadoEspañol_1 = document.getElementById("ErrorSignificadoEspañol_1");

        spanPalabraInglesPresente.textContent = "El verbo en presente o la traduccion nº1 deben estar rellenados";
        spanSignificadoEspañol_1.textContent = "El verbo en presente o la traduccion nº1 deben estar rellenados";
    }

    return validado;
}
if (document.getElementById("formAdministracion") != null) {
    let formAdministracion = new Vue({
        el: "#formAdministracion",
        methods: {
            
            //Ejecuta el submit del form para que actualiza o registre una palabra con sus significados
            administrarRegistro: function () {
                //Preguntamos si desea realizar la accion
                let resultado = window.confirm("¿Desea realizar la accion?");

                //Evaluamos el resultado de su respuesta
                if (resultado == true) {
                    //En caso de respuesta afirmativa verificamos que todos los elementos del formulario hayan sido cargados correctamente utilizando un metodo externo
                    if (validacionFormularioAdministracion() == true) {
                        //Al tener todo validado seguimos con las operaciones

                        //Obtenemos todos los inputs que contienen texto para cambiar su formato a UpperCase (primera letra en mayuscula)
                        let inputPalabraIngles = document.getElementById("PalabraIngles");
                        let inputPalabraInglesPresente = document.getElementById("PalabraInglesPresente");
                        let inputSignificadoEspañol_1 = document.getElementById("SignificadoEspañol_1");
                        let inputSignificadoEspañol_2 = document.getElementById("SignificadoEspañol_2");
                        let inputSignificadoEspañol_3 = document.getElementById("SignificadoEspañol_3");
                        let inputSignificadoEspañol_4 = document.getElementById("SignificadoEspañol_4");
                        let inputSignificadoEspañol_5 = document.getElementById("SignificadoEspañol_5");
                        let inputSignificadoEspañol_6 = document.getElementById("SignificadoEspañol_6");
                        let inputSignificadoEspañol_7 = document.getElementById("SignificadoEspañol_7");
                        let inputSignificadoEspañol_8 = document.getElementById("SignificadoEspañol_8");
                        let inputSignificadoEspañol_9 = document.getElementById("SignificadoEspañol_9");
                        let inputSignificadoEspañol_10 = document.getElementById("SignificadoEspañol_10");

                        //Cambiamos su formato
                        inputPalabraIngles.value = cambiarFormatoUpperCase(inputPalabraIngles.value);
                        inputPalabraInglesPresente.value = cambiarFormatoUpperCase(inputPalabraInglesPresente.value);
                        inputSignificadoEspañol_1.value = cambiarFormatoUpperCase(inputSignificadoEspañol_1.value);
                        inputSignificadoEspañol_2.value = cambiarFormatoUpperCase(inputSignificadoEspañol_2.value);
                        inputSignificadoEspañol_3.value = cambiarFormatoUpperCase(inputSignificadoEspañol_3.value);
                        inputSignificadoEspañol_4.value = cambiarFormatoUpperCase(inputSignificadoEspañol_4.value);
                        inputSignificadoEspañol_5.value = cambiarFormatoUpperCase(inputSignificadoEspañol_5.value);
                        inputSignificadoEspañol_6.value = cambiarFormatoUpperCase(inputSignificadoEspañol_6.value);
                        inputSignificadoEspañol_7.value = cambiarFormatoUpperCase(inputSignificadoEspañol_7.value);
                        inputSignificadoEspañol_8.value = cambiarFormatoUpperCase(inputSignificadoEspañol_8.value);
                        inputSignificadoEspañol_9.value = cambiarFormatoUpperCase(inputSignificadoEspañol_9.value);
                        inputSignificadoEspañol_10.value = cambiarFormatoUpperCase(inputSignificadoEspañol_10.value);

                        //Obtenemos el form (#formAdministracion) para poder luego ejecutar el submit
                        let formularioAdministracion = document.getElementById("formAdministracion");

                        //Ejecutamos el submit
                        formularioAdministracion.submit();
                    }                    
                }
            },
            //Vacia el contenido de los input del form, siempre y cuando se este agregando un nuevo registro
            vaciarContenido: function () {
                //Obtenemos el input que contiene el ID del registro que se esta modificando
                let inputId = document.getElementById("IdSignificados");

                //Evaluamos si su contenido es 0 (los que significa que no se esta modificando sino agregando un registro)
                if (inputId.value == 0) {
                    //En este caso borramos todos los inputs que tienen contenido
                    let inputPalabraIngles = document.getElementById("PalabraIngles");
                    let inputPalabraInglesPresente = document.getElementById("PalabraInglesPresente");
                    let inputSignificadoEspañol_1 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_2 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_3 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_4 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_5 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_6 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_7 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_8 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_9 = document.getElementById("SignificadoEspaño_1");
                    let inputSignificadoEspañol_10 = document.getElementById("SignificadoEspaño_1");

                    //Borramos su contenido
                    inputPalabraIngles.value = "";
                    inputPalabraInglesPresente.value = "";
                    inputSignificadoEspañol_1.value = "";
                    inputSignificadoEspañol_2.value = "";
                    inputSignificadoEspañol_3.value = "";
                    inputSignificadoEspañol_4.value = "";
                    inputSignificadoEspañol_5.value = "";
                    inputSignificadoEspañol_6.value = "";
                    inputSignificadoEspañol_7.value = "";
                    inputSignificadoEspañol_8.value = "";
                    inputSignificadoEspañol_9.value = "";
                    inputSignificadoEspañol_10.value = "";
                }
            },
            //Habilita un input de text en especifico
            habilitarSignificado2: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_2");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado3: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_3");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado4: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_4");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado5: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_5");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado6: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_6");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado7: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_7");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado8: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_8");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado9: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_9");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },
            habilitarSignificado10: function () {
                //Obtenemos el input que contiene el significado
                let inputConSignificado = document.getElementById("SignificadoEspañol_10");

                //Eliminamos el atributo readonly para que el usuario escriba en el elemento
                inputConSignificado.removeAttribute("readonly");
            },

        }
    })
}

//Metodo que cambia una cadena de caracteres a formato UpperLower (EJ: Hola como estas)
let cambiarFormatoUpperCase = function (cadenaCaracteres) {
    //Variable que tendra el contenido de el parametro cadenaCaracteres pero con el formato cambiado
    let cadenaCaracteresFormatoUpperCase = "";

    //Evaluamos que la cadena tenga contenido
    if (cadenaCaracteres.toString().trim() != "") {
        //Primero llevamos todas la cadena de caracteres a minuscula
        cadenaCaracteres = cadenaCaracteres.toString().toLowerCase();

        //Ahora obtenemos la primera letra de la cadena transformandola en minuscula
        let primeraLetraMayuscula = cadenaCaracteres[0].toUpperCase();        

        //Remplazamos la primera letra antigua por la nueva que esta en mayuscula
        for (let i = 0; i < cadenaCaracteres.length; i++) {
            if (i == 0) {
                cadenaCaracteresFormatoUpperCase = primeraLetraMayuscula;
            }
            else {
                cadenaCaracteresFormatoUpperCase = cadenaCaracteresFormatoUpperCase + cadenaCaracteres[i];
            }
        }
    }   

    //Devolvemos la cadena de caracteres pero con el formato nuevo
    return cadenaCaracteresFormatoUpperCase;
}

//Evalua si la cadena de caracteres recibida como parametro contenga solo numeros devolviendo un true si es asi o un false si no
let validacionSoloNumeros = function (cadenaCaracteres) {
    //Variable que señala si la validacion es correcta o incorrecta
    validado = true;
    //Recorremos cada caracter de la cadena
    for (let i = 0; i < cadenaCaracteres.length; i++) {
        //Intentamos convertir cada caracter a int
        try {
            //Convertimos el caracter de la cadena en int
            parseInt(cadenaCaracteres[i]);

            //En caso de poder convertirlo no pasa nada ya necesitamos que ningun caracter no sea un numero           
        }
        catch (error) {            
            //En caso de no poder convertirlo establecemos que la validacion fallo señalandolo en la variable
            validado = false;
        }
    }
    return validado;
}

//Evalua si la cadena de caracteres recibida como parametro no contenga numeros devolviendo un true si es asi o un false si no
let validacionSinNumero = function (cadenaCaracteres) {
    //Variable que señala si la validacion es correcta o incorrecta
    validado = true;

    //Recorremos cada caracter de la cadena
    for (let i = 0; i < cadenaCaracteres.length; i++) {
        //Convertimos el caracter de la cadena en int y verificamos si este no es un NaN lo que marcaria que en un numero
        if (isNaN(parseInt(cadenaCaracteres[i])) == false) {
            //En caso de poder convertirlo establecemos que la validacion fallo señalandolo en la variable
            validado = false;
        }                  
    }
    return validado;
}