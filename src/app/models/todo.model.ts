
export class Todo {
    public texto: string;
    public id: number;
    public completado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        this.id = Math.random();
        this.completado = false;
    }  
}