// - 問題4: **配列内の特定の要素をトグルする関数を作ろう**
//    数値か文字列の要素を持つ配列と検索する要素(数値か文字列)を引数として受け取り、
//    配列内に指定された要素が存在するかどうかを判断して
//    要素があった場合はその要素を削除してください。なかった場合は配列の最後尾に追加してください。

//引数の例
// 1. array: [1,2,3,4,5], ele: 4
// 2. array: [1,2,"3",4,5], ele:3
//返り値の例
// 1. [1,2,3,5]
// 2. [1,2,"3",4,5,3]

/**
 * @param {(string|number)[]} array
 * @param {string|number} ele
 *  @return {(string|number)[]}
 */
export const toggleArrayElement = (array, ele) => {
  //ここに記述
  let array2 = [];

  array.forEach(v => {
    if(v !== ele) {
      array2 = [...array, ele];
    } else {
      array2 = array.filter(val => val === ele);
    }
  });

  return array2;
};




// let array2 = [];

//   array.forEach((v,i) => {
//     if (v === ele) {
//       array2 = array.splice(i, 1);
//     } else {
//       array2 = array.push(ele);
//     }
//   });
//   return array2;
