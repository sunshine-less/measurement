//每年最多154期 ,2013开始有，2022
window.addEventListener('load', function () {
    console.log('come on');
    /*
    $.getJSON("../data/t2.json",
        function (data, textStatus, jqXHR) {
            // console.log(data);
            $('body').get(0).innerHTML = 'okay'
            console.log(data.result.length);
            // data.result.forEach(i => {
            //     console.log(data.result[1]
            // });
            console.log(data.result[1]);
            for (let index = 0; index < data.result.length; index++) {
                const element = data.result[index];
                console.log(index+','+element.date+' -'+element.blue+','+element.red)
            }
        }
    );
    $.getJSON("../data/t3.json",
        function (data, textStatus, jqXHR) {
            // console.log(data);
            $('body').get(0).innerHTML = 'okay'
            console.log(data.result.length);
            // data.result.forEach(i => {
            //     console.log(data.result[1]
            // });
            console.log(data.result[1]);
            for (let index = 0; index < data.result.length; index++) {
                const element = data.result[index];
                console.log(index+','+element.date+' -'+element.blue+','+element.red)
            }
        }
    );
    */
        getValidInfo()
})


//先提取有效信息；
function getValidInfo() {
    $.getJSON("../data/gov/s1.json",
        function (data, textStatus, jqXHR) {
            console.log(data);
        }
    );
}