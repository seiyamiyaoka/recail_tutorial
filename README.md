## recoil tutorial
https://recoiljs.org/
## recoilとは
状態管理ライブラリ

## RecoilRootとは
親のノードのどこかに配置することで子で使えるのだろう

## Atomとは
stateの一つ。すべてのコンポーネントから読み書きできる。
読み取るときは暗黙的にsubscribeしている
atomを更新するstateをsubscribeしているコンポーネントが再レンダリングされる
atomにはかならず正しい値が入っている状態

## どんな風に使うのか(予想)
1. stateとなるatomを任意のコンポーネントで定義
2. ほかの箇所で使いたかったらそのatomをexport
3. そしてgetterを定義し, useRecoilValueにselectorオブジェクトを定義したら変更を検知する
