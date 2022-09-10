export class Hardware{
    private _id : any;
    private _tipo : string;
    private _marca : string;
    private _modelo : string;
    private _preco : string;
    private _quantidade : string;

    //ta faltando desconto
    constructor(tipo : string, marca: string, modelo : string, 
        preco : string, quantidade : string){
            let chave = new Date;
            this._id = chave.getTime();
            this._tipo = tipo;
            this._marca = marca;
            this._modelo = modelo;
            this._preco = preco;
            this._quantidade = quantidade;
        }
    public get id() : any{
        return this._id;
    }
    public get tipo() : string{
        return this._tipo;
    }
    public set tipo(tipo : string){
        this._tipo = tipo;
    }
    public get marca() : string{
        return this._marca
    }
    public set marca(marca : string){
        this._marca = marca;
    }
    public get modelo() : string{
        return this._modelo;
    }
    public set modelo(modelo : string){
        this._modelo = modelo;
    }
    public get preco() : string{
        return this._preco;
    }
    public set preco(preco : string){
        this._preco = preco;
    }
    public get qualidade() : string{
        return this.qualidade;
    }
    public set qualidade(qualidade : string){
        this._quantidade = qualidade;
    }
}