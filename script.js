let getSel = sel => document.querySelector(sel);
let view = 'shrink';

getSel('.btnSubmit').onclick = function () {
    alert('Something');
}
getSel('#expand').onclick = function () {
    if (view === 'shrink') {
        getSel('.wrapper1').style.backgroundColor = 'rgb(51, 153, 102)';
        getSel('.header').style.display = 'none';
        getSel('#content').className = 'contentShrink';
        getSel('#textComment').style.height = '100%';
        getSel('#textComment').style.margin = '0';
        getSel('.btnSubmit').style.display = 'none';
        getSel('.titleQuestion').style.display = 'none';
        getSel('.expand > img').style.src = 'image/shrink.png';
        this.innerHTML = '<img src="image/shrink.png" alt=""> SHRINK';
        this.classList.add('shrink');
        view = 'expand';
    }
    else {
        getSel('.wrapper1').style.backgroundColor = 'transparent';
        getSel('.header').style.display = 'block';
        getSel('#content').className = 'contentExpand';
        getSel('#textComment').style.height = '150px';
        getSel('#textComment').style.margin = '9px 0';
        getSel('#textComment').style.backgroundColor = 'white';
        getSel('.btnSubmit').style.display = 'block';
        getSel('.titleQuestion').style.display = 'block';
        this.innerHTML = '<img src="image/expand.png" alt=""> EXPAND';
        this.classList.remove('shrink');
        view = 'shrink';
    }

}


