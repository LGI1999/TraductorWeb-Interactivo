using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TraductorWeb.Models.CustomModels
{
    //Modelo que tendra el formato de datos que se muestra en el listado de palabras (la palabra a traducir, su forma en presente y sus significados en español). Ademas de datos necesarios para utilizar el filtro en el controlador
    public class Listado
    {
        [Key, Required]
        public int IdSignificados { get; set; }

        [Required]
        public int IdPalabraIngles { get; set; }

        [Required(ErrorMessage = "Ingrese la palabra a traducir")]
        [RegularExpression("^[a-zA-Z ]*$", ErrorMessage = "Solo se permiten letras (tampoco con acentos)")]//Permite solo letras en mayusculas y minusculas y espacios en blanco
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string PalabraIngles { get; set; }
        
        [RegularExpression("^[a-zA-Z ]*$", ErrorMessage = "Solo se permiten letras (tampoco con acentos)")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string PalabraInglesPresente { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]//Permite solo letras en mayusculas y minusculas(incluyendo su variaciones con acento) y espacios en blanco
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_1 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_2 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_3 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_4 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_5 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_6 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_7 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_8 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_9 { get; set; }

        [RegularExpression("^[a-zA-Z áéíóúÁÉÍÓÚ]*$", ErrorMessage = "Solo se permiten letras")]
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string SignificadoEspañol_10 { get; set; }

        [Required]
        public int Pagina { get; set; }

        public Filtro datosFiltro { get; set; }
    }
}
