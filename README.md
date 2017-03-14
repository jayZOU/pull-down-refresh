# pull-down-refresh
>下拉刷新页面

![Alt text](https://sfault-image.b0.upaiyun.com/138/303/1383039851-58c758dfc0abc_articlex)

##Install
```
npm i pull-down-refresh --save
```

##Usage
```
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
```

**or**
```
<script src = "./path/dist/pullDownRefresh.global.js"> </script> 
<script >
    var opt = {
        callback: function() {
            setTimeout(function() {
                var p = document.createElement('p');
                p.innerHTML = 'aaaaaaaaaaaaaaaa';
                document.body.appendChild(p);
                pullDownRefresh.end();
            }, 2000);
        }
    }
	pullDownRefresh.init(opt); 
</script>
```

##dev
>git clone https://github.com/jayZOU/pull-down-refresh.git

>npm install

>npm run dev ( or build)
##API
###init(object)
*Function*
传入触发刷新的回调

###end()
*Function*
刷新结束时上拉
