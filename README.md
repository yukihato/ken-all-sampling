# ken-all-sampling

日本郵便サイトからダウンロードできる郵便番号データから、要注意データをピックアップして表示するツールです。
下記のそれぞれのパターンについて、ランダムで表示します。

### type1: 一町域が二以上の郵便番号で表される場合
```
$ node index.js type1
{
  type1: [
    {
      x0401: '01564',
      oldPostcode: '09932',
      postcode: '0993232',
      prefKana: 'ﾎｯｶｲﾄﾞｳ',
      cityKana: 'ｱﾊﾞｼﾘｸﾞﾝｵｵｿﾞﾗﾁｮｳ',
      townKana: 'ﾋｶﾞｼﾓｺﾄｽｴﾋﾛ',
      pref: '北海道',
      city: '網走郡大空町',
      town: '東藻琴末広',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 1
    },
    {
      x0401: '01564',
      oldPostcode: '09932',
      postcode: '0993243',
      prefKana: 'ﾎｯｶｲﾄﾞｳ',
      cityKana: 'ｱﾊﾞｼﾘｸﾞﾝｵｵｿﾞﾗﾁｮｳ',
      townKana: 'ﾋｶﾞｼﾓｺﾄﾔﾏｿﾞﾉ',
      pref: '北海道',
      city: '網走郡大空町',
      town: '東藻琴山園',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 1
    }
  ]
}
```

### type2: 一つの郵便番号で二以上の町域を表す場合
```
$ node index.js type2
{
  type2: [
    {
      x0401: '01398',
      oldPostcode: '04404',
      postcode: '0440461',
      prefKana: 'ﾎｯｶｲﾄﾞｳ',
      cityKana: 'ｱﾌﾞﾀｸﾞﾝｷﾓﾍﾞﾂﾁｮｳ',
      townKana: 'ﾅｶｻﾄ',
      pref: '北海道',
      city: '虻田郡喜茂別町',
      town: '中里',
      flag1: '0',
      flag2: '0',
      flag3: '0',
      flag4: '1',
      flag5: '0',
      flag6: '0',
      multiple: 2
    },
    {
      x0401: '01398',
      oldPostcode: '04404',
      postcode: '0440461',
      prefKana: 'ﾎｯｶｲﾄﾞｳ',
      cityKana: 'ｱﾌﾞﾀｸﾞﾝｷﾓﾍﾞﾂﾁｮｳ',
      townKana: 'ﾌｸｻﾄ',
      pref: '北海道',
      city: '虻田郡喜茂別町',
      town: '福里',
      flag1: '0',
      flag2: '0',
      flag3: '0',
      flag4: '1',
      flag5: '0',
      flag6: '0',
      multiple: 2
    }
  ]
}
```
### type3: 町域部分の文字数が38文字を越える場合
```
$ node index.js type3
{
  type3: [
    {
      x0401: '46201',
      oldPostcode: '89112',
      postcode: '8911275',
      prefKana: 'ｶｺﾞｼﾏｹﾝ',
      cityKana: 'ｶｺﾞｼﾏｼ',
      townKana: 'ｶﾜｶﾐﾁｮｳ(3649､3661､3667､3669-4､3671､3672､3',
      pref: '鹿児島県',
      city: '鹿児島市',
      town: '川上町（３６４９、３６６１、３６６７、３６６９－４、３６７１、３６７２、３',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 4
    },
    {
      x0401: '46201',
      oldPostcode: '89112',
      postcode: '8911275',
      prefKana: 'ｶｺﾞｼﾏｹﾝ',
      cityKana: 'ｶｺﾞｼﾏｼ',
      townKana: '674､3701､3704､3723-3､4128､4132､4133､4',
      pref: '鹿児島県',
      city: '鹿児島市',
      town: '６７４、３７０１、３７０４、３７２３－３、４１２８、４１３２、４１３３、４',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 4
    },
    {
      x0401: '46201',
      oldPostcode: '89112',
      postcode: '8911275',
      prefKana: 'ｶｺﾞｼﾏｹﾝ',
      cityKana: 'ｶｺﾞｼﾏｼ',
      townKana: '138､4203､4209､4215､4236-1､4238､4241､4',
      pref: '鹿児島県',
      city: '鹿児島市',
      town: '１３８、４２０３、４２０９、４２１５、４２３６－１、４２３８、４２４１、４',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 4
    },
    {
      x0401: '46201',
      oldPostcode: '89112',
      postcode: '8911275',
      prefKana: 'ｶｺﾞｼﾏｹﾝ',
      cityKana: 'ｶｺﾞｼﾏｼ',
      townKana: '242､4244ﾊﾞﾝﾁ)',
      pref: '鹿児島県',
      city: '鹿児島市',
      town: '２４２、４２４４番地）',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 4
    }
  ]
}
```

### type4: 想定しない記号が入っている（`（）「」、ー－～・`以外）

```
$ node index.js type4
{
  type4: [
    {
      x0401: '23221',
      oldPostcode: '44113',
      postcode: '4411336',
      prefKana: 'ｱｲﾁｹﾝ',
      cityKana: 'ｼﾝｼﾛｼ',
      townKana: 'ﾄﾐｵｶ(ﾔｼｷﾁｸ)',
      pref: '愛知県',
      city: '新城市',
      town: '富岡（○○屋敷）',
      flag1: '1',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 1
    }
  ]
}
```
### type5: 「その他」系（その他|場合|除く|以外|不明|一円|全域）
```
$ node index.js type5
{
  type5: [
    {
      x0401: '13103',
      oldPostcode: '105  ',
      postcode: '1056490',
      prefKana: 'ﾄｳｷｮｳﾄ',
      cityKana: 'ﾐﾅﾄｸ',
      townKana: 'ﾄﾗﾉﾓﾝﾄﾗﾉﾓﾝﾋﾙｽﾞﾋﾞｼﾞﾈｽﾀﾜｰ(ﾁｶｲ･ｶｲｿｳﾌﾒｲ)',
      pref: '東京都',
      city: '港区',
      town: '虎ノ門虎ノ門ヒルズビジネスタワー（地階・階層不明）',
      flag1: '0',
      flag2: '0',
      flag3: '0',
      flag4: '0',
      flag5: '0',
      flag6: '0',
      multiple: 1
    }
  ]
}
```


※tsvフォーマットでも出力できます。
```
$ node index.js type4 tsv
全国地方公共団体コード  （旧）郵便番号（5桁）   郵便番号（7桁） 都道府県名（カナ）      市区町村名（カナ）      町域名（カナ）  都道府県名      市区町村名
町域名  一町域が二以上の郵便番号で表される場合の表示    小字毎に番地が起番されている町域の表示  丁目を有する町域の場合の表示    一つの郵便番号で二以上の町
域を表す場合の表示      更新の表示      変更理由
07543   97906   9790622 ﾌｸｼﾏｹﾝ  ﾌﾀﾊﾞｸﾞﾝﾄﾐｵｶﾏﾁ   ｹｶﾞﾔ(ﾏｴｶﾜﾊﾗ232-244､311､312､337-862ﾊﾞﾝﾁ  福島県  双葉郡富岡町    毛萱（前川原２３２～２４４、３１１、３１２
、３３７～８６２番地    1       1       0       0       0       0       2
07543   97906   9790622 ﾌｸｼﾏｹﾝ  ﾌﾀﾊﾞｸﾞﾝﾄﾐｵｶﾏﾁ   ﾄｳｷｮｳﾃﾞﾝﾘｮｸﾌｸｼﾏﾀﾞｲ2ｹﾞﾝｼﾘｮｸﾊﾂﾃﾞﾝｼｮｺｳﾅｲ)  福島県  双葉郡富岡町    〔東京電力福島第二原子力発電所構内〕）  1 
1       0       0       0       0       2
```
