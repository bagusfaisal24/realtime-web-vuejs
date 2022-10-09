
<template>
<div>
 <h1>Ajax Call Demo</h1>
 <h3>Jumlah Notif Belum dibaca =  {{this.notYetRead}} </h3>
 <br>
 <div>
    <table>
      <thead>
      <tr>
        <th>Name Notif</th>
        <th>Date</th>
        <th>Flag read</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(obj,i) in data" :key="i">
        <td>{{obj.name}}</td>
        <td>{{obj.time}}</td>
        <td>{{obj._read ? 'dibaca' : 'belum'}}</td>
      </tr>
      </tbody>
    </table>
 </div>
</div>
</template>
<script>
import DataSvc from '../service/dataSvc'


export default {
  data(){
    return{
      data:[],
      notYetRead:0
    }
  },
  created(){
      window.setInterval(() => {
        this.getNotif(); // call any function or end point
      }, 1000 * 60); // interval set to one sec. 
  },
  methods:{
    async getNotif(){
      const data = {
        filter:null
      }
      await DataSvc.getNotif(data)
          .then((r) => {
            this.data = r.data.data
            const a = this.data.filter(v => !v._read)
            this.notYetRead = a.length;
          });
    }
  },
}
</script>
