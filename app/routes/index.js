const Router = require('express').Router()
const ErrorWrapper = require('../models/error')

function sampleError404() {
    throw new Error('AAAAAAAAAAAA')
}

function exampleInsertDataDB() {
	throw new Error('error connection closed to database')
}

function sampleDBError() {
	try {
		exampleInsertDataDB()	
	} catch (e) {
		throw new ErrorWrapper(500, 'failed to insert data', e)
	}
}

Router.get('/', (_req, res, _next) => {
    res.json({ msg: 'healthy' })
})

Router.get('/404', (_req, _res, next) => {
    try {
        sampleError404()
    } catch (e) {
        next(new ErrorWrapper(404, 'data not found', e, { bebek: 'dower' }))
    }
})

Router.get('/500', (_req, _res, next) => {
	try {
		sampleDBError()
	} catch (e) {
		next(e)
	}
})

module.exports = Router
