const Lancamento = require('../models/Lancamento')

const { format, parse } = require('date-fns')

module.exports = class LancamentoController {
    static async Inserir(req, res) {
        const {data, parcelas, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte} = req.body

        if(!data)
            return res.status(400).json({mensagem:'Data do lançamento obrigatória!'})

        const dataAtual = new Date()
        const anoAtual = dataAtual.getFullYear()
        const dataString = `${data}/${anoAtual}`
        const dataFormatada = format(parse(dataString, 'dd/MM/yyyy', new Date()), 'yyyy-MM-dd')

        if(!parcelas)
            return res.status(400).json({mensagem:'Quantidade de parcelas obrigatório!'})

        if(!observacao)
            return res.status(400).json({mensagem: 'Observação do lançamento obrigatória!'})

        if(!valor)
            return res.status(400).json({mensagem:'Valor do lançamento obrigatório!'})

        if(!codestabelecimento)
            return res.status(400).json({mensagem: 'Estabelecimento do lançamento obrigatório!'})

        try {
            const lancamento = {codigo: 0, data: dataFormatada, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte}  
            
            await Lancamento.create(lancamento)
            res.status(201).json({mensagem: 'Lançamento cadastrado com sucesso!'}) 
        } catch (error) {
            res.status(500).json({mensagem: error})      
        }
    }

    /*static async Alterar(req, res) {
        const codigo = req.params.codigo       

        const lancamentoExist = await Lancamento.findByPk(codigo)

        if(!lancamentoExist) 
            return res.status(404).json({mensagem:'Lançamento não encontrado!'})
        
        const {data, parcelas, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte} = req.body

        if(!parcelas)
            return res.status(400).json({mensagem:'Numero de parcelas obrigatória!'})

        if(!observacao)
            return res.status(400).json({mensagem:'Observação do lançamento obrigatória!'})

        if(!observacao)
            return res.status(400).json({mensagem:'Observação do lançamento obrigatória!'})

        if(!valor)
            return res.status(400).json({mensagem:'Valor do lançamento obrigatório!'})

        if(!codestabelecimento)
            return res.status(400).json({mensagem:'Estabelecimento do lançamento obrigatório!'})

        if (parcela === 1)
            try {
                const lancamento = {data, parcelas, observacao, valor, codusuario, codestabelecimento, codusuarioparte, valorparte}  
                
                await Lancamento.update(lancamento, {where: {codigo: codigo}})
                res.status(201).json({mensagem: 'Lançamento cadastrado com sucesso!'}) 
            } catch (error) {
                res.status(500).json({mensagem: error})      
            }
        else
            try {
                
            } catch (error) {
                res.status(500).json({mensagem: error})    
            }
    }*/

    static async Excluir(req, res) {
        const codigo = req.params.codigo       

        const lancamentoExist = await Lancamento.findByPk(codigo)

        if(!lancamentoExist) 
            return res.status(404).json({mensagem:'Lançamento não encontrado!'})

        try {
            await Lancamento.destroy({where: {codigo: codigo}})
            res.status(201).json({mensagem: 'Lançamento excluído com sucesso!'}) 
        } catch (error) {
            res.status(500).json({mensagem: error})     
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
            return res.status(404).json({mensagem:'Lançamento não encontrado!'})

        res.status(201).json({lancamento: lancamentoExist})
    }
}