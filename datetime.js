/**
 * Obter o datetime de agora no formato ISO 8601
 */
export function json_datetime (offsetHoras = 0, millisegundos = true) {
    let epoch = Date.now(),
        offset = offsetHoras * 60 * 60 * 1000,
        data = new Date(epoch + offset).toJSON()
    
    if (!millisegundos)
        data = data.replace(/\.\d+/g, "")
    if (offsetHoras != 0) {
        let sinal = (offsetHoras >= 1) ? "+" : "-",
            horas = Math.abs(offsetHoras).toString().padStart(2, "0"),
            timezone = `${ sinal }${ horas }:00`
        data = data.replace(/Z/g, timezone)
    }
    
    return data
}