var archivos = requiere('fs');
archivos.unlink('cambio.txt',function(err){
    if(err) throw err;
    console.log("Misión cumplida")
})