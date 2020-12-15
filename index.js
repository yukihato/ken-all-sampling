'use strict'

const axios = require('axios')
const fs = require('fs')
const AdmZip = require('adm-zip')
const iconv = require('iconv-lite')
iconv.skipDecodeWarning = true
const csvSync = require('csv-parse/lib/sync')

const headers = [
    'x0401',
    'oldPostcode',
    'postcode',
    'prefKana',
    'cityKana',
    'townKana',
    'pref',
    'city',
    'town',
    'flag1',
    'flag2',
    'flag3',
    'flag4',
    'flag5',
    'flag6'
]
const description = [
    '全国地方公共団体コード',
    '（旧）郵便番号（5桁）',
    '郵便番号（7桁）',
    '都道府県名（カナ）',
    '市区町村名（カナ）',
    '町域名（カナ）',
    '都道府県名',
    '市区町村名',
    '町域名',
    '一町域が二以上の郵便番号で表される場合の表示',
    '小字毎に番地が起番されている町域の表示',
    '丁目を有する町域の場合の表示',
    '一つの郵便番号で二以上の町域を表す場合の表示',
    '更新の表示',
    '変更理由'
]
const url = 'https://www.post.japanpost.jp/zipcode/dl/kogaki/zip/ken_all.zip'
const zip = './ken_all.zip'
const dir = './ken_all'
const csv = `${dir}/KEN_ALL.csv`
const type = process.argv[2] || 'all'
const format = process.argv[3] || 'json'

const main = async () => {
    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: { Accept: 'application/zip' },
        })

        if (response.status !== 200) {
            throw "request error"
        }

        const body = Buffer.from(response.data,'Shift_JIS')
        const adm = new AdmZip(body)
        adm.extractAllTo(dir)

        const binary = fs.readFileSync(csv, 'binary')
        const utf8 = iconv.decode(binary, 'Shift_JIS')
        const arr = csvSync(utf8)

        const postcode = arr.reduce((obj, values) => {
            obj[values[2]] = obj[values[2]] ? ++obj[values[2]] : 1
            return obj
        }, {})

        const all = arr.map((values,i) => {
            const ret = values.reduce((obj, value, j) => {
                obj[headers[j]] = value
                return obj
            }, {})
            ret.multiple = postcode[values[2]]
            return ret
        })

        // 一町域が二以上の郵便番号で表される場合
        let result = {}
        if (type === 'all' || type === 'type1') {
            const type1 = all.filter((values) => values.flag1 === '1')
            if (type1.length > 0){
                const type1Sample = [type1[Math.floor(Math.random() * type1.length)]]
                result.type1 = type1.filter((values)=> (type1Sample[0].pref === values.pref && type1Sample[0].city === values.city))
            }
        }

        // 一つの郵便番号で二以上の町域を表す場合
        if (type === 'all' || type === 'type2') {
            const type2 = all.filter((values) => values.flag4 === '1')
            if (type2.length > 0){
                const type2Sample = [type2[Math.floor(Math.random() * type2.length)]]
                result.type2 = type2.filter((values)=> (type2Sample[0].postcode === values.postcode))
            }
        }

        // 町域部分の文字数が38文字を越える場合
        if (type === 'all' || type === 'type3') {
            const type3 = all.filter((values) => (values.multiple > 1 && values.flag1 === "1" && values.town.length >= 37))
            if (type3.length > 0){
                const type3Sample = [type3[Math.floor(Math.random() * type3.length)]]
                result.type3 = all.filter((values)=> (type3Sample[0].postcode === values.postcode && type3Sample[0].pref === values.pref && type3Sample[0].city === values.city))
            }
        }

        // 想定しない記号や半角が入っている　（）「」、ー－～・以外
        if (type === 'all' || type === 'type4') {
            const type4 = all.filter((values) => /[ -~　。，．：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃〆〇―‐／＼∥｜…‥‘’“”〔〕［］｛｝〈〉《》『』【】＋±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓∈∋⊆⊇⊂⊃∪∩∧∨￢⇒⇔∀∃∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬Å‰♯♭♪†‡¶◯]/.test(values.town))
            if (type4.length > 0){
                const type4Sample = [type4[Math.floor(Math.random() * type4.length)]]
                result.type4 = all.filter((values)=> (type4Sample[0].postcode === values.postcode && type4Sample[0].pref === values.pref && type4Sample[0].city === values.city))
            }
        }
        // その他系
        if (type === 'all' || type === 'type5') {
            const type5 = all.filter((values) => /(その他|次の|除く|以外|不明|一円|全域)/.test(values.town))
            if (type5.length > 0){
                const type5Sample = [type5[Math.floor(Math.random() * type5.length)]]
                result.type5 = all.filter((values)=> (type5Sample[0].postcode === values.postcode && type5Sample[0].pref === values.pref && type5Sample[0].city === values.city))
            }
        }

        if (format === 'tsv') {
            console.log(description.join("\t"))
            Object.keys(result).forEach((key)=>{
                result[key].forEach((value)=>console.log(Object.values(value).join("\t")))
            })
        } else {
            console.log(result)
        }

    } catch(err) {
        console.log(err)
    }
}

main()
