


export const numberPage = (location, RESIDENTS_PERPACE, num ) => {

    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPACE);
    //location?.residents.length
    const arrayPages = []
    const bloque1 = []
    const bloque2 = []
    const bloque3 = []
    const bloque4 = []
  

    for (let i = 1; i <= quantityPages; i++) {
        arrayPages.push(i)

    }

    console.log(arrayPages.length);

    for (let i = 0; i <= arrayPages.length; i++) {

        if (arrayPages[i] <= 7) {
            bloque1.push(arrayPages[i])

        } else if (arrayPages[i] >= 7 && arrayPages[i] <= 14) {
            bloque2.push(arrayPages[i])

        } else if (arrayPages[i] >= 14 && arrayPages[i] <= 21) {
            bloque3.push(arrayPages[i])

        } else if (arrayPages[i] >= 21 && arrayPages[i] <= 28) {
            bloque4.push(arrayPages[i])
        }

    }

    if (num == 1) {
        return bloque1
    } else if (num == 2) {
        return bloque2
    } else if (num == 3) {
        return bloque3
    } else if (num == 4) {
        return bloque4
    }



}
// const num = 2
// const location = 101
// const RESIDENTS_PERPACE = 12
// console.log(numberPage(location, RESIDENTS_PERPACE, num));