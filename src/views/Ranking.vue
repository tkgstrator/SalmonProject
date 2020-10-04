<template>
  <div class="ranking">
    <h1>RANKING</h1>
    <div class="data">
      <v-data-table :headers="headers" :items="users" :items-per-page="50" :mobile-breakpoint="360" dark hide-default-footer sort-by="score" sort-desc="false"></v-data-table>
    </div>
  </div>
</template>

<script>
import { db } from '../plugins/firebase';

export default {
  data() {
    return {
      pagination: {
        sortBy: "score",
        descending: true,
        rowsPerPage: -1,
      },
      users: [],
      headers: [
        {
          text: "Player",
          value: "name",
          align: "center",
          sortable: false,
        },
        {
          text: "Power Eggs",
          value: "power_eggs",
          align: "center",
          sortable: true,
        },
        {
          text: "Golden Eggs",
          value: "golden_eggs",
          align: "center",
          sortable: true,
        },
        {
          text: "Asphalt",
          value: "asphalt",
          align: "center",
          sortable: true,
        },
        {
          text: "Score",
          value: "score",
          align: "center",
          sortable: true,
        },
      ]
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
</style>