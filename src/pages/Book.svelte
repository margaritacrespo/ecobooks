<script>
  import Select from '../form/Select.svelte'

  let grades = [
    {
      optgroup: {
        label: 'Primaria',
        options: [
          { value: 'p1', label: 'Primero de primaria'},
          { value: 'p2', label: 'Segundo de primaria'},
          { value: 'p3', label: 'Tercero de primaria'},
          { value: 'p4', label: 'Cuarto de primaria'},
          { value: 'p5', label: 'Quinto de primaria'},
          { value: 'p6', label: 'Sexto de primaria'}
        ]
      }
    },
    {
      optgroup: {
        label: 'Secundaria',
        options: [
          { value: 's1', label: 'Primero de secundaria'},
          { value: 's2', label: 'Segundo de secundaria'},
          { value: 's3', label: 'Tercero de secundaria'},
          { value: 's4', label: 'Cuarto de secundaria'}
        ]
      }
    },
    {
      optgroup: {
        label: 'Bachillerato',
        options: [
          { value: 'b1', label: 'Primero de bachillerato'},
          { value: 'b2', label: 'Segundo de bachillerato'}
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

  let books = [
    { value: 'b1', label: 'Don Quijote de La Mancha' },
    { value: 'b2', label: 'Lorem Ipsum' }
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
      <Select options={books} prompt="Seleccione libro" />
    </div>
    <div class="mt-4">
      <button type="submit" class="btn btn-primary">Reservar</button>
    </div>
  </form>

</div>
