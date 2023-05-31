const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../Middleware/auth');
const config = require('../Config/config');

const createUserToken = (userId) => {
    return jwt.sign({id: userId}, 'batatafrita2019', {expiresIn: '7d'});
}

const minimalPostValidation = (obj) => {
    const {email, password} = obj;

    if(!email || !password)
        return false;

    return true;
}

const minimalAuthValidation = (obj) => {
    const {user, password} = obj;

    if(!user || !password)
        return false;

    return true;
}

router.post('/create', authMiddleware, async (req, res) => {
    if(!minimalPostValidation(req.body))
        return res.status(400).send({error: 'Dados insuficientes!'});

    const email = req.body.email;

    try{
        const user = await Users.findOne({email});

        if(user)
            return res.status(400).send({message: 'Usuário já existe na base de dados!'});

        try{
            const createdUser = await Users.create(req.body);

            if(createdUser){
                createdUser.password = undefined;

                return res.status(201).send({createdUser});
            }

        }catch(err){
            return res.status(500).send({error: `Erro na criação do usuário: ${err}`});
        }           

    }catch(err){
        return res.status(500).send({error: 'Erro ao buscar usuário!'});
    }

});

router.get('/:id', authMiddleware, async (req, res) =>{
    try{
        const _id = req.params.id;

        const user = await Users.findOne({_id});

        if(!user)
            return res.status(400).send({error: 'Usuário inexistente na base de dados!'});

        return res.send(user);
    }
    catch(err){
        return res.status(500).send({error: `Erro na consulta de usuários: ${err}`});
    }
});

router.get('/', authMiddleware, async (req, res) =>{
    try{
        const user = await Users.find({});
        return res.send(user);
    }
    catch(err){
        return res.status(500).send({error: `Erro na consulta de usuários: ${err}`});
    }
});

router.put('/:id', authMiddleware, async (req, res) => {
    try{
        if(!minimalPostValidation(req.body))
            return res.status(400).send({error: 'Dados insuficientes para update!'});

        const _id = req.params.id;

        var usuario = await Users.findOne({_id}).select("+password");

        if(!usuario)
            return res.send({error: 'Usuário não encontrado!'});
            
        const {email, password} = req.body;

        if(usuario.email !== email)
            usuario.email = email;

        const samePassword = await bcrypt.compare(password, usuario.password);

        if(!samePassword)
            usuario.password = password;
        
        await usuario.save();

        usuario.password = undefined;
        return res.send(usuario);
    }catch(err){
        return res.send({error: `Erro na alteração do usuário: ${err}`});
    }
});

router.delete('/:id', authMiddleware, async (req, res) => {
    try{
        const _id = req.params.id;

        const result = await Users.deleteOne({_id});

        console.log(result.deletedCount);

        if(result.deletedCount === 0){
            return res.status(400).send({error: 'Não foi encontrado resgitro com o id informado!'});
        }

        return res.send({message: 'Registro deletado!'});
    }
    catch(err){
        return res.status(500).send({error: `Erro ao se deletar o usuário: ${err}`});
    }
});

router.post('/auth', async (req, res) => {
    if(!minimalAuthValidation(req.body))
        return res.status(400).send({error: 'Dados insuficientes para a autenticação!'});

    const {user, password} = req.body;

    try{
        const auth = config.auth;

        const sameUser = user === auth.user

        const samePassword = await bcrypt.compare(password, auth.password);

        if(!samePassword || !sameUser)
            return res.status(401).send({error: 'Dados de autenticação incorretos!'});

        auth.password = undefined;
        return res.send({token: createUserToken(user.id)});
    }
    catch(err){
        return res.status(500).send({error: `Erro na autenticação: ${err}`});
    } 
});

module.exports = router;