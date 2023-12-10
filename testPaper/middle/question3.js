// - 問題3: 合計値、平均値を出そう
//    要素が数値の配列を引数として受け取り、
//    平均値(小数点第一位で四捨五入)、合計値を計算した結果のオブジェクトを返す関数を作ってください。

// 引数の例
// 1. [1,2,3,4,5]

// 返り値の例
// 1. {sum: 15,average:3}

/**
 * @param {number[]} array
 *  @return {{sum:number,average:number}}
 */
export const sumAndAverage = (array) => {
  //ここに記述
 let sum = 0;
 let average = 0;
 let length = array.length;

 for (let i = 0; i < 5; i++) {
    sum += array[i];
 }

 for (let j = 0; j < 5; j++) {
    average += array[j] / length;
 }

 return {sum, average};
};
