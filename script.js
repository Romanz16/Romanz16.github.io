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
        getSel('#textComment').classList.add('textareaShrink'); 
        getSel('.btnSubmit').style.display = 'none';
        getSel('.titleQuestion').style.display = 'none';
        this.innerHTML = '<img src="image/shrink.svg" alt=""> SHRINK';
        this.classList.add('shrink');
        view = 'expand';
    }
    else {
        getSel('.wrapper1').style.backgroundColor = 'transparent';
        getSel('.header').style.display = 'block';
        getSel('#content').className = 'contentExpand';
        getSel('#textComment').classList.remove('textareaShrink'); 
        getSel('.btnSubmit').style.display = 'block';
        getSel('.titleQuestion').style.display = 'block';
        this.innerHTML = '<img src="image/expand.svg" alt=""> EXPAND';
        this.classList.remove('shrink');
        view = 'shrink';
    }

}


