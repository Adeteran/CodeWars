function DNAStrand(dna){
    let res = " ";
    for(let i = 0; i < dna.length; i++){
        if(dna[i] === "A"){
            res += "T";
        }
        if(dna[i] === "T"){
            res += "A";
        }
        if(dna[i] === "C"){
            res += "G";
        }
        if(dna[i] === "G"){
            res += "C";
        }
    }
    console.log(res);
}

DNAStrand("AAAA");
DNAStrand("ATTGC");
DNAStrand("GTAT");