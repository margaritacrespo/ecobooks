<script>
    import * as books from './books'

    let bookList = []
    let level = '?'
    let m = location.hash.match(/[a-z]+/)
    if (m) {
        level = m[0]
        bookList = books[level]
    }
</script>

<div class="container-md mt-2" style="max-width: 1000px">
    <h2>Libros de {level}</h2>
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
            {#each bookList as book}
            <tr>
                <td>{book.grade}</td>
                <td>{book.subject}</td>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
