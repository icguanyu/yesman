<template>
  <div>
    <el-divider content-position="left">其他加購項目</el-divider>
    <div class="others">
      <table>
        <thead>
          <tr>
            <td>項目</td>
            <td>價格</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>多一位大人入鏡拍攝（不含服裝造型）</td>
            <td>$500/人</td>
          </tr>
          <tr>
            <td>多一位大人加妝髮 </td>
            <td>$1000/人</td>
          </tr>
          <tr>
            <td>多一位大人服裝租借<span>註1</span></td>
            <td> 一套$600/人</td>
          </tr>
          <tr>
            <td>多一位小朋友拍攝（含一套服裝搭配一種造型）<span>註2</span></td>
            <td> $500/人</td>
          </tr>
          <tr>
            <td>多一位小朋友拍攝（含兩套服裝搭配兩種造型）<span>註2</span></td>
            <td>$1000/人</td>
          </tr>
          <tr>
            <td>加選電子檔</td>
            <td>$500/張</td>
          </tr>
          <tr>
            <td>加選入相本+電子檔</td>
            <td>$700/張</td>
          </tr>
          <div class="others-notes">
            註1:服裝僅提供黑色西裝以及禮服<br>
            註2:小朋友年齡限制為0-11歲，滿12(含)歲以上算大人<br>
            <p style="color:red;font-size: 18px;margin:10px 0;">拍攝成品需自取，如需郵寄宅配到府貨，需自行負擔郵費</p>
          </div>
        </tbody>
      </table>
    </div>
    <el-collapse v-model="activeCollapse">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="collspse-title"> 拍攝注意事項<i class="header-icon el-icon-info"></i></div>
        </template>
        <div class="content">
          <ol>
            <li>大人若是入鏡拍攝，需自備一套服裝，和小朋友其中一套服裝做拍攝，如需和小朋友兩套服裝做拍攝，需加價一套$500/人。</li>
            <li>本公司全程禁止側拍側錄。</li>
            <li>拍攝完成後隔一週後可預約時間挑選照片，挑選照片需到工作室挑選，時段為晚上18:00及19:30兩種時段，於拍攝完成後預約時間。</li>
            <li>訂單贈品如遇不可抗力因素缺貨，本公司將以等值商品替代。</li>
            <li>本公司全館禁止攜帶寵物，如要攜帶寵物，請放置於外出籠/包裡，不可落地。</li>
          </ol>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div class="collspse-title">貼心提醒<i class="header-icon el-icon-info"></i></div>
        </template>
        <div class="content">
          <ol>
            <li>拍攝當日請讓小朋友吃飽睡飽才有精神拍照。</li>
            <li>如果小朋友生病不舒服，請主動告知並延期拍攝。</li>
            <li>小朋友重要物品一定要記得攜帶，例如：尿布、奶嘴、奶瓶等。</li>
            <li>可攜帶小朋友熟悉的物品或玩具，準備零食。</li>
            <li>如想穿自己的便服可以自備，選擇工作室提供之服裝或自備服裝，總共拍攝兩套。</li>
            <li>小朋友身上不要有任何紋身貼紙、蓋章等記號。</li>
            <li>帶具有代表性或特殊意義的玩偶、物品等一同入鏡。</li>
          </ol>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "services-others",
    data() {
      return {
        activeCollapse: ["1", "2", "3"],
      };
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
      font-size: 13px;
      line-height: 16px;
      padding: 8px;
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
        }
      }
    }
  }
</style>