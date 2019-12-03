let getSel = sel => document.querySelector(sel);
getSel('.btnSubmit').onclick = function () {
    alert('Something');
}
getSel('.expand').onclick = function () {
    getSel('.wrapper1').style.display = 'none';
    getSel('.wrapper2').style.display = 'flex';
    let textComment = getSel('#textComment').value;
    getSel('.contentShrink').textContent = textComment;
}

getSel('.shrink').onclick = function () {
    getSel('.wrapper2').style.display = 'none';
    getSel('.wrapper1').style.display = 'flex';
}
