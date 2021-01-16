<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Teacher</h1>
        <!-- {{ wordsList }} -->
      </div>
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

          <button class="btn btn-primary btn-block">Add to List</button>
        </form>
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
      //    this.form.id = this.uid;

      let form = {
        word: this.word,
        def: this.def,
        id: this.uid,
      };
      this.$store.dispatch("wordStore/addWordDefination", form);
      this.word = ''
       this.def = ''
    },
  },
};
</script>
