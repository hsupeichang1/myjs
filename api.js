//---檢查身分證字號
function checkTwId(id) {
    let ret = false;
    //正規表示法
    // let regex = /^[A-Z][12][0-9]{8}$/; //^開頭 [第一個字A-Z] [第二個字1或2][數字]{8次} $結尾
    // let res = id.match(regex); //比對

    // if (res != null) {
    //     let letter = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    //     let c12 = id.substr(0, 1);
    //     let n12 = letter.indexOf(c12) + 10;  //A=10 B=11 ...
    //     //假設有一身分證號碼為M140051653，而M轉換為數值是21，將每一碼拆開後分別編號
    //     //然後再把每一個數字依序乘上1、9、8、7、6、5、4、3、2、1、1，最後再相加
    //     let n1 = parseInt(n12 / 10);
    //     let n2 = n12 % 10; // 第二碼為餘數
    //     let n3 = parseInt(id.substr(1, 1));
    //     let n4 = parseInt(id.substr(2, 1));
    //     let n5 = parseInt(id.substr(3, 1));
    //     let n6 = parseInt(id.substr(4, 1));
    //     let n7 = parseInt(id.substr(5, 1));
    //     let n8 = parseInt(id.substr(6, 1));
    //     let n9 = parseInt(id.substr(7, 1));
    //     let n10 = parseInt(id.substr(8, 1));
    //     let n11 = parseInt(id.substr(9, 1));
    //     let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
    //     ret = sum % 10 == 0;

    // }
    // return ret;



    if (id.length == 10) {
        let c1 = id.substr(0, 1);
        let letters = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let c2 = id.substr(1, 1);
        // console.log(typeof(c2));

        if (letters.indexOf(c1) >= 0) {
            
            if (c2 == 1 || c2 == 2) {
                let n12 = letters.indexOf(c1) + 10;  //A=10 B=11 ...
                //假設有一身分證號碼為M140051653，而M轉換為數值是21，將每一碼拆開後分別編號
                //然後再把每一個數字依序乘上1、9、8、7、6、5、4、3、2、1、1，最後再相加
                let n1 = parseInt(n12 / 10);
                let n2 = n12 % 10; // 第二碼為餘數
                let n3 = parseInt(id.substr(1, 1));
                let n4 = parseInt(id.substr(2, 1));
                let n5 = parseInt(id.substr(3, 1));
                let n6 = parseInt(id.substr(4, 1));
                let n7 = parseInt(id.substr(5, 1));
                let n8 = parseInt(id.substr(6, 1));
                let n9 = parseInt(id.substr(7, 1));
                let n10 = parseInt(id.substr(8, 1));
                let n11 = parseInt(id.substr(9, 1));
                let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;
                ret = sum % 10 == 0;
            }

        }

    }
    return ret;

}


//---猜數字遊戲
function createAnswer(n) {
    let number = [];
    for (let i = 0; i < 10; i++) number[i] = i;
    for (let i = number.length - 1; i > 0; i--) {
        let rend = parseInt(Math.random() * (i + 1));

        [number[i], number[rend]] = [number[rend], number[i]];
    }

    let ret = '';
    for (let i = 0; i < n; i++)ret += number[i];
    return ret;

}

function checkAB(ans, gus) {
    let a = 0, b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) { //gus中的第i碼 等於 ans中的第i碼
            a++;
        } else if (ans.indexOf(gus.charAt(i)) >= 0) { //gus中的第i碼是否存在ans中
            b++;
        }
    }

    return a + 'A' + b + 'B';
}



//---複製物件 傳回
function clone(src){
    if(typeof(src) != 'object') return null;

     let target = new Object();//建構物件
     for( let attr in src){
         target[attr] = src[attr];
     }
     return target;
} 

