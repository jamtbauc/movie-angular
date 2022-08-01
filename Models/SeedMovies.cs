using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MovieAngular.Models;
using System;
using System.Linq;

namespace MovieAngular.Models
{
    public static class SeedMovies
    {
        public static void Initialize(IServiceProvider sp)
        {
            using (var context = new MovieContext(sp.GetRequiredService<DbContextOptions<MovieContext>>()))
            {
                context.Database.EnsureCreated();
                
                // If database is not empty then don't seed.
                if (context.Movies.Any())
                {
                    return;
                }

                context.Movies.AddRange(
                    new Movie{
                        Name = "The Dark Knight",
                        HaveWatched = true
                    },

                    new Movie{
                        Name = "Star Wars Episdode V - The Empire Strikes Back",
                        HaveWatched = false
                    },

                    new Movie{
                        Name = "The Usual Suspects",
                        HaveWatched = true
                    },

                    new Movie{
                        Name = "Star Trek: The Wrath of Khan",
                        HaveWatched = false
                    }
                );
                context.SaveChanges();
            }
        }
    }
}