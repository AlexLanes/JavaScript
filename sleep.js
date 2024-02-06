/**
 * Função sleep do Python => await sleep(1)
 * @param   { number } seconds 
 * @returns { Promise<void> }
 */
export async function sleep( seconds ){
    return new Promise( _ => setTimeout(_, seconds * 1000) )
}