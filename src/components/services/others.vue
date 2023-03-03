<template>
  <div>
    <!--其他加購-->
    <div v-if="filter(['h', 'i'])">
      <el-divider content-position="left">其他加購項目</el-divider>
      <div class="others">
        <table v-if="filter(['h'])">
          <thead>
            <tr>
              <td>價格</td>
              <td>項目</td>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filter(['a', 'b'])">
              <td>$500/人</td>
              <td>多一位大人入鏡拍攝（不含服裝造型）</td>
            </tr>
            <tr v-if="filter(['a', 'b'])">
              <td>$1000/人</td>
              <td>多一位大人加妝髮</td>
            </tr>
            <tr v-if="filter(['a', 'b'])">
              <td>一套$600/人</td>
              <td>多一位大人服裝租借<span>(註1)</span></td>
            </tr>
            <tr v-if="filter(['a', 'b'])">
              <td>$500/人</td>
              <td>
                多一位小朋友拍攝（含1套服裝搭配1種造型）<span>(註2)</span>
              </td>
            </tr>
            <tr v-if="filter(['a', 'b'])">
              <td>$1000/人</td>
              <td>
                多一位小朋友拍攝（含2套服裝搭配2種造型）<span>(註2)</span>
              </td>
            </tr>
            <tr v-if="filter(['e', 'f', 'g', 'h', 'i'])">
              <td>$500/$800</td>
              <td>彌月卡（50/100張）</td>
            </tr>
          </tbody>
        </table>
        <div class="others-notes">
          <li v-if="filter(['a', 'b'])">註1:服裝僅提供黑色西裝以及禮服</li>
          <li v-if="filter(['a', 'b'])">
            註2:小朋友年齡限制為0-11歲，滿12(含)歲以上算大人
          </li>
        </div>
      </div>
    </div>
    <p style="color: red; font-size: 18px; margin: 10px 0">
      拍攝成品需自取，如需郵寄宅配到府貨，需自行負擔郵費
    </p>
    <!--拍攝注意事項-->
    <el-collapse v-model="activeCollapse">
      <el-collapse-item
        name="0"
        v-if="filter(['c', 'd', 'e', 'f', 'g', 'h', 'i'])"
      >
        <template slot="title">
          <div class="collspse-title">
            <i class="header-icon el-icon-info"></i>拍攝注意事項
          </div>
        </template>
        <div class="content">
          <ol>
            <li>訂單贈品如遇不可抗力因素缺貨，本公司將以等值商品替代。</li>
            <li>
              拍攝完成後，修片時間需<b>一個月工作天</b>，如需製作彌月卡，請事先挑選一張照片製作。
            </li>
            <!-- <li>
              修片完成會以「雲端方式」先行選產品，挑選
              <b v-if="id == 'a'">30</b>
              <b v-else>20</b>
              張照片入本
              <span v-if="filter(['b'])"
                >；再挑選<b>1</b>張做成相框(橫豎不限)</span
              >
              。以上照片挑選都必須提供編號給我們，避免挑選錯誤。
            </li> -->
            <!-- <li>注意！<b>照片挑選完畢後將「不再校稿」直接製作產品。</b></li> -->
          </ol>
        </div>
      </el-collapse-item>
      <el-collapse-item name="1" v-if="filter(['a', 'b', 'h'])">
        <template slot="title">
          <div class="collspse-title">
            <i class="header-icon el-icon-info"></i>到棚拍攝注意事項
          </div>
        </template>
        <div class="content">
          <ol>
            <li v-if="filter(['i'])">
              大人若是入鏡拍攝，需自備一套服裝，和小朋友其中一套服裝做拍攝，如需和小朋友兩套服裝做拍攝，需加價一套$500/人。
            </li>
            <li>本公司全程<b>禁止側拍側錄</b>。</li>
            <li>
              拍攝完成後隔一週後可預約時間挑選照片，挑選照片需到工作室挑選，時段為晚上18:00及19:30兩種時段，於拍攝完成後預約時間。
            </li>
            <li>訂單贈品如遇不可抗力因素缺貨，本公司將以等值商品替代。</li>
            <li>
              本公司全館<b>禁止攜帶寵物</b>，如要攜帶寵物，請放置於外出籠/包裡，不可落地。
            </li>
          </ol>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2" v-if="filter(['a', 'b', 'c', 'd', 'h', 'i'])">
        <template slot="title">
          <div class="collspse-title">
            <i class="header-icon el-icon-info"></i>貼心提醒
          </div>
        </template>
        <div class="content">
          <ol>
            <li>拍攝當日請讓小朋友吃飽睡飽才有精神拍照。</li>
            <li>如果小朋友生病不舒服，請主動告知並延期拍攝。</li>
            <li>可攜帶小朋友熟悉的物品或玩具，準備零食。</li>
            <li>
              如想穿自己的便服可以自備，選擇工作室提供之服裝或自備服裝，總共拍攝兩套。
            </li>
            <li>小朋友身上不要有任何紋身貼紙、蓋章等記號。</li>
            <li>帶具有代表性或特殊意義的玩偶、物品等一同入鏡。</li>
          </ol>
        </div>
      </el-collapse-item>
      <!--START:證件照貼心提醒-->
      <el-collapse-item
        name="2"
        v-if="filter(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i'])"
      >
        <template slot="title">
          <div class="collspse-title">
            <i class="header-icon el-icon-info"></i>貼心提醒
          </div>
        </template>
        <div class="content">
          <ol>
            <li>如果生病身體不舒服精神欠佳，請主動告知並延期拍攝。</li>
            <li>身上不要有任何紋身貼紙、蓋章等記號。</li>
            <li>不能配戴有色隱形眼鏡。</li>
            <li>不能配戴粗框、會反光的眼鏡</li>
          </ol>
        </div>
      </el-collapse-item>
      <!--END:證件照貼心提醒-->
      <el-collapse-item name="3" v-if="filter(['e', 'f', 'g', 'h', 'i'])">
        <template slot="title">
          <div class="collspse-title">
            <i class="header-icon el-icon-info"></i>新生兒方案貼心提醒
          </div>
        </template>
        <div class="content">
          <ol>
            <li>拍攝當日請讓小朋友吃飽睡飽才有精神拍照。</li>
            <li>如果小朋友生病不舒服，請主動告知並延期拍攝。</li>
            <li>小朋友重要物品一定要記得攜帶，例如：尿布、奶嘴、奶瓶等。</li>
            <li>小朋友身上不要有任何紋身貼紙、蓋章等記號。</li>
            <li>帶具有代表性或特殊意義的玩偶、物品等一同入鏡。</li>
          </ol>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="contact">
      <el-divider content-position="left">馬上聯絡我們</el-divider>
      <el-row :gutter="10">
        <el-col :xs="24" :span="8">
          <a
            class="el-button el-button--primary"
            style="color:#fff"
            href="https://www.facebook.com/YesManphotographyStudio"
            target="_blank"
            >Facebook 私訊</a
          ></el-col
        >
        <el-col :xs="24" :span="8">
          <a
            class="el-button el-button--success"
            style="color:#fff"
            href="https://lin.ee/nScZxpE"
            target="_blank"
            >+LINE好友</a
          ></el-col
        >
        <el-col :xs="24" :span="8">
          <a class="el-button" href="tel:02-22988017"
            ><i class="el-icon-phone"></i> 02-22988017</a
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "services-others",
  data() {
    return {
      activeCollapse: ["0", "1", "2", "3"],
      id: this.$route.query.s,
    };
  },
  watch: {
    $route(to) {
      console.log("to", to.query.s);
      this.id = to.query.s;
    },
  },
  methods: {
    filter(ary) {
      return !ary.includes(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.others {
  margin-bottom: 30px;
  table {
    width: 100%;
    background: white;
    thead {
      background: #eee;
      td {
        padding: 10px 8px;
        font-weight: 500;
      }
    }
    tr {
      border-bottom: 1px solid #e2e2e2;
      &:nth-child(even) {
        background: #f3f3f3;
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
    }
    td {
      font-weight: 300;
      padding: 10px 8px;
    }
  }
  .others-notes {
    display: block;
    width: 100%;
    font-size: 13px;
    line-height: 16px;
    padding: 8px;
    p {
      line-height: 20px;
      color: red;
      font-size: 18px;
      margin: 10px 0;
    }
  }
}
.contact {
  a {
    margin-bottom: 5px;
    display: block;
    width: 100%;
  }
}
.collspse-title {
  font-size: 1.1rem;
}
.content {
  ol {
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    li {
      list-style: decimal;
      margin-bottom: 5px;
      line-height: 20px;
      font-size: 1rem;
      color: #333;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .others {
    margin-bottom: 30px;
    overflow-x: scroll;
    table {
      min-width: 500px;
      overflow: scroll-y;
      td {
        font-weight: normal;
      }
    }
    .others-notes {
      font-size: 14px;
    }
  }

  .content {
    ol {
      padding-left: 30px;
      padding-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: black;
      li {
        list-style: decimal;
        margin-bottom: 5px;
        line-height: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        b {
          color: rgb(243, 81, 81);
        }
      }
    }
  }
}
</style>
