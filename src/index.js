document.addEventListener('mousedown', function (e) {
    
}, false);

document.addEventListener('mouseup', function (e) {
    getRect(window.getSelection());
}, false);


let getRect = (sel) => {
    var rects = sel.getRangeAt(0).getClientRects();
    var fontSize = window.parseFloat(window.getComputedStyle(sel.anchorNode.parentElement)['font-size'])
    rects = Array.from(rects);
    rects = rects.filter(item => item.width >= fontSize);  // 过滤掉换行符的矩形

    console.log(rects);
};