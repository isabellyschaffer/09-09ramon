// ATENÇÃO, PARA FUNCIONAR CADA TESTE, VOCÊ DEVE ESCOLHER QUAL TESTE VOCÊ QUER FAZER E DEPOIS DEIXAR OS OUTROS COMENTADO. POR EXEMPLO, QUERO CRIAR UM PRODUTO, EU DEIXO ELE NO0RMAL FUNCIONANDO E O RESTO DO CODIGO COMENTADO. 

const request = require('supertest')
const app = require('../index')

// describe('GET /produtos/ea81c217-8473-4887-bb9b-631b70b30a9b', () =>{
//     it('pegar a lista de produtos com sucesso', async () => {
//         const res = await request(app).get('/produtos').send();
//         console.log(res.body)
//         expect(res.status).toBe(200);
    
// });})
// it('verificar se a lista de produtos está cheia', async() =>{
//     const res = await request (app).get('/produtos').send();
//     expect(res.body.toBefined);
// }); 


// describe('Criar /produtos', () => {
//     it('criar produto com sucesso', async() => {
//         const res = await request(app).post('/produtos').send(
//             {
                
//             nome: ' ',
//             descricao: ' ',
//             preco: ' ',
//             imagem: ' ',
//             }
//             );
//             expect(res.status).toBe(204)
//     });
// })

// describe('atualizar /produtos/:id', () => {
//     it('atualizar nome do produto com sucesso', async () => {
//         const res = await request(app).post('/produtos/').send(
//             {
//                 nome:''
//             })
//             expect(res.status).toBe(200)
//     })
// } )

// describe('excluir/produtos/:id', () => {
//     it('excluir nome do produto com sucesso', async () => {
//         const res = await request(app).delete('/produtos/').send(
//             {
//                 nome:''
//             })
//             expect(res.status).toBe(204)
//     })
// })
