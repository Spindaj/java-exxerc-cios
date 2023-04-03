let cont = 1 
while (cont<=100) {
    var resto = cont % 2 
    if (resto ==0){
        document.write("Par " + cont)
        document.write('<br>')
    }
    cont = cont + 1;
}
document.write("FIM")