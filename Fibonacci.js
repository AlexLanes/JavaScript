/** 
 * Cache do fibonacci 
 */
let memoization = {
    "1": 0,
    "2": 1
}

/**
 * Calcular o N-ésimo número do fibonacci
 * @param {Number} n Número do fibonacci
 */
function fibonacci( n ){
    // Exceção
    if( n <= 0 ) 
        throw new Error( "N-ésimo número não pode ser menor ou igual a 0" )
    // valor não cacheado
    else if( memoization[n] === undefined ) 
        memoization[ n ] = fibonacci( n - 1 ) + fibonacci( n - 2 )

    return memoization[ n ]
}

const N_ÉSIMO = 45
for( let n = 1; n <= N_ÉSIMO; n++ )
    console.log( `Resultado do fibonacci "${n}": ${fibonacci(n)}` )