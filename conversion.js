function solicitar() {
    
    let dec = prompt("Por favor ingrese de qué medida a qué medida de grados quiere convertir, ingrese medida origen (C, K, F): ");
    dec = dec.toUpperCase();

    let dec2 = prompt("Ingrese medida a convertir (C, K, F): ");
    dec2 = dec2.toUpperCase();

    let value = Number(prompt(`Ingrese la cantidad de grados a transformar de ${dec} a ${dec2}:`));

    return convertir(dec, dec2, value); 
    
}

function convertir(dec, dec2, value) {
    let resultado;
    switch (dec) {
        
        case "C":
        
            switch (dec2) {
            
                case "C": 
                resultado = value; 
                break;
            
                case "K": 
                resultado = value + 273.15; 
                break;
            
                case "F": 
                resultado = value * (9 / 5) + 32; 
                break;
                
                default: 
                return "Unidad de destino no válida.";
            }
            
            break;

        case "K":
            
            switch (dec2) {
                
                case "C": 
                resultado = value - 273.15; 
                break;
                
                case "K": 
                resultado = value; 
                break;
                
                case "F": 
                resultado = (value - 273.15) * (9 / 5) + 32; 
                break;
                
                default: return "Unidad de destino no válida.";
            
            }
            
            break;

        case "F":
            
            switch (dec2) {
            
                case "C": 
                resultado = (value - 32) * (5 / 9); 
                break;
                
                case "K": 
                resultado = (value - 32) * (5 / 9) + 273.15; 
                break;
                
                case "F": 
                resultado = value; 
                break;
                
                default: 
                return "Unidad de destino no válida.";
            
            }
            
            break;

        default:
            return "Unidad de origen no válida.";
    }

    return `El resultado de la conversión de ${value}°${dec} a ${dec2} es: ${resultado.toFixed(2)}°${dec2}`;

}

function imprimir() {
    let resultado = solicitar(); 
    console.log(resultado); 
}

imprimir();