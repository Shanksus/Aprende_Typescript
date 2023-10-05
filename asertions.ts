const canvas = document.getElementById('span')

if (canvas instanceof HTMLCanvasElement) {  // Deduciendo que canvas es un HTMLCanvasElement, si no, no entra
    const context = canvas.getContext('2d')
}
 
// Typeof -> para tipos (strings, boolean, number, etc)
// Instanceof -> para instancias