function addSkill() {

    var titulo = document.getElementById('titulo').value;
    var opinion = document.getElementById('opinion').value;
    var link = document.getElementById('link').value;
  
    var comentario = document.createElement('div');
    comentario.className = 'col-md-4';
    comentario.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${opinion}</h5>
          <p class="card-text">${titulo}</p>
          <a href="${link}" class="btn btn-primary" target="_blank">Ver Evento</a>
        </div>
      </div>
    `;
    document.getElementById('comentarios_lista').appendChild(comentario);
    
    document.getElementById('comentarios_form').reset();
  }
