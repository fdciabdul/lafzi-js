const axios = require('axios')
const cheerio = require('cheerio');
const urlencode = require('urlencode');
const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

function ayat(kata) {
    return new Promise(resolve => {
        var url = "https://laqin-wap.herokuapp.com/web/search.php?q=" + urlencode(kata);
        axios.get(url, config)
            .then((result) => {
                let $ = cheerio.load(result.data);
                let ig = [];

                $('div.aya_container').each(function (i, e) {
                    ig.push({
                        arab: $('div.aya_text').text(),
                        indo: $('div.aya_trans').text()
                    })
                });
                resolve(ig)
            })
            .catch((err) => {
                console.log(err);
            })
    });
}

exports.ayat = ayat;
