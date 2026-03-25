console.log(location.href); //تجيب الرابط الحالي
location.href = "https://google.com"; //تنقل لصفحة تانية
location.reload(); //إعادة تحميل الصفحة
//https://example.com:8080/page?name=yasser#top : لو الرابط كده:

console.log(location.protocol); // https:
console.log(location.hostname); // example.com
console.log(location.port); // 8080
console.log(location.pathname); // /page
console.log(location.search); // ?name=yasser
console.log(location.hash); // #top
