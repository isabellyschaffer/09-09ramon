// enviar pro servidor req, enviar pro cliente res
const db = require('../db.json')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const login = (req, res) => {
    try {
        const { email, senha } = req.body;
        const lista_clientes = db.clientes
        if (!email || !senha) {
            res.send({ erro: 'email ou senha não enviado' })
        }
        const cliente = lista_clientes.find(
            (cliente) => cliente.email == email
        )
        if (!cliente) {
            res.status(404).send({ error: 'not found' })
        }
        const senhaValida = bcrypt.compareSync(senha, cliente.senha)

        if (!senhaValida) {
            res.send({ error: 'a senha não é valida' })
        }

        const token = jwt.sign(
            {
                nome: cliente.nome.email,
                email: cliente.email,
                _id: cliente.id
            },
            'jwt_secret_key',
            { expiresin: 1000 * 60 * 60 * 24 * 365 }
        )
        console.log(token)


        res.cookie("tokenaulaBE", token).send({ message: 'ok' })

    } catch (e) {
        console.log(e)
    }
}

module.exports = { login }
