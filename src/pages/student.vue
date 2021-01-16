<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Student</h2>
      </div>
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Words</h2>
              <button
                class="btn btn-block btn-secondary mx-1"
                v-for="(item, index) in shuffleItems(wordsList)"
                :key="index"
              >
                {{ item.word }}
              </button>
            </div>
            <div class="col-md-6">
              <h2>Definations</h2>
              <button
                class="btn btn-block btn-success mx-1"
                v-for="(item, index) in shuffleItems(wordsList)"
                :key="index"
              >
                {{ item.def }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    methods: {
         shuffleItems(data){
             for (var a = 0; a < data.length; a++) {
                        var x = data[a];
                        var y = Math.floor(Math.random() * (a + 1));
                        data[a] = data[y];
                        data[y] = x;
                }

                return data;
         }
    },
  computed: {
    ...mapGetters({
      wordsList: "wordStore/words",
    }),
  },
};
</script>
