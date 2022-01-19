using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TraductorWeb.Models.CustomModels
{
    //Este modelo tendra todos los atributos necesarios para poder enviar los datos del filtro hacia el controlador
    public class Filtro
    {
        //Indice que señala que tipo de filtro se selecciono
        public int indiceTipoFiltro { get; set; }

        //Caracteres que se ingresan en el filtro, mas precisamente en el input de tipo text
        public string filtro { get; set; }
    }
}
