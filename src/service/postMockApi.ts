/**
 * Seguindo a sugestão de criar uma pasta para services, pesquisei uma forma de simular um envio utilizando axios e achei este modelo
 * Também entendi que poderia ter feito algo assim para simular o get
 * 
 * @param newData 
 * @returns 
 */
export const mockPostData = (newData) => {
    return new Promise((resolve) => {
        const createData = {
            ...newData
        };

        console.log( "test de criação de nova entrada", createData );

        resolve({ data: createData })
        
    })
}