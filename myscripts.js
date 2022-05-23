(function(window, document, undefined){

    window.onload = init;

function init(){
    var test = document.getElementById('test')
    test.addEventListener('click', function (event) {
        location.reload();
    })

    var lis = document.querySelectorAll('li');
    // var button = document.querySelectorAll('span');
    
    for (var i = 0, len = lis.length; i < len; i++) {
        lis[i].addEventListener('click', function (event) {
            this.remove();
            alert('usunięto dane');
        }, false);
        
    }

}

})(window, document, undefined);

