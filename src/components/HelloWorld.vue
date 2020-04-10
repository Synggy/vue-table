<template>
  <div class="hello">
    <ExpandTable :columns="column" :data="data">
      <template #status="{data:{status}}">
        <div style="backgroud-color: pink;">
          {{status}}
        </div>
      </template>
    </ExpandTable>
  </div>
</template>

<script>
import ExpandTable from './ExpandTable'
export default {
  name: 'HelloWorld',
  components: {
    ExpandTable
  },
  props: {
    msg: String
  },
  data:() => ({
    column: [
      { title: 'date', key: 'date' },
      { title: 'time', key: 'time' },
      { title: 'no', key: 'no' },
      { title: 'type', key: 'type' },
      { title: 'status', key: 'status', slot: 'status' }
    ],
    data:[
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"},
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"},
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"},
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"},
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"},
      {date: "2020-04-10", time: "20:30:58", no: "df584441", type: "string", status: "1"}
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
