// crear la clase Banda aquí

class Banda {

    members: string[];  //array de strings 
    albums: { title: string; songs: string[] }[]; // un array de objetos con esta estructura: { title, songs:(array de strings) }
  
    constructor(members: string[], albums: { title: string; songs: string[] }[]) {
      this.members = members;
      this.albums = albums;
    }

    getFirstAlbum(): { title: string; songs: string[] } {
      return this.albums[0];  //  retorna el primer álbum de la banda señalada.
    }

    getAllAlbums(): { title: string; songs: string[] }[] {
      return this.albums; // retorna todos los álbumes de la banda señalada.
    }

    getAllMembers(): string []  {
       return this.members// retorna todos los álbumes de la banda señalada.
    }

    getRandomSong(albumTitle: string): string {
      const album = this.albums.find(album => album.title === albumTitle); // Busca el álbum por título
      if (album) {
          const randomIndex = Math.floor(Math.random() * album.songs.length); // Genera un índice aleatorio
          return album.songs[randomIndex]; // Retorna la canción aleatoria
      } else {
          return "Álbum no encontrado";
      }
  }
  
  }


// ----------------------------- no modificar este test ------------------------------------//
function testClaseBanda() {
  const members = ["dana", "pau"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
}

function main() {
  testClaseBanda();
}

main();