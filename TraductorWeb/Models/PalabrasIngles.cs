using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TraductorWeb.Models
{
    public class PalabrasIngles
    {
        [Key]
        public int IdPalabraIngles { get; set; }

        [Required(ErrorMessage = "Ingrese la palabra a traducir")]
        [RegularExpression("^[a-zA-Z ]*$", ErrorMessage = "Solo se permiten letras (tampoco con acentos)")]//Permite solo letras en mayusculas y minusculas y espacios en blanco
        [MaxLength(80, ErrorMessage = "No puede ingresar mas de 80 caracteres")]
        public string PalabraIngles { get; set; }

        public virtual ICollection<Significados> Significados { get; set; }
    }
}
