/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //ここに記述
  const elementId = document.getElementById("elementId");

  const textChange = function() {
    if (elementId === null) {
      const newElementId = document.createElement("div");
      newElementId.id = "elementId";
      elementId.textContent = text;
      body.appendChild("elementId");
    } else {
      elementId.textContent = text;
    }
  }

};
