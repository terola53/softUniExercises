function projectsCreation(input){
    let imeNaArhitekt = input[0];
    let broiProekti = input[1];
    let vreme = broiProekti * 3;

    console.log(`The architect ${imeNaArhitekt} will need ${vreme} hours to complete ${broiProekti} project/s.`);
}
projectsCreation(['Pesho', '10', 10]);