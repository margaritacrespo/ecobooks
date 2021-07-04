<script>
    import { primaria } from './books'
</script>

<div class="container-md mt-2" style="max-width: 1000px">
    <h2>Libros de primaria</h2>
    <table class="table">
        <thead>
            <tr>
                <th>Curso</th>
                <th>Asignatura</th>
                <th>Título</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody>
            {#each primaria as bprim}
            <tr>
                <td>{bprim.grade}</td>
                <td>{bprim.subject}</td>
                <td>{bprim.title}</td>
                <td>{bprim.isbn}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
