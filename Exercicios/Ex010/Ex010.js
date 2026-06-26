let idade = 70;
console.log(`A sua idade é ${idade}!`)
if(idade < 16){
    console.log(`Não vota!`)
}else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
}else if(idade < 65){
    console.log('Voto Obrigatório')
}