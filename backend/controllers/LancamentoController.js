const Lancamento = require('../models/Lancamento')

const { format, parse } = require('date-fns')

module.exports = class LancamentoController {
    static async Inserir(req, res) {
        const {data, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte} = req.body

        if(!data)
            return res.status(400).json({menssage: 'Data do lançamento obrigatória!'})

        const dataFormatada = format(parse(data, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')

        if(!observacao)
            return res.status(400).json({menssage: 'Observação do lançamento obrigatória!'})

        if(!valor)
            return res.status(400).json({menssage: 'Valor do lançamento obrigatório!'})

        if(!codestabelecimento)
            return res.status(400).json({menssage: 'Estabelecimento do lançamento obrigatório!'})

        try {
            const lancamento = {codigo: 0, data: dataFormatada, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte}  
            
            await Lancamento.create(lancamento)
            res.status(201).json({message: 'Lançamento cadastrado com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})      
        }
    }

    static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const lancamentoExist = await Lancamento.findByPk(codigo)

        if(!lancamentoExist) 
            return res.status(404).json({menssage: 'Lançamento não encontrado!'})
        
        const {data, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte} = req.body

        if(!data)
            return res.status(400).json({menssage: 'Data do lançamento obrigatória!'})

        if(!observacao)
            return res.status(400).json({menssage: 'Observação do lançamento obrigatória!'})

        if(!valor)
            return res.status(400).json({menssage: 'Valor do lançamento obrigatório!'})

        if(!codestabelecimento)
            return res.status(400).json({menssage: 'Estabelecimento do lançamento obrigatório!'})

        try {
            const lancamento = {data, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte}  
            
            await Lancamento.update(lancamento, {where: {codigo: codigo}})
            res.status(201).json({message: 'Lançamento cadastrado com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})      
        }
    }

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const lancamentoExist = await Lancamento.findByPk(codigo)

        if(!lancamentoExist) 
            return res.status(404).json({menssage: 'Lançamento não encontrado!'})

        try {
            await Lancamento.destroy({where: {codigo: codigo}})
            res.status(201).json({message: 'Lançamento excluído com sucesso!'}) 
        } catch (error) {
            res.status(500).json({message: error})     
        }
    }

    static async GetAll(req, res) {
        const lancamentos = await Lancamento.findAll()

        res.status(201).json({lancamentos: lancamentos}) 
    }

    static async GetByCodigo(req, res) {
        const codigo = req.params.codigo       

        const lancamentoExist = await Lancamento.findByPk(codigo)

        if(!lancamentoExist) 
            return res.status(404).json({menssage: 'Lançamento não encontrado!'})

        res.status(201).json({lancamento: lancamentoExist})
    }
}