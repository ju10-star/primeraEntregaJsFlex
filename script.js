const canciones = [];

function mostrarCanciones() {
  const contenedor = document.getElementById("lista-canciones");
  contenedor.innerHTML = "<h2>Todas las canciones:</h2>";

  /* if (canciones.length === 0) {
    contenedor.innerHTML += "<p>No hay canciones en la lista.</p>";
    return;
  } */

  let html = "<ul>";
  for (let i = 0; i < canciones.length; i++) {
    const c = canciones[i];
    html += `<li><strong>${c.titulo}</strong> - ${c.artista} [${c.genero}]</li>`;
  }
  html += "</ul>";

  contenedor.innerHTML += html;
}

function agregarCancion() {
  const titulo = prompt("Titulo de la canción:");
  const artista = prompt("Artista:");
  const genero = prompt("Género:");

  if (titulo && artista && genero) {
    canciones.push({ titulo, artista, genero });
    alert("Cancion agregada con exito.");
    mostrarCanciones();
  } else {
    alert("Por favor, completa todos los campos.");
  }
}


function filtrarCanciones() {
  const criterio = prompt("filtrar por 'genero' o 'artista'").toLowerCase();

  if (criterio !== "genero" && criterio !== "artista") {
    alert("El criterio no condice con los atributos del objeto. Escribí 'genero' o 'artista'.");
    return;
  }

  const valor = prompt(`Ingresá el ${criterio}: `).toLowerCase();

  const contenedor = document.getElementById("lista-canciones");
  contenedor.innerHTML = `<h2>Resultados de filtrado por ${criterio}: ${valor}</h2>`;

  let resultados = [];

  let i = 0;
  while (i < canciones.length) {
    const c = canciones[i];

    if (
      (criterio === "genero" && c.genero.toLowerCase() === valor) ||
      (criterio === "artista" && c.artista.toLowerCase().includes(valor))
    ) {
      resultados.push(c);
    }
    i++;
  }

  if (resultados.length === 0) {
    contenedor.innerHTML += "<p>No existen coincidencias con tu búsqueda.</p>";
    return;
  }

  let html = "<ul>";
  for (let j = 0; j < resultados.length; j++) {
    const c = resultados[j];
    html += `<li><strong>${c.titulo}</strong> - ${c.artista} [${c.genero}]</li>`;
  }
  html += "</ul>";
  contenedor.innerHTML += html;
}
