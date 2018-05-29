let empresas = []

const empresasController = {}

empresasController.index = (cb) => {
    cb(null, {empresas})
}

empresasController.get = (id, cb) => {
    const empresa = empresas.reduce((emp, item) => item.id === id ? item : emp, {})
    cb(null, {empresa})
}

empresasController.new = (data, cb) => {
    const { nome, descricao, fundador } = data
    if( !nome, !descricao, !fundador ) return cb('Cadastro Incompleto')
    const empresa = {
        id: Math.floor( ( Math.random() * 100000 ) + 100000 ),
        nome,
        descricao,
        fundador,
        criadoEm: Date.now,
        atualizadoEm: Date.now
    }
    empresas.push(empresa)
    cb(null, {empresa})
}

empresasController.update = (id, data, cb) => {
    const { nome, descricao, fundador } = data
    if( !nome, !descricao, !fundador ) return cb('Cadastro Incompleto')    
    let empresa = { nome, descricao, fundador, atualizadoEm: Date.now }
    empresas = empresas.map((_empresa) => {
        if( _empresa.id === id ){
            empresa = Object.assign( {}, _empresa, empresa)
            return empresa
        }        
        return _empresa
    })
    cb(null, { empresa })
}

empresasController.remove = (id, cb) => {
    empresas = empresas.filter((_empresa) => id !== _empresa.id )
    cb(null, { deletado: true })
}

module.exports = empresasController