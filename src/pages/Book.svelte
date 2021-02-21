<script>
  import Select from '../form/Select.svelte'

  let grades = [
    {
      optgroup: {
        label: 'Primaria',
        options: [
          { value: 'p1', label: 'Primero'},
          { value: 'p2', label: 'Segundo'},
          { value: 'p3', label: 'Tercero'},
          { value: 'p4', label: 'Cuarto'},
          { value: 'p5', label: 'Quinto'},
          { value: 'p6', label: 'Sexto'}
        ]
      }
    },
    {
      optgroup: {
        label: 'Secundaria',
        options: [
          { value: 's1', label: 'Primero'},
          { value: 's2', label: 'Segundo'},
          { value: 's3', label: 'Tercero'},
          { value: 's4', label: 'Cuarto'}
        ]
      }
    },
    {
      optgroup: {
        label: 'Bachillerato',
        options: [
          { value: 'b1', label: 'Primero'},
          { value: 'b2', label: 'Segundo'}
        ]
      }
    }
  ]

  let subjects = [
    { value: 'mat', label: 'Matemáticas' },
    { value: 'cas', label: 'Lengua Castellana' },
    { value: 'cat', label: 'Lengua Catalana' },
    { value: 'soc', label: 'Ciencias Sociales' }
  ]
</script>

<div class="container-md mt-2" style="max-width: 800px">
  <h1>Reserva de libros</h1>

  <form>
    <div class="mb-3">
      <label for="grade" class="form-label">Curso</label>
      <Select options={grades} prompt="Seleccione Curso" />
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">Asignatura</label>
      <Select options={subjects} prompt="Seleccione asignatura" />
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
