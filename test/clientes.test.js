//  ATENÇÃO, PARA FUNCIONAR CADA TESTE, VOCÊ DEVE ESCOLHER QUAL TESTE VOCÊ QUER FAZER E DEPOIS DEIXAR OS OUTROS COMENTADO. POR EXEMPLO, QUERO CRIAR UM CLIENTE, EU DEIXO ELE N0RMAL FUNCIONANDO E O RESTO DO CODIGO COMENTADO. 

const request = require('supertest')
const app = require('../index')

// describe('GET /clientes/', () =>{
//     it('pegar a lista de clientes com sucesso', async () => {
//         const res = await request(app).get('/clientes').send();
//         console.log(res.body)
//         expect(res.status).toBe(200);
    
// });})
// it('verificar se a lista de clientes está cheia', async() =>{
//     const res = await request (app).get('/clientes').send();
//     expect(res.body.toBefined);
// }); 


// describe('Criar /clientes', () => {
//     it('criar cliente com sucesso', async() => {
//         const res = await request(app).post('/clientes').send(
//             {
//                 nome:' ',
//                 email:' ',
//                 senha:' ',
//             }
//             );
//             expect(res.status).toBe(204)
//     });
// })

// describe('atualizar /clientes/:id', () => {
//     it('atualizar nome do cliente com sucesso', async () => {
//         const res = await request(app).post('/clientes/').send(
//             {
//                 nome:' '
//             })
//             expect(res.status).toBe(200)
//     })
// } )

// describe('excluir/clientes/:id', () => {
//     it('excluir nome do cliente com sucesso', async () => {
//         const res = await request(app).delete('/clientes/').send(
//             {
//                 nome:' '
//             })
//             expect(res.status).toBe(204)
//     })
// } )