<script>
    import { secundaria } from './books'
</script>

<div class="container-md mt-2" style="max-width: 1000px">
    <h2>Libros de secundaria</h2>
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
            {#each secundaria as bsec}
            <tr>
                <td>{bsec.grade}</td>
                <td>{bsec.subject}</td>
                <td>{bsec.title}</td>
                <td>{bsec.isbn}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
