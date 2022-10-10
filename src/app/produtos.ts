export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Pirâmide de Lapis-Lazuli", preco: 150.00, descricaoPreco: "À vista no PIX", imagem: "./assets/23.PNG", quantidadeEstoque:10 },
    { id: 2, descricao: "Esfera de Lapis-Lazuli", preco: 125.00, descricaoPreco: "À vista no PIX", imagem: "./assets/24.png", quantidadeEstoque:10 },
    { id: 3, descricao: "Pendulo de Lapis-Lazuli", preco: 165.00, descricaoPreco: "À vista no PIX", imagem: "./assets/25.png",quantidadeEstoque:10 },
    { id: 4, descricao: "Quartzo verde - 500 g.", preco: 20.00, descricaoPreco: "À vista no PIX", imagem: "./assets/30.png", quantidadeEstoque:10 },
    { id: 5, descricao: "Pendulo de Quartzo verde", preco: 165.00, descricaoPreco: "À vista no PIX", imagem: "./assets/31.png", quantidadeEstoque:10 },
    { id: 6, descricao: "Drusa de Ametista", preco: 250.00, descricaoPreco: "À vista no PIX", imagem: "./assets/32.png", quantidadeEstoque:10 },
    { id: 7, descricao: "Esfera de Ametista", preco: 125.00, descricaoPreco: "À vista no PIX", imagem: "./assets/33.png", quantidadeEstoque:10 },
    { id: 8, descricao: "Ponta de Ametista", preco: 175.00, descricaoPreco: "À vista no PIX", imagem: "./assets/34.png", quantidadeEstoque:10 },
    { id: 9, descricao: "Ponta de Fluorita", preco: 175.00, descricaoPreco: "À vista no PIX", imagem: "./assets/38.png", quantidadeEstoque:10 },
    { id: 10, descricao: "Esferas de Quartzo", preco: 125.00, descricaoPreco: "À vista no PIX", imagem: "./assets/39.png", quantidadeEstoque:10 },
    { id: 11, descricao: "Drusa de Quartzo fumê", preco: 250.00, descricaoPreco: "À vista no PIX", imagem: "./assets/40.png", quantidadeEstoque:10 },
    { id: 12, descricao: "Sodalita rolada - 500g", preco: 30.00, descricaoPreco: "À vista no PIX", imagem: "./assets/41.png", quantidadeEstoque:10 },
    { id: 13, descricao: "Quartzo rosa - 500g", preco: 25.00, descricaoPreco: "À vista no PIX", imagem: "./assets/46.png", quantidadeEstoque:10 },
    { id: 14, descricao: "Ponta de quartzo", preco: 175.00, descricaoPreco: "À vista no PIX", imagem: "./assets/43.png", quantidadeEstoque:10 },
    { id: 15, descricao: "Lapis-Lazule Bruta - unidade", preco: 10.00, descricaoPreco: "À vista no PIX", imagem: "./assets/26.png", quantidadeEstoque:10 },
]
