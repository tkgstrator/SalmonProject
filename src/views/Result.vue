<template>
  <v-container>
    <div class="ranking">
      <h1>結果発表！！！</h1>
      <p>
        栄えある第一回アスファルトサーモンラン切りつけるタイヤ大会を制したのはしろみさんでした！！！
      </p>
      <p>
        取り調べに対ししろみ氏は<font color="red"
          >「そんなつもりはなかった」「第二回大会に出場していた」</font
        >などと供述しており、運営では第二回大会の開催も視野に入れた上で慎重に捜査を続けていく方針です。
      </p>
      <div class="data">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="50"
          :mobile-breakpoint="360"
          dark
          hide-default-footer
          sort-by="rank"
        ></v-data-table>
      </div>
      <h1>優勝者の選定方法</h1>
      <p>
        誰しもが納得できるように以下のPythonコードで優勝者を決定いたしました。
      </p>
      <highlight-code auto>
        <pre>
        import random
if __name__ == "__main__":
    users = ["ダスティン", "しろみ", "コンテナ", "えす", "ふるた", "せもたれ", "アルフ", "@ryuuu", "たか", "くっきー"]

    random.shuffle(users)
    print(users)
      </pre
        >
      </highlight-code>
    </div>
  </v-container>
</template>

<script>
import { db } from '../plugins/firebase';

export default {
  data() {
    return {
      pagination: {
        sortBy: "rank",
        descending: false,
        rowsPerPage: -1,
      },
      users: [],
      headers: [
        {
          text: "Player",
          value: "name",
          align: "center",
        },
        {
          text: "Asphalt",
          value: "asphalt",
          align: "center",
        },
        {
          text: "Rank",
          value: "rank",
          align: "center",
          sortable: true,
        },
      ],
    }
  },
  watch: {
    users: {
      immediate: false,
      handler() {
        this.users.forEach(async function (user, index, users) {
          let p = users[index]["power_eggs"]
          let g = users[index]["golden_eggs"]
          let t = users[index]["asphalt"]
          users[index]["score"] = Math.round((p * 100 + g) / t * 100) / 100
          console.log(user.id, index, users)
        })
      }
    }
  },
  async mounted() {
  },
  firestore() {
    return {
      users: db.collection("users")
    }
  }
}
</script>

<style scoped>
.data {
  display: inline-block;
  width: 90%;
  max-width: 800px;
}
.ranking h1 {
  font-family: "Splatfont";
}

.v-data-table {
  font-family: "Splatfont2";
  font-size: 20px !important;
}

.v-data-table > .v-data-table__wrapper > table > thead > tr > th {
  all: unset;
}

p {
  font-family: "Splatfont";
  font-size: 1.1em;
}

pre {
  display: inline-block;
  text-align: left !important;
}
</style>

<style>
.v-application code {
  background-color: #191919;
}
</style>