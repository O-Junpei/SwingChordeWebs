var ctx;

//viewのサイズ
var viewWidth = 0;
var viewHeight = 0;

//音符のサイズ
var toneWidth = 0;
var toneHeight = 0;
var toneLeftPosX = 0;
var tonePosYs = [];
var scaleTonePos = []

//音符用の加線
var addLineWidth = 0;
var addLineHeight = 0;
var addLineLeftPosX = 0;
var addLineUnderPosYs = [];
var addLineHighPosYs = [];

//♭のサイズ、位置
var flatWidth = 0;
var flatHeight = 0;
var flatLeftPosX = 0;
var flatRightPosX = 0;
var flatPosYs = [];

//♯のサイズ、位置
var sharpWidth = 0;
var sharpHeight = 0;
var sharpLeftPosX = 0;
var sharpRightPosX = 0;
var sharpPosYs = [];


//スケール関係


//画像ぷりロード
var testImg = new Image();
testImg.src = "img/test.png"

//
var gClefImg = new Image();
gClefImg.src = "img/gClef.png"

var wholeNoteImg = new Image();
wholeNoteImg.src = "img/wholeNote.png"

var flatImg = new Image();
flatImg.src = "img/flat.png"

var sharpImg = new Image();
sharpImg.src = "img/sharp.png"

function draw(){
    initSetting()
    setBaseAssets()
}


function initSetting(){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');

        //画面サイズを取得
        viewWidth = canvas.width;
        viewHeight = canvas.height;

        //音符のサイズを取得
        toneWidth = viewWidth*0.04*1.436;
        toneHeight = viewHeight*0.08;
        toneLeftPosX = viewWidth*0.25

        //ポジションたち
        tonePosYs[0] = 0;
        tonePosYs[1] = 0;
        tonePosYs[2] = 0;
        tonePosYs[3] = 0;
        tonePosYs[4] = viewHeight*0.925
        tonePosYs[5] = viewHeight*0.805
        tonePosYs[6] = viewHeight*0.765
        tonePosYs[7] = viewHeight*0.765
        tonePosYs[8] = viewHeight*0.725
        tonePosYs[9] = viewHeight*0.725
        tonePosYs[10] = viewHeight*0.685
        tonePosYs[11] = viewHeight*0.685
        tonePosYs[12] = viewHeight*0.645
        tonePosYs[13] = viewHeight*0.605
        tonePosYs[14] = viewHeight*0.605
        tonePosYs[15] = viewHeight*0.565
        tonePosYs[16] = viewHeight*0.565
        tonePosYs[17] = viewHeight*0.525
        tonePosYs[18] = viewHeight*0.485
        tonePosYs[19] = viewHeight*0.485
        tonePosYs[20] = viewHeight*0.445
        tonePosYs[21] = viewHeight*0.445
        tonePosYs[22] = viewHeight*0.405
        tonePosYs[23] = viewHeight*0.405
        tonePosYs[24] = viewHeight*0.365
        tonePosYs[25] = viewHeight*0.325
        tonePosYs[26] = viewHeight*0.325
        tonePosYs[27] = viewHeight*0.285
        tonePosYs[28] = viewHeight*0.285
        tonePosYs[29] = viewHeight*0.245
        tonePosYs[30] = viewHeight*0.245
        tonePosYs[31] = viewHeight*0.205
        tonePosYs[32] = viewHeight*0.165
        tonePosYs[33] = viewHeight*0.165
        tonePosYs[34] = viewHeight*0.125
        tonePosYs[35] = viewHeight*0.125

        //スケール用のポジションの指定
        scaleTonePos[0] = viewWidth*0.43
        scaleTonePos[1] = viewWidth*0.59
        scaleTonePos[2] = viewWidth*0.75
        scaleTonePos[3] = viewWidth*0.91



        //加線の
        addLineWidth = viewWidth*0.08
        addLineHeight = viewHeight*0.01
        addLineLeftPosX = viewWidth*0.24
        //
        addLineUnderPosYs[0] = viewHeight*0.68
        addLineUnderPosYs[1] = viewHeight*0.76
        addLineUnderPosYs[2] = viewHeight*0.84
        addLineHighPosYs[0] = viewHeight*0.20
        addLineHighPosYs[1] = viewHeight*0.16



        //♭関連
        flatWidth = viewWidth*0.18*0.295
        flatHeight = viewHeight*0.18
        flatLeftPosX = viewWidth*0.124
        flatRightPosX = viewWidth*0.185
        flatPosYs[6] = viewHeight*0.675
        flatPosYs[8] = viewHeight*0.635
        flatPosYs[10] = viewHeight*0.595
        flatPosYs[13] = viewHeight*0.515
        flatPosYs[15] = viewHeight*0.475
        flatPosYs[18] = viewHeight*0.395
        flatPosYs[20] = viewHeight*0.355
        flatPosYs[22] = viewHeight*0.315
        flatPosYs[25] = viewHeight*0.235
        flatPosYs[27] = viewHeight*0.185
        flatPosYs[32] = viewHeight*0.065
        flatPosYs[34] = viewHeight*0.025


        //
        sharpWidth = viewWidth*0.18*0.295
        sharpHeight = viewHeight*0.18
        sharpLeftPosX = viewWidth*0.124
        sharpRightPosX = viewWidth*0.185
        sharpPosYs[13] = viewHeight*0.595
        sharpPosYs[15] = viewHeight*0.555
        sharpPosYs[18] = viewHeight*0.475
        sharpPosYs[20] = viewHeight*0.435
        sharpPosYs[25] = viewHeight*0.315
        sharpPosYs[27] = viewHeight*0.275
        sharpPosYs[30] = viewHeight*0.195
        sharpPosYs[32] = viewHeight*0.155


        showTone(35,0,0)
        ctx.drawImage(wholeNoteImg, scaleTonePos[0], tonePosYs[14], toneWidth, toneHeight)
        ctx.drawImage(wholeNoteImg, scaleTonePos[1], tonePosYs[14], toneWidth, toneHeight)
        ctx.drawImage(wholeNoteImg, scaleTonePos[2], tonePosYs[14], toneWidth, toneHeight)
        //setMajorChord(26)
    }
}


function showTone(toneNumber,isSharp,isRight){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){

        if (isSharp === 1) {
            //音符を追加する
            ctx.drawImage(wholeNoteImg, toneLeftPosX, tonePosYs[toneNumber-1], toneWidth, toneHeight)
            setSharp(toneNumber)
        }else{
            //音符を追加する
            ctx.drawImage(wholeNoteImg, toneLeftPosX, tonePosYs[toneNumber], toneWidth, toneHeight)
                //記号類を表示する
            setFlat(toneNumber)
        }

        //下線を表示する
        showAddLine(toneNumber)

    }
}


function setFlat(toneNumber){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');

        //条件に合えば♭を表示する
        if(toneNumber === 6 || toneNumber === 8 || toneNumber === 10 || toneNumber === 13 || toneNumber === 15 || toneNumber === 18 || toneNumber === 20 || toneNumber === 22 || toneNumber === 25 || toneNumber === 27 || toneNumber === 32 || toneNumber == 34){

            ctx.drawImage(flatImg, flatRightPosX, flatPosYs[toneNumber], flatWidth, flatHeight)
        }
    }
}

function setSharp(toneNumber){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        
        //条件に合えば♯を表示する
        if(toneNumber === 13 || toneNumber === 15 || toneNumber === 18 || toneNumber === 20 || toneNumber === 25 || toneNumber === 27 || toneNumber === 30 || toneNumber === 32 ){
            ctx.drawImage(sharpImg, sharpRightPosX, sharpPosYs[toneNumber], sharpWidth, sharpHeight)
        }
    }
}


function setBaseAssets(){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');


        //線を引く
        ctx.fillRect(viewWidth*0.01, viewHeight*0.28, viewWidth*0.98, viewHeight*0.01);
        ctx.fillRect(viewWidth*0.01, viewHeight*0.36, viewWidth*0.98, viewHeight*0.01);
        ctx.fillRect(viewWidth*0.01, viewHeight*0.44, viewWidth*0.98, viewHeight*0.01);
        ctx.fillRect(viewWidth*0.01, viewHeight*0.52, viewWidth*0.98, viewHeight*0.01);
        ctx.fillRect(viewWidth*0.01, viewHeight*0.60, viewWidth*0.98, viewHeight*0.01);
        //ctx.drawImage(testImg, 0, 0, viewWidth, viewHeight);

        //ト音記号
        ctx.drawImage(gClefImg, viewWidth*0.02, viewHeight*0.17, viewWidth*0.09, viewHeight*0.57);    
    }
}


function changeChord(){
    clearAll()
    setBaseAssets()
    var toneNumber = document.ChordForm.RootKey.selectedIndex

    if (toneNumber > 7) {
        toneNumber = toneNumber - 12
    }

    var transNumber = document.ChordForm.Trans.selectedIndex
    setMajorChord(toneNumber+12, transNumber)
}


function clearAll(){
    var canvas = document.getElementById('contents');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, viewWidth, viewHeight)
    }
}

function showAddLine(toneNumber){

    if (toneNumber === 32 || toneNumber === 33) {
        ctx.fillRect(addLineLeftPosX, addLineHighPosYs[0], addLineWidth, addLineHeight)
    }
    if (toneNumber === 34 || toneNumber === 35) {
        ctx.fillRect(addLineLeftPosX, addLineHighPosYs[0], addLineWidth, addLineHeight)
    }


    if(toneNumber === 12 || toneNumber === 11 || toneNumber === 10){
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[0], addLineWidth, addLineHeight)
    }else if(toneNumber === 9 || toneNumber === 8){
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[0], addLineWidth, addLineHeight)
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[1], addLineWidth, addLineHeight)
    }else if(toneNumber === 6){
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[0], addLineWidth, addLineHeight)
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[1], addLineWidth, addLineHeight)
    }else if(toneNumber === 5){
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[0], addLineWidth, addLineHeight)
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[1], addLineWidth, addLineHeight)
        ctx.fillRect(addLineLeftPosX, addLineUnderPosYs[2], addLineWidth, addLineHeight)
    }
}



function setMajorChord(toneNumber,transNumber){

    var firstToneNumber = toneNumber;
    var secondToneNumber = firstToneNumber + 4;
    var thirdToneNumber = firstToneNumber + 7;

    //スケール用の設定
    ctx.drawImage(wholeNoteImg, scaleTonePos[0], tonePosYs[toneNumber], toneWidth, toneHeight)
    ctx.drawImage(wholeNoteImg, scaleTonePos[1], tonePosYs[secondToneNumber], toneWidth, toneHeight)
    ctx.drawImage(wholeNoteImg, scaleTonePos[2], tonePosYs[thirdToneNumber], toneWidth, toneHeight)

    //転調用メソッド
    if (transNumber == 1) {
        firstToneNumber = firstToneNumber + 12
    }
    if (transNumber == 2) {
        firstToneNumber = firstToneNumber + 12
        secondToneNumber = secondToneNumber + 12
    }

    if(toneNumber == 0){

    }else if (toneNumber === 5) {
        //F
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 6) {
        //G♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 7) {
        //G
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 8) {
        //A♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 9) {
        //A
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 10) {
        //B♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if (toneNumber === 11) {
        //B
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,1,0)
    }else if (toneNumber === 12) {
        //C
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 13){
        //C♯,D♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 14){
        //D
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 15){
        //E♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 16){
        //E
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 17){
        //F
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)

    }else if(toneNumber === 18){
        //G♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)

    }else if(toneNumber === 19){
        //G
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 20){
        //A♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 21){
        //A
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 22){
        //B♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 23){
        //B
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,1,0)
    }else if(toneNumber === 24){
        //C
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 25){
        //D♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 26){
        //D
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 27){
        //E♭
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,0,0)
        showTone(thirdToneNumber,0,0)
    }else if(toneNumber === 28){
        //E
        showTone(firstToneNumber,0,0)
        showTone(secondToneNumber,1,0)
        showTone(thirdToneNumber,0,0)
    }
}
