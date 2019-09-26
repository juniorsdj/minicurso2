

const lista = () => {
    fetch('http://localhost:3000/livros', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response =>
            response.json().then(r => console.log(r)))
        .catch(response => console.log(response))
}



const enviarLivro = (livro) => {
    fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    })
        .then(response =>
            response.json().then(r => console.log(r)))
        .catch(response => console.log(response))
}


const livroById = (id) => {
    fetch(`http://localhost:3000/livros/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(response =>
            response.json().then(r => console.log(r)))
        .catch(response => console.log(response))
}
const alterarById = (id, newLivro) => {
    fetch(`http://localhost:3000/livros/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLivro),
    })
        .then(response =>
            response.json().then(r => console.log(r)))
        .catch(response => console.log(response))
}
const deletarById = (id) => {
    fetch(`http://localhost:3000/livros/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, d
    })
        .then(response =>
            response.json().then(r => console.log(r)))
        .catch(response => console.log(response))
}