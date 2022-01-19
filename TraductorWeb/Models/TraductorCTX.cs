using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TraductorWeb.Models
{
    public class TraductorCTX : DbContext
    {
        public TraductorCTX(DbContextOptions<TraductorCTX> options) : base(options) 
        {

        }

        public DbSet<PalabrasIngles> PalabrasIngles { get; set; }

        public DbSet<Significados> Significados { get; set; }
    }
}
