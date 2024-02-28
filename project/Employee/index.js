console.log("nested function");
function guravgp() {
    var acre = 20
    var gold = 5.2
    console.log(acre);
    console.log(gold);
    function guravp() {
        var acrep=30
        console.log(acrep);
        function gurav() {
            var acreg=70
            console.log(acreg);
        }
        return gurav
    }
    return guravp
}
guravgp()()()