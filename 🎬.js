const АДРЕС_АРХИВА = "https://git.opengamestudio.org/kornerr/nPOBEPuTb-JSZip-PEC/raw/branch/master/zip_TEMA_M1K.zip";


// // // //


ИзучитьАрхив = мир =>
{
    мир.архив.file("zip_TEMA_M1K/0000").async("string").then(function(содержимое) {
        document.body.innerHTML += `<pre>${содержимое}</pre>`;
    });
};


// // // //


РазобратьАрхив = мир =>
{
    var zip = new JSZip();
    zip.loadAsync(мир.архив).then(function(архив) {
        мир.архив = архив;
        мир.уведомить("разобрали архив");
    });
};


// // // //


СкачатьАрхив = мир =>
{
    мир.взять(
        АДРЕС_АРХИВА,
        function(архив) {
            мир.архив = архив;
            мир.уведомить("скачали архив");
        },
        function(ошибка) {
            console.error("ОШИБКА:", ошибка);
        },
        true
    );
};


// // // //


СкрытьКрутилку = мир =>
{
    document.getElementById("крутилка").style.display = "none";
};


// // // //


ЗадатьЗаголовок = мир =>
{
    document.title = "Проверить JSZip";
};


// // // //


УстановитьJSZip = мир =>
{
    var м = мир.модули.модульПоУказателю(УКАЗАТЕЛЬ_ЭТОГО_МОДУЛЯ);
    var содержимое = м.содержимое["/jszip.min.js"];
    eval(содержимое);
};