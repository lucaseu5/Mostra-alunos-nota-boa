class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

class GestorDeAlunos {
    constructor() {
        this.alunos = [];
    }


    adicionarAluno(nome, nota) {
        const aluno = new Aluno(nome, nota);
        this.alunos.push(aluno);
    }

    alunosAprovados() {
        return this.alunos.filter(aluno => aluno.nota >= 6);
    }
}

const gestor = new GestorDeAlunos();


gestor.adicionarAluno('Rodrigo', 8);
gestor.adicionarAluno('Beatriz', 5);
gestor.adicionarAluno('Jordana', 7);
gestor.adicionarAluno('Pedro', 4);
gestor.adicionarAluno('Lucas', 6);


const aprovados = gestor.alunosAprovados();
console.log(aprovados);