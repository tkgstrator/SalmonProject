<template>
  <div class="home">
    <h1>アスファルトサーモンラン切りつけるタイヤ大会</h1>
    <v-container>
      <h2>
        あのドナルド・トランプ氏も大絶賛、全米を感動の涙で覆い尽くしたタイヤ大会。その成功の秘密に迫る！！
      </h2>
      <p>
        「タイヤ大会の最も優れているところは真の意味で誰でも参加できるというところにのみフォーカスしたところだと思います」とトランプ氏の側近は語る。
      </p>
      <p>
        「結果発表が待ち遠しくて眠れなかったよ」と興奮気味に取材に応じてくれたのは東京都在住のPNシロナガスクジラさん。
      </p>
      <h2>いよいよ、結果発表です！！！！</h2>
      <button><router-link to="/result">結果を見る</router-link></button>
    </v-container>
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

.v-application a {
  color: #eeeeee;
  font-size: 1.2em;
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