"use strict"
 
// externo
import Https from "node:https"
import Request from "node-fetch"
import JsonSchema from "json-schema"
 
/**
 * Validar se o item é válido para o schema
 * @param   { any } item                    item a ser validado
 * @param   { any } schema                  json-schema de validação
 * @returns { JsonSchema.ValidationResult } resposta da validação
 */
export function validar_schema (item, schema) {
    return JsonSchema.validate(item, schema)
}
 
/**
 * Função genérica para realizar http requests e padronizar resposta
 * @param { string } url                        url do request 
 * @param { string } method                     método http
 * @param { URLSearchParams } querys            query parameters
 * @param { Record<string, string> } headers    objeto com os headers
 * @param { string } body                       body como texto
 */
export async function send_request (url, method, querys = undefined, headers = undefined, body = undefined) {
    /** @type { import("node-fetch").RequestInit } */
    let config = {
        body: body,
        method: method,
        headers: headers,
        // confiança no certificado do host no url
        agent: new Https.Agent({
            rejectUnauthorized: false
        })
    },
    response = await Request(`${ url }?${ querys?.toString() ?? "" }`, config)
    
    return {
        codigo: response.status,
        headers: response.headers.raw(),
        body: await response.text()
    }
}