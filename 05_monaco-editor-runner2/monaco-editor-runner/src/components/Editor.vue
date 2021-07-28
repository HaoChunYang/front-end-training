<template>
  <div>
    <button @click="toRun">Run</button>
    <div
      class="editor"
      ref="container"
    ></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
export default {
  name: 'Editor',
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    if (this.$refs.container) {
      this.editor = monaco.editor.create(this.$refs.container, {
        value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
        language: "javascript",
      });
    }
  },
  methods: {
    toRun () {
      console.log(this.editor.getValue())
      const filePath = require('path').join(__dirname, 'editorFiles/tmp.js')
      require('fs').writeFile(filePath, this.editor.getValue(), err => {
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>
.editor {
  width: 50vw;
  height: 60vh;
  border: 1px solid grey;
  display: inline-block;
}
</style>