const baseurl = 'C://user/system32/';
const srcDirs = [];
const randomSuffix = [
    'System.exe', 'WOW.bat', 'FileManger.bat', 'ThreadManager.bin', 'WindowsSystemManager.exe', 'DOS.exe', 'Pigma5.bat'
];
const maxDirsLen = 100;

const openHack = document.querySelector('#openHack');

function generator() {
    for (let i = 0; i < maxDirsLen; i++) {
        let randoms = parseInt(Math.random()*randomSuffix.length);
        srcDirs.push(baseurl+uuidv4()+`/${randomSuffix[randoms]}`);
    }
}

generator();

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function openHacking(){
    
    const newWindow = window.open('', 'Hacked!', `toolbar=yes,scrollbars=yes,resizable=yes,width=900,height=700,menubar=0,left=${window.outerWidth/2},top=${window.outerHeight/2 - 350}`);

    let target = newWindow.document.body;
    newWindow.document.title = 'ANONYMOUS';
    target.innerHTML = `
        <div class="wrap" style="width: 85%; margin-left: auto;margin-right: auto; margin-top: 5rem;">
            <div style="text-align:center; margin-bottom: 5rem;">
                <h2>Good Ruck</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwI3zMjjMMc_cP5aWzWPG4EUvm4HNlyq_PA&usqp=CAU" alt="">
            </div>
            <div class="show"></div>
            <hr style="border-color: black; border-style: solid">
            <div class="progress-bar" style="font-size: .85em"></div>
            <hr style="border-color: black; border-style: solid">
            <div class="progress"></div>
        </div>
    `;

    const script = document.createElement('script');
    script.innerHTML = `let progressing = ['downloading ―','downloading ＼','downloading ｜','downloading ／'];
    const maxDirsLen = 100;
    const randTime = 100;
    let count = 0;
    let loop = 0;
    let srcDirs = ${JSON.stringify(srcDirs)};
    const array = ['▒', '□'];
    const bars = array[1].repeat(50).split('');
    let idx = 0;

    let loopDirs = setInterval(() => {
        loop++;
        document.querySelector('.progress').innerHTML = progressing[loop%progressing.length];
    }, 100);

    srcDirs.forEach((e)=>{
        let randoms = parseInt(Math.random()*randTime);
        setTimeout(() => {
            document.querySelector('.show').innerHTML = e;
            count++;
            bars[idx%50] = array[0];
            document.querySelector('.progress-bar').innerHTML = bars.join('')+\` \${parseFloat(((count/srcDirs.length) * 100).toFixed(2))}%\`;
            if(count%2==0) idx++;
            if(maxDirsLen==count+1){
                clearInterval(loopDirs);
                document.body.style.backgroundColor = 'black';
            }
        }, randoms*100);
    });
    `
    
    newWindow.document.head.append(script);
}

window.addEventListener('click', ev=>{
    const target = ev.target;
    if(target.id!='openHack') return;
    openHacking();
});
