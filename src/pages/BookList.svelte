<script>
    import { primaria, secundaria } from './books'
</script>


<div class="container-md mt-2" style="max-width: 900px">

    <h1>Instrucciones</h1>
    <p>
        Enviar un e-mail a
        <a href="mailto:ecobooksaulaee@gmail.com">ecobooksaulaee@gmail.com</a>
        con:
    </p>
    <ul>
        <li>Nombre y apellidos</li>
        <li>e-mail</li>
        <li>Lista de números ISBN de los libros a solicitar</li>
    </ul>
    <p>
        En el plazo de 24 horas le enviaremos una respuesta, indicando
        qué libros se han reservado a su nombre. Es posible que
        no todos los libros listados estén disponibles.
    </p>

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

    <h2 class="mt-4">Libros de secundaria</h2>
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
