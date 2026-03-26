//Grafo con liste di adiacenza
let gl = {
    0: [1,2],
    1: [],
    2: [1,3,4],
    3: [4],
    4: [1]
}

//Grafo con matrice di adiacenza
let gm = [
    [0,1,1,0,0],
    [0,0,0,0,0],
    [0,1,0,1,1],
    [0,0,0,0,1],
    [0,1,0,0,0]
]

function bidirezionaleGL(gl, i, j) {
    return gl[i].includes(j) && gl[j].includes(i) //includes si usa come contains per gli array
}

function bidirezionaleGM(gl, i, j) {
    return gm[i][j] && gm[j][i]
}
