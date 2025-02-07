// 祝词
var words=[
    '赵妍！！！！',
    '永远年轻',
    '永远自由',
    '心想事成',
    '做自己！',
    '身体健康',
    '大富大贵',
    '大吉大利',
    '万事如意',
    '美梦成真',
    '吉祥如意',
    '鸿运当头',
    '五福临门',
    '吉星高照',
    '好运连连',
    '八面春风',
    '百事亨通',
    '万事大吉',
    '喜气洋洋',
    '岁岁今日',
    '年年今朝',
    '和气吉祥',
    '百事顺遂',
    '前途光明',
    '喜上眉梢',
    '家庭和睦',
    '祝福你！',
    '龙马精神',
    '出入平安',
    '前程万里',
    '年年有余',
    '万事胜意',
    '学业有成',
    '大展宏图',
    '顺风顺水',
    '陈春杳杳，来岁昭昭',
    '昭昭如愿，岁岁安澜',
    '祝你一如既往是自己的春天',
    '千千万万次盛放',
    '开开心心！'];

// 生成指定范围随机数（保留小数点后两位）
function randomNum(min,max){
    var num=(Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
}

// 初始函数
function init(){
    var container=document.querySelector('.container');
    var f=document.createDocumentFragment(); //创建文档片段对象

    words.forEach(w => {
        var word_box=document.createElement('div');
        var word=document.createElement('div');

        word.innerText=w;
        word.classList.add('word');

        // 随机生成色相值（0为红色、120为绿色、240为蓝色、360为红色）
        var hue=randomNum(0,240);
        word.style.color='hsl('+hue+',100%,65%)';

        word_box.classList.add('word-box');
        // 生成随机数值，并赋值给自定义属性
        word_box.style.setProperty('--margin-top',randomNum(-40,20)+'vh');
        word_box.style.setProperty('--margin-left',randomNum(6,35)+'vw');
        word_box.style.setProperty('--animation-duration',randomNum(8,20)+'s');
        word_box.style.setProperty('--animation-delay',randomNum(-20,0)+'s');

        word_box.appendChild(word);
        f.appendChild(word_box);
    })
    container.appendChild(f);
}

// 绑定加载事件
window.addEventListener('load',init);