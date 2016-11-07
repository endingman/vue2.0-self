<template>
  <div id="app">
    <div>
      <p>store root</p>
      Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
    </div>
    <div>
      <p>moduleA</p>
      Clicked: {{ $store.state.moduleA.count }} times, count is {{ evenOrOdd2 }}.
      <button @click="increment2">+</button>
      <button @click="decrement2">-</button>
      <button @click="incrementIfOdd2">Increment if odd</button>
      <button @click="incrementAsync2">Increment async</button>
    </div>
    <div>
      <p>ajax</p>
      <button @click="user_list">ajax_get_list</button>
      <button @click="user_info">ajax_get_info</button>
      <button @click="user_post">ajax_create</button>
      <button @click="user_put">ajax_update</button>
      <button @click="user_delete">ajax_delete</button>
      <p>后台数据以laravel初始表,过程请看log</p>
      <p>
      <table style="margin: auto">
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
          <th>updated_at</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in $store.state.moduleA.user">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.created_at}}</td>
          <td>{{item.updated_at}}</td>
        </tr>
        </tbody>
      </table>
      </p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'evenOrOdd',
        'evenOrOdd2'
      ])
    },
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
      'increment2',
      'decrement2',
      'incrementIfOdd2',
      'incrementAsync2',

      'user_list',
      'user_info',
      'user_post',
      'user_put',
      'user_delete',
    ])
  }
</script>