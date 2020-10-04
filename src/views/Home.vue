<template>
  <div class="home">
    <h1>アスファルトサーモンラン切りつけるタイヤ大会</h1>
    <button @click="signIn" v-if="!loginUser">タイヤ大会に参加する</button>
    <h2>大会概要</h2>
    <div class="desc">
      <p>今まで開催されてきたサーモンランの大会はメンバー登録が必要だったり、DM等でのリザルトの提出が必要不可欠でした。</p>
      <p>しかしこれはリザルトの提出し忘れ・提出期限の勘違い・急なメンバー変更などで運営側・参加者側のどちらも手間がかかるものでした。</p>
      <p>
        そこで当大会（以後、タイヤ大会とする）では「そういった煩わしさから解放される方法はないか」「誰しもが実力関係なしに楽しめる大会はできないのか」という点にのみ
        フォーカスし、大会のルールや運営方針を決定しました。
      </p>
    </div>
    <h2>大会ルール</h2>
    <div class="desc">
      <!-- <v-img src="https://pbs.twimg.com/media/EiAE9TNXsAAQutg?format=jpg&name=900x900" max-width="400px"></v-img> -->
      <p>2020 9/20からの海上集落シャケト場のシフトを遊ぶだけ！四人集めてチームで参加しても、一人で参加しても大丈夫です！ややこしいチーム部門やソロ部門などはありません。</p>
      <p></p>
    </div>
    <h3>ポイント計算方法</h3>
    <div class="desc">
      <h4>
        ポイント = (
        <font color="red">赤イクラ数</font> x 100 +
        <font color="yellow">金イクラ数</font>) ÷ タイヤを切りつけた回数
      </h4>
      <p>
        今までのサーモンランの大会はいろいろ試行錯誤はされていましたが、結局のところ上手い人が上位に入賞できる大会でした。そのシステム自体を否定するつもりはありませんが、
        自分自身、一人のサーモンランプレイヤーとして「タイヤ大会を実力を完全に無視して誰もが楽しめる大会」にすることを心がけることにしました。
      </p>
      <p>
        しかし、サーモンランのスコアだけでポイントを計算するとどうしても実力がスコアに反映されてしまいます。
        そこでタイヤ大会では「サーモンランとは全く関係ない」パラメータである「タイヤを切りつけた回数」を計算式に組み込むことにより、今までのどの大会も成し得なかった
        実力主義からの完全な解放を達成しました。
      </p>
    </div>

    <h3>タイヤ大会のオリジナルルール</h3>
    <div class="desc">
      <p>タイヤ大会では恐らくサーモンランの非公式大会では初めてとなるリザルトの提出が不要な大会です。もちろん、上位を狙いたい方は良い記録が出たときに個別でリザルトを提出していただくこともできます。</p>
      <p>本大会は、リザルトの提出忘れや期限忘れにも対応するためリザルトが提出されていないプレイヤーに対して「最低限」のポイントを与えるシステムをとっています。</p>
    </div>
    <h2>リザルト提出方法</h2>
    <div class="desc">
      <p>タイヤ大会では運営コストを最小限まで減らすため、リザルトの提出は必ずしも必要ではありませんが、提出したい方向けにフォームを用意しております。</p>
      <p>以下の四つのうち、どれかでリザルトを提出ください。</p>
      <ul>
        <li>DMで大会運営責任者である@tkglingにリザルトのスクリーンショットを提出</li>
        <li>リザルトを印刷の上、郵送で提出</li>
        <li>リザルトを印刷の上、FAXで提出</li>
        <li>リザルトをZIPファイルでパスワード付き圧縮の上、メールで提出</li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../plugins/firebase";

export default {
  data() {
    return {
      users: [],
      loginUser: {}
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(async user => {
      // データベースの存在チェックをする
      this.loginUser = firebase.auth().currentUser
      if (this.loginUser) {
        let snapshot = await db.collection("users").doc(this.loginUser.uid).get()
        if (!snapshot.exists) {
          let golden_eggs = Math.floor(Math.random() * (200 + 1))
          let power_eggs = Math.floor(Math.random() * (4000 + 1))
          let asphalt = Math.floor(Math.random() * (5 + 1))
          db.collection("users")
            .doc(this.loginUser.uid)
            .set(
              {
                id: user.uid,
                name: user.displayName,
                golden_eggs: golden_eggs,
                power_eggs: power_eggs,
                asphalt: asphalt,
              },
            );
        }
      }
    });
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.TwitterAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  },
  firestore() {
    return {
      users: db.collection("users")
    }
  }
}
</script>

<style scoped>
.desc {
  display: inline-block;
  max-width: 80%;
}
ul {
  font-family: "Splatfont";
  font-size: 1.2em;
  color: aqua;
  list-style: none;
}
p {
  font-family: "Splatfont2";
  font-size: 20px;
}

h1 {
  font-family: "Splatfont";
  font-size: 2.5em;
  color: red;
}

h2 {
  padding-top: 20px;
  font-family: "Splatfont";
  font-size: 2em;
  color: orange;
}

h3 {
  padding-top: 20px;
  font-family: "Splatfont";
  font-size: 1.8em;
  color: orange;
}

h4 {
  padding: 15px;
  font-family: "Splatfont";
  font-size: 1.5em;
  border: solid #eeeeee;
  border-radius: 10px;
}
.v-image {
  margin: 0 auto;
}

button {
  padding: 5px;
  font-family: "Splatfont";
  font-size: 2em;
  border: solid #eeeeee;
  border-radius: 10px;
}
</style>