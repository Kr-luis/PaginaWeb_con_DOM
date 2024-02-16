function addProject() {
  var titulo = document.getElementById('titulo').value;
  var Ubicacion = document.getElementById('Ubicacion').value;
  var Etiquetas = document.getElementById('Etiquetas').value;
  var Descripcion = document.getElementById('Descripcion').value;
  var Codigo = document.getElementById('Codigo').value; // Nuevo campo de código

  var evento = {
      titulo: titulo,
      Ubicacion: Ubicacion,
      Etiquetas: Etiquetas,
      Descripcion: Descripcion,
      Codigo: Codigo // Agregar el código al objeto evento
  };

  // Obtener eventos existentes del localStorage o inicializar un array vacío si no hay ninguno
  var eventos = JSON.parse(localStorage.getItem('eventos')) || [];

  // Agregar el nuevo evento al array de eventos
  eventos.push(evento);

  // Guardar el array de eventos actualizado en el localStorage
  localStorage.setItem('eventos', JSON.stringify(eventos));

  // Actualizar la lista de eventos en la página
  displayEventos();
}

function displayEventos() {
  var eventos = JSON.parse(localStorage.getItem('eventos')) || [];

  var projectList = document.getElementById('projectList');
  projectList.innerHTML = ''; // Limpiar la lista antes de agregar los eventos

  eventos.forEach(function(evento) {
      var projectElement = document.createElement('div');
      projectElement.className = 'col-md-4';
      projectElement.innerHTML = `
          <div class="card mb-4">
              <div class="card-body">
                  <h5 class="card-title">${evento.titulo}</h5>
                  <p class="card-text">Ubicacion: ${evento.Ubicacion}</p>
                  <p class="card-text">Etiquetas: ${evento.Etiquetas}</p>
                  <p class="card-text">Descripcion: ${evento.Descripcion}</p>
                  <p class="card-text">Código: ${evento.Codigo}</p> <!-- Mostrar el código -->
                  <a href="comentarios.html" class="btn btn-primary" target="_blank">Añadir al carrito</a>
                  <a href="carrito.html" class="btn btn-primary" target="_blank">Comentarios</a>
              </div>
          </div>
      `;
      projectList.appendChild(projectElement);
  });
}

// Llamar a la función para mostrar los eventos cuando la página se cargue
displayEventos();

