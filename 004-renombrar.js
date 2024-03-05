var archivos = requiere('fs');
archivos.rename("nuevo.txt",'cambio.txt',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})