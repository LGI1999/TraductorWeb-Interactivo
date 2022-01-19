using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TraductorWeb.Models
{
    public class Significados
    {
        [Key]
        public int IdSignificados { get; set; }

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

        [ForeignKey("PalabrasIngles")]
        public int IdPalabraIngles { get; set; }

        public virtual PalabrasIngles PalabrasIngles { get; set; }
    }
}
