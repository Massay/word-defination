<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">Teacher</h1>
      </div>
      <div class="col-md-12">
        <b-tabs content-class="mt-3">
          <b-tab title="Add Word">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <form @submit.prevent="addToList">
                    <div class="form-group">
                      <label for="word">Word</label>
                      <input
                        type="text"
                        required
                        name="word"
                        v-model="word"
                        placeholder="Word"
                        class="form-control"
                      />
                    </div>

                    <div class="form-group">
                      <label for="word">Defination</label>
                      <textarea
                        name=""
                        v-model="def"
                        class="form-control"
                        id=""
                        cols="30"
                        required
                        rows="10"
                      ></textarea>
                    </div>

                    <button class="btn btn-primary btn-block">
                      Add to List
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Print List of Added Words">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Word</th>
                  <th scope="col">Defination</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in wordsList" :key="index">
                  <th scope="row">{{ item.id }}</th>
                  <td>{{ item.word }}</td>
                  <td>{{ item.def }}</td>
                </tr>
              </tbody>
            </table>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      wordsList: "wordStore/words",
    }),
  },
  data() {
    return {
      word: "",
      def: "",
      id: null,
    };
  },
  methods: {
    addToList() {
      if (this.word.length <= 0 || this.def.length <= 0) {
        alert("You must enter a word and a defination!");
        return;
      }
      let form = {
        word: this.word,
        def: this.def,
        id: this.uid,
      };
      this.$store.dispatch("wordStore/addWordDefination", form);
      this.word = "";
      this.def = "";
      alert("Added Succesfully!");
    },
  },
};
</script>
