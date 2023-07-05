/**
 * Converter um objeto javascript para a versão xml
 * @param { any } obj objeto javascript a ser convertido
 * @returns { string }
 */
function json_to_xml( obj ){
    if( typeof obj == "string" )
        obj = JSON.parse(obj)
    
    let xml = '';
    for( let prop in obj ){
        if( obj[prop] instanceof Array ){
            for( let array in obj[prop] ){
                xml += '<' + prop + '>';
                xml += json_to_xml( new Object(obj[prop][array]) );
                xml += '</' + prop + '>';
            }
            
        } else {
            xml += '<' + prop + '>';
            typeof obj[prop] == 'object' 
                ? xml += json_to_xml( new Object(obj[prop]) ) 
                : xml += obj[prop];
            xml += '</' + prop + '>';
        }
    }
    
    xml = `<Root-Element>${xml}</Root-Element>`
    xml = xml.replace( /<\/?[0-9]{1,}>/g, '' ).replace( /&/g, '&amp;' );
    return xml;
}