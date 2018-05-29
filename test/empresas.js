const chai = require('chai')
const expect = chai.expect
const empresasController = require('../controllers/empresas')

describe('Controller - Empresas', () => {

    let idEmpresa;

    let novaEmpresa = {
        nome: "Empresa 1",
        descricao: "Empresa de software",
        fundador: "Steve Jobs"
    };

    let atualizarEmpresa = {
        nome: "Empresa 2",
        descricao: "Empresa de desenvolvimento mobile",
        fundador: "Bill Gates"
    };

    it('GET index', (done) => {
        empresasController.index((erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresas).to.have.length(0);
            
            done()
        })
    })

    it('POST new', (done) => {
        empresasController.new(novaEmpresa, (erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresa).to.be.an('object');
            idEmpresa = resultado.empresa.id;
            expect(resultado.empresa.nome).to.be.equal(novaEmpresa.nome);
            expect(resultado.empresa.descricao).to.be.equal(novaEmpresa.descricao);
            expect(resultado.empresa.fundador).to.be.equal(novaEmpresa.fundador);

            done()
        })
    })

    it('GET index - after insert one', (done) => {
        empresasController.index((erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresas).to.have.length(1);

            done()
        })
    })

    it('GET one', (done) => {
        empresasController.get(idEmpresa, (erro, resultado) => {
            expect(erro).to.be.null; 

            expect(resultado.empresa).to.be.an('object');
            expect(resultado.empresa.nome).to.be.equal(novaEmpresa.nome);
            expect(resultado.empresa.descricao).to.be.equal(novaEmpresa.descricao);
            expect(resultado.empresa.fundador).to.be.equal(novaEmpresa.fundador);

            done()
        })
    })

    it('UPDATE one', (done) => {
        empresasController.update(idEmpresa, atualizarEmpresa, (erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresa).to.be.an('object');
            expect(resultado.empresa.nome).to.be.equal(atualizarEmpresa.nome);
            expect(resultado.empresa.descricao).to.be.equal(atualizarEmpresa.descricao);
            expect(resultado.empresa.fundador).to.be.equal(atualizarEmpresa.fundador);

            done()
        })
    })

    it('GET index - after update one', (done) => {
        empresasController.index((erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresas).to.have.length(1);

            done()
        })
    })

    it('DELETE one', (done) => {
        empresasController.remove(idEmpresa, (erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.deletado).to.be.equal(true);

            done()
        })
    })

    it('GET index - after remove one', (done) => {
        empresasController.index((erro, resultado) => {
            expect(erro).to.be.null;

            expect(resultado.empresas).to.have.length(0);

            done()
        })
    })

})