let movies = [
    {
        name: "LEO",
        poster: "https://m.media-amazon.com/images/M/MV5BMDk0ZmVmMTktOGNiNS00Yzg5LWIzZTAtNjUxZWZhZDljY2Y0XkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_FMjpg_UX1000_.jpg",
        rating: 7.8
    },
    {
        name: "PUSHPA",
        poster: "https://m.media-amazon.com/images/M/MV5BZjA4ZDJmNmQtZTA4NS00NzhmLTg2ODktZjg3MDliZmUzYTZmXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
        rating: 9
    },
    {
        name: "JAILER",
        poster: "https://m.media-amazon.com/images/M/MV5BNDA5YzlhNjItMDgxNC00MjQ4LWIzMDMtYTUyMzBhNjViNDk3XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
        rating: 8
    },
    {
        name: "KANTARA",
        poster: "https://m.media-amazon.com/images/M/MV5BNjEzNDViNmEtYTczYi00NjkyLTgyZGItY2M1YWMwZGJlMjE3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        rating: 9.5
    },
    {
        name: "BHAHUBALI",
        poster: "https://m.media-amazon.com/images/M/MV5BMmM3ODk3MDgtZjQwZi00Y2ZhLTg0YTItMTJiNmNjNzRkYmQ4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_FMjpg_UX1000_.jpg",
        rating: 9.8
    },
    {
        name: "RRR",
        poster: "https://m.media-amazon.com/images/M/MV5BYjcyNDNkMzMtNWVjOC00ZTdjLTg1YTAtODMzMjMzZjJlNzEzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
        rating: 9.4
    },
    {
        name: "JAWAN",
        poster: "https://m.media-amazon.com/images/M/MV5BMjlkZTg4NzktYzg2ZC00YjUxLThmOWYtMzc1NzBjMDNjNTEwXkEyXkFqcGdeQXVyMTU0ODI1NTA2._V1_.jpg",
        rating: 9
    },
    {
        name: "PATHAAN",
        poster: "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/image-877.png?size=*:900",
        rating: 9.2
    },
    {
        name: "SALAAR",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MzODZiYmQtY2UwMi00ODQwLTgwMmItMmEyOWU3OTg0N2VhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        rating: 9.9
    },
    {
        name: "ANIMAL",
        poster: "https://m.media-amazon.com/images/M/MV5BMDQwOTI3NTMtZjA0My00M2E3LThmODUtODdiNTQ3ZjNiNGE3XkEyXkFqcGdeQXVyNTM2NTg3Nzg@._V1_.jpg",
        rating: 9.99
    },
    {
        name: "KALKI",
        poster: "https://m.media-amazon.com/images/M/MV5BOTlhMWI0NmUtZTRkYi00NGY5LWI3NWUtZTg3NTk2OWRlYTRmXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
        rating: 9.95
    },
    {
        name: "KGF 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMjI2Njg2Y2EtZjgwMC00ZGVkLWJmMWYtYjVhYjk2ZTkwNWE1XkEyXkFqcGdeQXVyMTMxMjA5NDU1._V1_.jpg",
        rating: 9.97
    },
    {
        name: "MAD",
        poster: "https://m.media-amazon.com/images/M/MV5BMjYyNjE2MDQtYTZjMi00MzJjLWFlYTgtMDBmMjQyOWM0ZTUyXkEyXkFqcGdeQXVyMTQ3NTE2ODIx._V1_FMjpg_UX1000_.jpg",
        rating: 9
    },
    {
        name: "BHAGVATH KESARE",
        poster: "https://m.media-amazon.com/images/M/MV5BMTEwYjcxZmMtMDQxOS00YmUxLWI5ZDEtNDNlYzMzZmEwYzRkXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_.jpg",
        rating: 7.6
    },
    {
        name: "DUNKI",
        poster: "https://m.media-amazon.com/images/M/MV5BM2U0Njc4Y2YtOTFiOS00NTk5LTljYTctMzZhZGI3OWEyMzZlXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        rating: 9.5
    },

    {
        name: "TIGER 3",
        poster: "https://m.media-amazon.com/images/M/MV5BZDAzNWExODMtOGI1ZS00NzI4LWEzMDUtYWU1YTNhM2M2YzU4XkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg",
        rating: 9.5
    },
    {
        name: "GANAPATH",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYzN2RiZDMtOWQ2YS00YmVkLTk3NmYtZWU4NTBkNWMwZGNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        rating: 8.9
    },
    {
        name: "GUNTURU KAARAM",
        poster: "https://m.media-amazon.com/images/M/MV5BMjU4NDk1YTUtZTM4Ny00MjE5LWExMTItN2FhNDU5ZDM2YTk1XkEyXkFqcGdeQXVyMTE5NTEyNTg5._V1_.jpg",
        rating: 9.6
    },
    {
        name: "TILLU 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMjgzNzU5MmQtOWI3Yi00OWU2LWI0MmItNThjOTdlYzU0ZmNlXkEyXkFqcGdeQXVyMTIyMjMzODUx._V1_.jpg",
        rating: 9.5
    },
    {
        name: "USTAAD BHAGATH SINGH",
        poster: "https://m.media-amazon.com/images/M/MV5BY2NmYmJmNDAtYzY5ZC00YmRmLWI2MGQtOGEzZDY2MjNlOWVjXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
        rating: 9.6
    }
];


function showMovies(data) {

    let hs = ``;
    for (i = 0; i < data.length; i++) {
        hs = hs + `
          
            <div class="card d-flex mt-5 me-5 sm-me-6 bg-secondary text-light positon-relative" style="width: 220px;height:300px">
            <div id="hover-op" class="position-absolute bg-dark h-100 w-100 opacity-0 hover-opacity">
            <div class="card-body">
            <p class="card-text fs-2 ">${data[i].name}</p>
            <br/> 
           
            <p class="card-text fs-3"> Rating : ${data[i].rating}</p>
          </div>
            
            </div>
            
           
             <img src="${data[i].poster}" class="p-1  rounded card-img-top img-fluid h-100 "  alt="...">
        
          </div>
            
          `;
    }
    document.getElementById("con").innerHTML = hs;

}

showMovies(movies);




function searchMovie() {

    let movieName = document.getElementById('search').value;
    if (movieName !== "") {
        if (movieName.length == 1) {
            let result = movies.filter(function (movies) {

                return movies.name.toUpperCase()[0] == (movieName.toUpperCase())[0];

            });
            showMovies(result);
        }
        else {
            let result = movies.filter(function (movies) {
                if (movies.name.toUpperCase()[0] == (movieName.toUpperCase())[0]) {
                    return movies.name.toUpperCase().includes(movieName.toUpperCase());

                }

            });
            showMovies(result);

        }


    }

    else {
        showMovies(movies);
    }


}