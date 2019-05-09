function accum(s) {
    res = "";
    for(let i = 0; i < s.length; i++){
        // let letter = s[i];
        let letters = s[i].toUpperCase() + (s[i].toLowerCase().repeat(i));                 
        if(i == s.length - 1) {
            res += letters;
        }else{
            res += letters + "-";
        }
    }
    console.log(res);
}

accum("ZpglnRxqenU");