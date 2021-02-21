<div class="container-md mt-2" style="max-width: 800px">
  <h1>Reserva de libros</h1>

  <form>
    <div class="mb-3">
      <label for="grade" class="form-label">Curso</label>
      <select class="form-select">
        <option selected disabled>Seleccione curso</option>
        <optgroup label="Primaria">
          <option value="p1">Primero</option>
          <option value="p2">Segundo</option>
          <option value="p3">Tercero</option>
          <option value="p4">Cuarto</option>
          <option value="p5">Quinto</option>
          <option value="p6">Sexto</option>
        </optgroup>
        <optgroup label="Secundaria">
          <option value="s1">Primero</option>
          <option value="s2">Segundo</option>
          <option value="s3">Tercero</option>
          <option value="s4">Cuarto</option>
        </optgroup>
        <optgroup label="Bachillerrato">
          <option value="b1">Primero</option>
          <option value="b2">Segundo</option>
        </optgroup>
      </select>
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">Asignatura</label>
      <select class="form-select">
        <option selected disabled>Seleccione asignatura</option>
        <option value="1">Matemáticas</option>
        <option value="2">Física</option>
        <option value="3">Química</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="book" class="form-label">Libro</label>
      <select class="form-select">
        <option selected disabled>Seleccione libro</option>
        <option value="1">Don Quijote de La Mancha</option>
        <option value="2">Lorem ipsum</option>
      </select>
    </div>
    <div class="mt-4">
      <button type="submit" class="btn btn-primary">Reservar</button>
    </div>
  </form>



</div>
