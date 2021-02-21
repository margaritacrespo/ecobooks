<script>
  import Select from '../form/Select.svelte'
  import { grades, subjects } from './book-options'
  
  const books = [
    { value: 'b1', label: 'Don Quijote de La Mancha' },
    { value: 'b2', label: 'Lorem Ipsum' }
  ]

  let grade = null
  let subject = null
  let bookId = null

  $: butDisabled = !grade || !subject || !bookId

</script>

<div class="container-md mt-2" style="max-width: 800px">
  <h1>Reserva de libros</h1>

  <form>
    <div class="mb-3">
      <label for="grade" class="form-label">Curso</label>
      <Select
        options={grades}
        prompt="Seleccione Curso"
        bind:value={grade}
      />
    </div>
    <div class="mb-3">
      <label for="subject" class="form-label">Asignatura</label>
      <Select
        options={subjects}
        prompt="Seleccione asignatura"
        bind:value={subject}
      />
    </div>
    <div class="mb-3">
      <label for="book" class="form-label">Libro</label>
      <Select
        options={books}
        prompt="Seleccione libro"
        bind:value={bookId}
      />
    </div>
    <div class="mt-4">
      <button type="submit" class="btn btn-primary" disabled={butDisabled}>
        Reservar
      </button>
    </div>
  </form>

</div>
