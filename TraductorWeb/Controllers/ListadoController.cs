using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TraductorWeb.Models.CustomModels;
using TraductorWeb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace TraductorWeb.Controllers
{
    public class ListadoController : Controller
    {
        //IConfiguration que nos sera util para obtener la conexion a la base de datos para luego con ADO.NET utilizarla
        private IConfiguration configuracion;

        private TraductorCTX contexto;

        public ListadoController(TraductorCTX _contexto, IConfiguration _configuracion)
        {
            //Obtenemos el contexto de la base de datos
            contexto = _contexto;

            //Obtenemos la configuracion para luego tener la conexion a la base de datos
            configuracion = _configuracion;
        }

        //Obtenemos un objeto de tipo Listado el cual tendra la pagina que es mostrada
        [BindProperty]
        public Listado listado { get; set; }

        //Direcciona a la vista Index
        public IActionResult Index()
        {
            //Obtenemos la pagina a mostrar y cargamos el listado a mostrar en la variable ViewBag
            Listado listadoConPagina = obtenerListadoPalabras();

            return View(listadoConPagina);
        }

        //Direcciona a la vista Administracion
        public IActionResult Administracion()
        {
            return View(listado);
        }

        //Guarga o actualiza un registro de una palabra en ingles
        public IActionResult Administrar()
        {
            //Evaluamos si la palabra que representa un verbo en presente (PalabraInglesPresente) este registrada excepto que no este cargarda (cosa que puede ocurrir al no ser obligatorio)
            if (verificacionExistenciaPalabraIngles(listado.PalabraInglesPresente) == true || listado.PalabraInglesPresente == null)
            {
                //Evaluamos si el objeto listado (el cual tiene todos los datos de la palabra a registrar o actualizar) tiene su atributo IdSignificados cargado con algun ID
                if (listado.IdSignificados == 0)//Si IdSignificados es 0 significara que no tiene ningun ID almacenado por lo tanto se registran los datos de listado como un nuevo registro
                {
                    //Evaluamos que la palabra a traducir (PalabraIngles) no este registrada
                    if (verificacionExistenciaPalabraIngles(listado.PalabraIngles) == false)
                    {
                        registroDePalabra();

                        //Establecemos el mensaje en ViewBag.mensaje señalando que se completo el agregado
                        ViewBag.mensaje = "¡Agredado completado con exito!";
                    }
                    //En caso de que la palabra a traducir exista lo señalamos en la variable ViewBag
                    else
                    {
                        ViewBag.mensaje = "La palabra a traducir que se desea ingresar ya existe";
                    }
                }
                //Al tener ID actualizamos los datos del registro al cual pertenece el ID
                else
                {
                    actualizacionDePalabra();

                    //Si la actualizacion se realiza entonces volvemos a la vista Index utilizando el metodo que cargara el ViewBag que contiene los datos a mostrar por la tabla y un objeto Listado con la pagina que se esta mostrando en la tabla 
                    return View("Index", obtenerListadoPalabras());
                }
            }
            //En caso de que el verbo en presente no exista lo señalamos en la variable ViewBag
            else
            {
                ViewBag.mensaje = "El verbo en presente que se desea ingresar no existe";
            }

            return View("Administracion", listado);
        }

        //Borra un registro de una palabra en ingles
        public IActionResult Borrar()
        {
            //Obtenemos el registro de los significados a borrar mediante el ID recibido por el modelo
            Significados significadosBorrar = contexto.Significados.Find(listado.IdSignificados);

            //Verificamos que exista el registro
            if(significadosBorrar != null)
            {
                //Borramos el registro
                contexto.Significados.Remove(significadosBorrar);

                //Guardamos los cambios
                contexto.SaveChanges();
            }
            //Obtenemos un objeto Listado que tendra servira para enviarlo al index pero este no tiene contenido sino que se crea para luego enviar al index la pagina que debe mostrar. Tambien se carga el ViewBag con el listado a mostrar
            Listado listadoMostrar = obtenerListadoPalabras();

            //Establecemos que la pagina del objeto listado que sera enviado a index es la misma pagina en la que estaba la palabra borrada
            listadoMostrar.Pagina = listado.Pagina;

            return View("Index", listadoMostrar);
        }

        //Carga el ViewBag que carga la tabla #tablaListado con lo obtenido mediante el filtrado
        public IActionResult Filtrar()
        {
            //Evaluamos el tipo de filtrado que eligio el usuario
            switch (listado.datosFiltro.indiceTipoFiltro)
            {
                //Filtro: Traducido
                case 0:
                    //Cargamos en la variable ViewBag (usada para cargar la tabla #tablaListado) todo lo solicitado por el usuario
                    #region queryFiltro
                    ViewBag.datosPalabras = (from _palabrasIngles in contexto.PalabrasIngles
                                             join _significados in contexto.Significados
                                             on _palabrasIngles.IdPalabraIngles equals _significados.IdPalabraIngles
                                             where _palabrasIngles.PalabraIngles == listado.datosFiltro.filtro                                             
                                             select new Listado
                                             {
                                                 IdPalabraIngles = _significados.IdPalabraIngles,
                                                 IdSignificados = _significados.IdSignificados,
                                                 PalabraInglesPresente = _significados.PalabraInglesPresente,
                                                 SignificadoEspañol_1 = _significados.SignificadoEspañol_1,
                                                 SignificadoEspañol_2 = _significados.SignificadoEspañol_2,
                                                 SignificadoEspañol_3 = _significados.SignificadoEspañol_3,
                                                 SignificadoEspañol_4 = _significados.SignificadoEspañol_4,
                                                 SignificadoEspañol_5 = _significados.SignificadoEspañol_5,
                                                 SignificadoEspañol_6 = _significados.SignificadoEspañol_6,
                                                 SignificadoEspañol_7 = _significados.SignificadoEspañol_7,
                                                 SignificadoEspañol_8 = _significados.SignificadoEspañol_8,
                                                 SignificadoEspañol_9 = _significados.SignificadoEspañol_9,
                                                 SignificadoEspañol_10 = _significados.SignificadoEspañol_10,
                                                 PalabraIngles = _palabrasIngles.PalabraIngles
                                             }).ToList();
                    #endregion
                    //Cargamos la pagina del primer registro como 0 (esto se utiliza luego)
                    ViewBag.datosPalabras[0].Pagina = 0;
                    break;
                //Filtro: Traduccion
                case 1:
                    //Cargamos en la variable ViewBag (usada para cargar la tabla #tablaListado) todo lo solicitado por el usuario
                    #region queryFiltro
                    ViewBag.datosPalabras = (from _palabrasIngles in contexto.PalabrasIngles
                                             join _significados in contexto.Significados
                                             on _palabrasIngles.IdPalabraIngles equals _significados.IdPalabraIngles
                                             where _significados.SignificadoEspañol_1 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_2 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_3 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_4 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_5 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_6 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_7 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_8 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_9 == listado.datosFiltro.filtro ||
                                             _significados.SignificadoEspañol_10 == listado.datosFiltro.filtro
                                             select new Listado
                                             {
                                                 IdPalabraIngles = _significados.IdPalabraIngles,
                                                 IdSignificados = _significados.IdSignificados,
                                                 PalabraInglesPresente = _significados.PalabraInglesPresente,
                                                 SignificadoEspañol_1 = _significados.SignificadoEspañol_1,
                                                 SignificadoEspañol_2 = _significados.SignificadoEspañol_2,
                                                 SignificadoEspañol_3 = _significados.SignificadoEspañol_3,
                                                 SignificadoEspañol_4 = _significados.SignificadoEspañol_4,
                                                 SignificadoEspañol_5 = _significados.SignificadoEspañol_5,
                                                 SignificadoEspañol_6 = _significados.SignificadoEspañol_6,
                                                 SignificadoEspañol_7 = _significados.SignificadoEspañol_7,
                                                 SignificadoEspañol_8 = _significados.SignificadoEspañol_8,
                                                 SignificadoEspañol_9 = _significados.SignificadoEspañol_9,
                                                 SignificadoEspañol_10 = _significados.SignificadoEspañol_10,
                                                 PalabraIngles = _palabrasIngles.PalabraIngles
                                             }).ToList();
                    #endregion
                    //Cargamos la pagina del primer registro como 0 (esto se utiliza luego)
                    ViewBag.datosPalabras[0].Pagina = 0;
                    break;
                //Filtro: Presente
                case 2:
                    //Cargamos en la variable ViewBag (usada para cargar la tabla #tablaListado) todo lo solicitado por el usuario
                    #region queryFiltro
                    ViewBag.datosPalabras = (from _palabrasIngles in contexto.PalabrasIngles
                                             join _significados in contexto.Significados
                                             on _palabrasIngles.IdPalabraIngles equals _significados.IdPalabraIngles
                                             where _significados.PalabraInglesPresente == listado.datosFiltro.filtro
                                             select new Listado
                                             {
                                                 IdPalabraIngles = _significados.IdPalabraIngles,
                                                 IdSignificados = _significados.IdSignificados,
                                                 PalabraInglesPresente = _significados.PalabraInglesPresente,
                                                 SignificadoEspañol_1 = _significados.SignificadoEspañol_1,
                                                 SignificadoEspañol_2 = _significados.SignificadoEspañol_2,
                                                 SignificadoEspañol_3 = _significados.SignificadoEspañol_3,
                                                 SignificadoEspañol_4 = _significados.SignificadoEspañol_4,
                                                 SignificadoEspañol_5 = _significados.SignificadoEspañol_5,
                                                 SignificadoEspañol_6 = _significados.SignificadoEspañol_6,
                                                 SignificadoEspañol_7 = _significados.SignificadoEspañol_7,
                                                 SignificadoEspañol_8 = _significados.SignificadoEspañol_8,
                                                 SignificadoEspañol_9 = _significados.SignificadoEspañol_9,
                                                 SignificadoEspañol_10 = _significados.SignificadoEspañol_10,
                                                 PalabraIngles = _palabrasIngles.PalabraIngles
                                             }).ToList();
                    #endregion
                    //Cargamos la pagina del primer registro como 0 (esto se utiliza luego)
                    ViewBag.datosPalabras[0].Pagina = 0;
                    break;
                //Filtro: Pagina
                case 3:
                    //Cargamos en la variable ViewBag (usada para cargar la tabla #tablaListado) todo lo solicitado por el usuario
                    #region queryFiltro
                    ViewBag.datosPalabras = (from _palabrasIngles in contexto.PalabrasIngles
                                             join _significados in contexto.Significados
                                             on _palabrasIngles.IdPalabraIngles equals _significados.IdPalabraIngles
                                             where _significados.Pagina == Convert.ToInt32(listado.datosFiltro.filtro)
                                             select new Listado
                                             {
                                                 IdPalabraIngles = _significados.IdPalabraIngles,
                                                 IdSignificados = _significados.IdSignificados,
                                                 PalabraInglesPresente = _significados.PalabraInglesPresente,
                                                 SignificadoEspañol_1 = _significados.SignificadoEspañol_1,
                                                 SignificadoEspañol_2 = _significados.SignificadoEspañol_2,
                                                 SignificadoEspañol_3 = _significados.SignificadoEspañol_3,
                                                 SignificadoEspañol_4 = _significados.SignificadoEspañol_4,
                                                 SignificadoEspañol_5 = _significados.SignificadoEspañol_5,
                                                 SignificadoEspañol_6 = _significados.SignificadoEspañol_6,
                                                 SignificadoEspañol_7 = _significados.SignificadoEspañol_7,
                                                 SignificadoEspañol_8 = _significados.SignificadoEspañol_8,
                                                 SignificadoEspañol_9 = _significados.SignificadoEspañol_9,
                                                 SignificadoEspañol_10 = _significados.SignificadoEspañol_10,
                                                 PalabraIngles = _palabrasIngles.PalabraIngles,
                                                 Pagina = _significados.Pagina //La pagina tambien no s ayudara a cargar el objeto Listado con la pagina que esta mostrado el listado (para poder luego retroceder y avanzar de pagina)                                                                                                  
                                             }).ToList();
                    #endregion                    
                    break;
            }
            //Tambien cargamos el ViewBag que contiene la cantidad de paginas para que se muestre en la vista
            ViewBag.cantidadPaginas = contexto.Significados.Max(x => x.Pagina);

            //Creamos un objeto de Listado que tendra cargado la propiedad Pagina (para evitar inconvenientes) con la pagina perteneciente al primer registro devuelto por el filtro
            Listado listadoFiltro = new Listado { Pagina = ViewBag.datosPalabras[0].Pagina };

            return View("Index", listadoFiltro);
        }

        //Cumple varias funciones, devolver un objeto de Listado con la pagina de palabras que se mostrara, obtener el numero de la ultima pagina y cargar una variable ViewBag con el listado de palabras de la pagina mostrada
        private Listado obtenerListadoPalabras()
        {
            //Creamos el objeto del modelo que sera enviado a la vista
            Listado _listado = new Listado
            {
                 Pagina = 1 ,
                PalabraIngles = ""//Se carga ya que es requerido por el modelo, pero en este caso no lo usaremos
            };

            //Evaluamos si la variable que tendra la cantidad de paginas ya a sido cargada con la cantidad de paginas
            if (ViewBag.cantidadPaginas == null)
            {
                //Obtenemos la cantidad de paginas registradas (para saber hasta cual es posible mostrar)
                ViewBag.cantidadPaginas = contexto.Significados.Max(x => x.Pagina);
                //Evaluamos si la cantidad de paginas es menor a 1 (ocurre cuando no hay paginas registradas), en ese caso asignamos como cantidad de paginas 1,
                if (ViewBag.cantidadPaginas < 1)
                    ViewBag.cantidadPaginas = 1;
            }

            //Evaluamos si el modelo ya fue instanciado. Solo no es instanciado cuando ingresa por primera vez al listado de palabras
            if (listado != null)
            {
                //Al estar instanciado el modelo cargamos el mismo al objeto creado con anterioridad ya que lo instanciado tiene la pagina la cual se debe mostrar
                _listado = listado;
            }

            //Obtenemos la pagina que va a ser mostrada
            int paginaMostrar = _listado.Pagina;

            //Obtenemos todos los datos relacionados a las palabras de la primera pagina dentro de un objeto de tipo Listado
            #region Query para obtener los datos para el listado
            ViewBag.datosPalabras = (from _palabrasIngles in contexto.PalabrasIngles
                                     join _significados in contexto.Significados
                                     on _palabrasIngles.IdPalabraIngles equals _significados.IdPalabraIngles
                                     where _significados.Pagina == paginaMostrar
                                     select new Listado
                                     {
                                             IdPalabraIngles = _significados.IdPalabraIngles,
                                             IdSignificados = _significados.IdSignificados,
                                             PalabraInglesPresente = _significados.PalabraInglesPresente,
                                             SignificadoEspañol_1 = _significados.SignificadoEspañol_1,
                                             SignificadoEspañol_2 = _significados.SignificadoEspañol_2,
                                             SignificadoEspañol_3 = _significados.SignificadoEspañol_3,
                                             SignificadoEspañol_4 = _significados.SignificadoEspañol_4,
                                             SignificadoEspañol_5 = _significados.SignificadoEspañol_5,
                                             SignificadoEspañol_6 = _significados.SignificadoEspañol_6,
                                             SignificadoEspañol_7 = _significados.SignificadoEspañol_7,
                                             SignificadoEspañol_8 = _significados.SignificadoEspañol_8,
                                             SignificadoEspañol_9 = _significados.SignificadoEspañol_9,
                                             SignificadoEspañol_10 = _significados.SignificadoEspañol_10,
                                             PalabraIngles = _palabrasIngles.PalabraIngles
                                     }).ToList();
            #endregion

            return (_listado);
        }

        //Registra una nueva palabra con sus significados en la base de datos
        private void registroDePalabra()
        {
            //Verificamos la cantidad de palabras en la ultima pagina primero obteniendo la ultima pagina
            int ultimaPagina = contexto.Significados.Max(x => x.Pagina);
            int cantidadPalabrasUltimaPagina = contexto.Significados.Where(x => x.Pagina == ultimaPagina).Count();

            //Verificamos que la cantidad de palabras en la ultima pagina sea menor a 10 para guardar la palabra en la ultima pagina
            if (cantidadPalabrasUltimaPagina < 10)
            {
                listado.Pagina = ultimaPagina;
            }
            //En caso de no ser menor a 10 (es decir la pagina esta completa) entonces creamos una nueva pagina en donde se guardara la palabra
            else
            {
                listado.Pagina = ultimaPagina + 1;
            }

            //Utilizamos el procedimiento almacenado que registra una nueva palabra

            SqlConnection conexion = new SqlConnection(configuracion.GetConnectionString("ConexionTraductorBD"));

            conexion.Open();

            SqlCommand comando = new SqlCommand("IngresarNuevaTraduccion", conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@palabraIngles", listado.PalabraIngles);
            comando.Parameters.AddWithValue("@palabraInglesPresente", listado.PalabraInglesPresente == null ? "" : listado.PalabraInglesPresente);
            comando.Parameters.AddWithValue("@significadoEspañol_1", listado.SignificadoEspañol_1 == null ? "" : listado.SignificadoEspañol_1);
            comando.Parameters.AddWithValue("@significadoEspañol_2", listado.SignificadoEspañol_2 == null ? "" : listado.SignificadoEspañol_2);
            comando.Parameters.AddWithValue("@significadoEspañol_3", listado.SignificadoEspañol_3 == null ? "" : listado.SignificadoEspañol_3);
            comando.Parameters.AddWithValue("@significadoEspañol_4", listado.SignificadoEspañol_4 == null ? "" : listado.SignificadoEspañol_4);
            comando.Parameters.AddWithValue("@significadoEspañol_5", listado.SignificadoEspañol_5 == null ? "" : listado.SignificadoEspañol_5);
            comando.Parameters.AddWithValue("@significadoEspañol_6", listado.SignificadoEspañol_6 == null ? "" : listado.SignificadoEspañol_6);
            comando.Parameters.AddWithValue("@significadoEspañol_7", listado.SignificadoEspañol_7 == null ? "" : listado.SignificadoEspañol_7);
            comando.Parameters.AddWithValue("@significadoEspañol_8", listado.SignificadoEspañol_8 == null ? "" : listado.SignificadoEspañol_8);
            comando.Parameters.AddWithValue("@significadoEspañol_9", listado.SignificadoEspañol_9 == null ? "" : listado.SignificadoEspañol_9);
            comando.Parameters.AddWithValue("@significadoEspañol_10", listado.SignificadoEspañol_10 == null ? "" : listado.SignificadoEspañol_10);
            comando.Parameters.AddWithValue("@pagina", listado.Pagina);

            comando.ExecuteNonQuery();

            conexion.Close();
        }

        //Actualiza una palabra con sus significados en la base de datos
        private void actualizacionDePalabra()
        {
            //Utilizamos el procedimiento almacenado que actualiza una nueva palabra

            SqlConnection conexion = new SqlConnection(configuracion.GetConnectionString("ConexionTraductorBD"));

            conexion.Open();

            SqlCommand comando = new SqlCommand("ActualizarTraduccion", conexion);
            comando.CommandType = System.Data.CommandType.StoredProcedure;
            comando.Parameters.AddWithValue("@palabraIngles", listado.PalabraIngles);
            comando.Parameters.AddWithValue("@palabraInglesPresente", listado.PalabraInglesPresente == null ? "" : listado.PalabraInglesPresente);
            comando.Parameters.AddWithValue("@significadoEspañol_1", listado.SignificadoEspañol_1 == null ? "" : listado.SignificadoEspañol_1);
            comando.Parameters.AddWithValue("@significadoEspañol_2", listado.SignificadoEspañol_2 == null ? "" : listado.SignificadoEspañol_2);
            comando.Parameters.AddWithValue("@significadoEspañol_3", listado.SignificadoEspañol_3 == null ? "" : listado.SignificadoEspañol_3);
            comando.Parameters.AddWithValue("@significadoEspañol_4", listado.SignificadoEspañol_4 == null ? "" : listado.SignificadoEspañol_4);
            comando.Parameters.AddWithValue("@significadoEspañol_5", listado.SignificadoEspañol_5 == null ? "" : listado.SignificadoEspañol_5);
            comando.Parameters.AddWithValue("@significadoEspañol_6", listado.SignificadoEspañol_6 == null ? "" : listado.SignificadoEspañol_6);
            comando.Parameters.AddWithValue("@significadoEspañol_7", listado.SignificadoEspañol_7 == null ? "" : listado.SignificadoEspañol_7);
            comando.Parameters.AddWithValue("@significadoEspañol_8", listado.SignificadoEspañol_8 == null ? "" : listado.SignificadoEspañol_8);
            comando.Parameters.AddWithValue("@significadoEspañol_9", listado.SignificadoEspañol_9 == null ? "" : listado.SignificadoEspañol_9);
            comando.Parameters.AddWithValue("@significadoEspañol_10", listado.SignificadoEspañol_10 == null ? "" : listado.SignificadoEspañol_10);
            comando.Parameters.AddWithValue("@idPalabraActualizar", listado.IdPalabraIngles);

            comando.ExecuteNonQuery();

            conexion.Close();
        }

        //Devuelve un booleano que indica si la PalabraIngles recibida por parametro existe
        private bool verificacionExistenciaPalabraIngles(string palabraInglesBuscada)
        {
            //Variable que indica si existe o no la palabra en ingles buscada
            bool verificado = true;

            //Obtenemos la palabra buscada
            var palabrasInglesBuscada = contexto.PalabrasIngles.Where(x => x.PalabraIngles == palabraInglesBuscada).ToList();

            //Verificamos si obtuvimos el registro con la palabra buscada
            if (palabrasInglesBuscada.Count == 0)
                //En caso de no encontrar la palabra lo señalamos por medio de la variable
                verificado = false;

            return verificado;
        }
    }
}
