/* 
1. Escreva uma função que calcule e retorne o fatorial de um número.
2. Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.
3. Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.
4. Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice.
5. Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro.
6. Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).
7. Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso.
8. Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos.
9. Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista.
10. Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros.
*/

// 1 - Fatorial
function fatorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// 2 - Sequência de mensagens
function sequenciaMensagens(n, mensagem) {
    let sequencia = "";
    for (let i = 0; i < n; i++) {
        sequencia += mensagem + "\n";
    }
    return sequencia;
}

// 3 - Operações básicas
function operacoesBasicas(valor1, valor2, operacao) {
    switch (operacao) {
        case "+":
            return valor1 + valor2;
        case "-":
            return valor1 - valor2;
        case "*":
            return valor1 * valor2;
        case "/":
            if (valor2 == 0) {
                return null;
            } else {
                return valor1 / valor2;
            }
        default:
            return null;
    }
}

// 4 - Tabuada
function tabuada(n) {
    let vetor = [];
    for (let i = 1; i <= 10; i++) {
        vetor.push(n * i);
    }
    return vetor;
}

// 5 - Número invertido
function numeroInvertido(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

// 6 - Contar vogais
function contarVogais(string) {
    let vogais = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i])) {
            contador++;
        }
    }
    return contador;
}

// 7 - Parênteses e colchetes
function sequenciaBemFormada(sequencia) {
    let pilha = [];
    for (let i = 0; i < sequencia.length; i++) {
        if (sequencia[i] == "(" || sequencia[i] == "[") {
            pilha.push(sequencia[i]);
        } else {
            if (pilha.length == 0) {
                return false;
            } else {
                let topo = pilha.pop();
                if ((topo == "(" && sequencia[i] != ")") || (topo == "[" && sequencia[i] != "]")) {
                    return false;
                }
            }
        }
    }
    return pilha.length == 0;
}

// 8 - Lista de objetos
function listaObjetos(n) {
    let nomes = ["João", "Maria", "José", "Ana", "Pedro", "Mariana", "Carlos", "Luísa", "Antônio", "Fernanda"];
    let lista = [];
    for (let i = 0; i < n; i++) {
        lista.push({ id: i + 1, nome: nomes[Math.floor(Math.random() * nomes.length)], idade: Math.floor(Math.random() * 73) + 18 });
    }
    return lista;
}

// 9 - Média de idades
function mediaIdades(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i].idade;
    }
    return soma / lista.length;
}

// 10 - Ordenar por atributo
function ordenarPorAtributo(lista, atributo) {
    return lista.sort((a, b) => a[atributo] > b[atributo] ? 1 : -1);
}