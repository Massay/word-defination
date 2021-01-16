<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Student Menu</h2>
        <p>Now lets link the word(s) to their correct descriptions</p>
      </div>
      <div class="col-md-12">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2>Words</h2>
              <button
              :disabled='disabledWordsColumn'
                class="btn btn-block mx-1 text-white"
                  style="background:#715DD6"
                  @click="selectWord(word)"
                v-for="(item, index) in shuffleItems(wordsList)"
                :key="index"
              >
                {{ item.word }}
              </button>
            </div>
            <div class="col-md-6">
              <h2>Definations</h2>
              <button
                :disabled='disabledWordsColumn'
                 @click="selectDef(word)"
                class="btn btn-block mx-1"
                style="background:#00B36F"
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
    data(){
         return {
              disabledWordsColumn:false,
              disabledDefColumn:false,
         }
    },
    methods: {
         shuffleItems(data){
             for (var a = 0; a < data.length; a++) {
                        var x = data[a];
                        var y = Math.floor(Math.random() * (a + 1));
                        data[a] = data[y];
                        data[y] = x;
                }

                return data;
         },
         selectWord(word){
             console.log('word word', word);
                this.disabledWordsColumn = true;
         },
          selectDef(word){
                 console.log('def word', word);
                this.disabledDefColumn = true;
         }
    },
  computed: {
    ...mapGetters({
      wordsList: "wordStore/words",
    }),
  },
};
</script>
