const alunos = [
{nome: 'Ana', nota: 5.5},
{nome: 'Carlos', nota: 7.0},
{nome: 'João', nota: 6.0},
{nome: 'Maria', nota: 4.5},
{nome: 'José', nota: 8.0},

];

function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6); 
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);