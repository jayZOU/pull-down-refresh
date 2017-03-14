import { init, end } from './pullDownRefresh';

let opt = {
    callback: function() {
        setTimeout(function() {
            var p = document.createElement('p');
            p.innerHTML = 'aaaaaaaaaaaaaaaa';
            document.body.appendChild(p);

            end();

        }, 2000);
    }
}

init(opt);


