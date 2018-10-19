<template>
  <div class="hacker-news-list">
    <div class="con">
      <div class="tr" v-for="item in addRecord">
        <div class="cell">{{ item.user_id }}</div>
        <div class="cell">{{ item.join_money }}</div>
        <div class="cell">
          <span>{{ item.time[0] }}</span>
          <br/>
          <span>{{ item.time[1] }}</span>
        </div>
      </div>
    </div>
    <div></div>
    <div class="mm">
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" spinner="bubbles">
        <span slot="no-more">123</span>
        <span slot="no-results">212</span>
      </infinite-loading>
    </div>
  </div>    
</template>


<script>
import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios';

// const api = 'http://new-sit.test.htouhui.com:55643/api/h5/product/loan_invest_history?loan_id=20181016000002&page_no=1&page_size=10';
const api = 'http://new-sit.test.htouhui.com:55643/api/h5/product/loan_invest_history';

export default {
  data() {
    return {
      addRecord:[],
      paramFetchAddRecord: {
        loan_id: '20180910000009',
        page_no: 1,
        page_size: 10
      },
    };
  },
  methods: {
    infiniteHandler($state) {
      console.log('infiniteHandler');
      axios.get(api, {params:this.paramFetchAddRecord,headers:{leo_source:'h5'}}).then((data) => {
        const status = data.status;
          if (status === 200) {
            if (data.data && data.data.data.data.length !== 0) {
              console.log(data.data.data.data);
              const data_addRecord = data.data.data.data;
              data_addRecord.forEach(item => {
                item.time = item.join_time.split(' ');
                item.time[0] = item.time[0].replace(/-/g, '/');
              });
              this.addRecord = this.addRecord.concat(data_addRecord);
              this.paramFetchAddRecord.page_no++;
              $state.loaded();
            } else {
              $state.complete();
            }
        }
      });
    }
  },
  components: {
    InfiniteLoading,
  },
};
</script>

<style>
</style>
