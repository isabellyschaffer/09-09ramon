// enviar pro servidor req, enviar pro cliente res
const db = require('../db.json')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const {email, senha} = req.body;
        const lista_clientes = db.clientes
        if(!email || !senha){
            res.send({erro:'email ou senha não enviado'})
        }

        const cliente = lista_clientes.find(
            (cliente) => cliente?.email == email
        ) 
        if(!cliente){
            res.status(404).send({error:'not found'})
        }

        const senhavalida = bcrypt.compareSync(senha, cliente.senha)
        if(!senhavalida)
        res.send({erro:'a senha não é válida'})

        const token = jwt.sign(
            {
                nome: cliente.nome,
                email: cliente.email,
                _id: cliente.id
            },
            process.env,
            { expiresIn: 1000*60*60*24*365}
        )

        res.cookie("TokenAulaBE", token).send({messege:'ok'})     
    }
    catch (e) {
        console.log(e)
    }

}

const logout = async (req,res) => {

    res.cookie("TokenAulaBE", "nome", expiresIn=5)
    res.send(messege='o usuario fez logout')
}

module.exports = {login}
