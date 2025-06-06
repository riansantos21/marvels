export class PersonagemTemporal {
    
    private nome: string;
    protected AssinaturaTemporal: number;
     protected universo:string;
  
    constructor(nome: string, AssinaturaTemporal: number,universo:string) {
      this.nome = nome;
      this.AssinaturaTemporal = AssinaturaTemporal;
      this.universo=universo;
    }
  
    
     getNome(): string {
      return this.nome;
    }
    exibirinfo() {
        console.log(`personagem: ${this.nome} do universo${this.universo}| assinatura temporal: ${this.AssinaturaTemporal} `);
      }

    
    }

